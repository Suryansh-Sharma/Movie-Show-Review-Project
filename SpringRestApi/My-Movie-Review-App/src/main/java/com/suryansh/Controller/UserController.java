package com.suryansh.Controller;
/*
 * This Controller handle Authorization Api ,User Registration.
 * This Controller handle Upload Comments,upload Show,Role Based.
 * */

import com.suryansh.Entity.Comments;
import com.suryansh.Entity.Shows;
import com.suryansh.Entity.User;
import com.suryansh.Model.JwtRequest;
import com.suryansh.Service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import javax.annotation.PostConstruct;
import javax.validation.Valid;
import java.util.Optional;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private CommentsService commentsService;

    @Autowired
    private ShowsService showsService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AttachmentService attachmentService;


    @PostConstruct
    public void initRoleAndUser() {
        userService.initRoleAndUser();
    }

    @PostMapping({"/registerNewUser"})
    public ResponseEntity registerNewUser(@RequestBody @Valid User user) {
        String name = user.getUserName();
        Optional<User> isPresent = userService.checkIsUserAlreadyPresent(name);
        if (isPresent.isPresent()) {
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body("User is Already Registered ");
        } else {
            return new ResponseEntity(userService.registerNewUser(user), HttpStatus.OK);
        }
    }

    // Only Admin Can Add Shows.
    @PostMapping("/save")
    @PreAuthorize("hasRole('Admin')")
    public void SaveShow(@RequestBody Shows shows) {
        try {
            showsService.SaveShow(shows);
        } catch (Exception s) {
            System.out.println(s);
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Only Login User Can Post Comments on Show.
    @PostMapping({"/uploadComment"})
    @PreAuthorize("hasAnyRole('User','Admin')")
    ResponseEntity<Void> uploadComment(@RequestBody Comments comment) {
        try {
            commentsService.save(comment);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping({"/getAccountDetails/{name}"})
    @PreAuthorize("hasAnyRole('User','Admin')")
    ResponseEntity<User> getAccountDetails(@PathVariable String name) {
        Optional<User> user = userService.getAccountDetails(name);
        if (user.isEmpty()) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(user.get(), HttpStatus.OK);
    }

    // Check User Name and Password is Valid or Not.
    @PostMapping({"/checkPassword"})
    @PreAuthorize("hasAnyRole('User','Admin')")
    ResponseEntity<Void> checkPassword(@RequestBody JwtRequest jwtRequest) throws Exception {
        try {
            jwtService.authenticate(jwtRequest.getUserName(), jwtRequest.getUserPassword());
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //Update valid User Password.
    @PostMapping({"/updatePassword"})
    @PreAuthorize("hasAnyRole('User','Admin')")
    ResponseEntity<Void> updatePassword(@RequestBody JwtRequest jwtRequest) {
        System.out.println(jwtRequest);
        try {
            String newPassword = userService
                    .getEncodedPassword(jwtRequest
                            .getUserPassword()
                    );
            userService.updateUserPassword(jwtRequest.getUserName(), newPassword);
        } catch (Exception exception) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // Update Profile Picture of Account.
    @PostMapping({"/updateImage/{userName}/{imageName}"})
    @PreAuthorize("hasAnyRole('User','Admin')")
    ResponseEntity<Void> updateImage(
            @RequestParam("file") MultipartFile file,
            @PathVariable String userName,
            @PathVariable String imageName
    ) {
        String newFileName = file.getOriginalFilename();
        if (newFileName.indexOf(".") > 0) {
            newFileName = newFileName.substring(0, newFileName.lastIndexOf("."));
        }
        try {
            userService.updateUserImage(userName, newFileName);
            attachmentService.deleteAttachment(imageName);
            attachmentService.saveAttachment(file);
        } catch (Exception exception) {
            System.out.println(exception);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // Test Api for Admin.
    @GetMapping("/forAdmin")
    @PreAuthorize("hasRole('Admin')")
    public String hasAdmin() {
        return "<h1>Hello Admin,Have a Good Day.<h1>";
    }

    // Test Api for User.
    @GetMapping("/forUser")
    @PreAuthorize("hasRole('User')")
    public String hasUser() {
        return "<h1>Hello User,Have a Good Day.<h1>";
    }
}