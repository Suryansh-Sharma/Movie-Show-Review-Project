package com.suryansh.Controller;

import com.suryansh.Entity.Comments;
import com.suryansh.Entity.Shows;
import com.suryansh.Model.AllShowNames;
import com.suryansh.Service.CommentsService;
import com.suryansh.Service.ShowsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/shows")
@Slf4j
@CrossOrigin
public class ShowsController {
    @Autowired
    private ShowsService showsService;

    @Autowired
    private CommentsService commentsService;

    // Get All Movie Name for Search bar .
    @GetMapping("/allShowsName")
    public List<AllShowNames> getAllMoviesName() {
        List<String> list = showsService.getAllShowsName();
        List<AllShowNames> res = new ArrayList<>();
        list.forEach((name) -> {
            AllShowNames show = new AllShowNames(name);
            res.add(show);
        });
        return res;
    }

    // Get Full show  by their Name.
    @GetMapping("/get/{name}")
    ResponseEntity<Shows> getFullDetailsTest(@PathVariable String name) {
        Optional<Shows> show = showsService.getAllMovieByNameTest(name);
        if (show.isEmpty()) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(show.get(), HttpStatus.OK);
    }

    // Get All Shows with Paging.
    @GetMapping("/all/{pageNumber}")
    public List<Shows> all(@PathVariable int pageNumber) {
        Pageable pageable =
                PageRequest.of(pageNumber, 6);

        return showsService.getAllShows(pageable);
    }

    // Get Show by Type .
    @GetMapping("/getShowsByType/{type}/{page}")
    ResponseEntity<List<Shows>> getAllShowsByTag(@PathVariable String type, @PathVariable int page) {
        Pageable pageable =
                PageRequest.of(page, 6);
        List<Shows> show = showsService.getAllByTag(type, pageable);
        if (show.size() <= 0) {
            return new ResponseEntity<>(null, HttpStatus.OK);
        }

        return new ResponseEntity<>(show, HttpStatus.OK);
    }

    //  Get Shows By their Genre.
    @GetMapping("/showGenre/{str}/{page}")
    ResponseEntity<List<Shows>> showsList(@PathVariable String str, @PathVariable int page) {
        Pageable pageable =
                PageRequest.of(page, 6);

        List<Shows> res = showsService.getByGenre(str, pageable);
        if (res.size() <= 0) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    // Get Shows By Director Name.
    @GetMapping("/director/{name}/{page}")
    public ResponseEntity<List<Shows>> getMovieByDirectorName(@PathVariable String name, @PathVariable int page) {
        Pageable pageable =
                PageRequest.of(page, 6);
        List<Shows> shows = showsService.getMovieByDirectorName(name, pageable);
        if (shows.size() <= 0) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(shows, HttpStatus.OK);
    }

    // Get Shows By Actor Name.
    @GetMapping("/actor/{name}/{page}")
    ResponseEntity<List<Shows>> GetActorDetails(@PathVariable String name, @PathVariable int page) {
        Pageable pageable =
                PageRequest.of(page, 6);
        List<Shows> res = showsService.getMovieByActor(name);
        if (res.size() <= 0) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(res, HttpStatus.OK);
    }


    @GetMapping({"/getComments/{id}"})
    public List<Comments> getShowComments(@PathVariable int id) {
        return commentsService.getShowComments(id);
    }

}
