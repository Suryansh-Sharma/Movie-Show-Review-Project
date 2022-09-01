package com.suryansh.Controller;

import com.suryansh.Entity.Attachment;
import com.suryansh.Service.AttachmentService;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/file")
public class ImageController {

    private final AttachmentService attachmentService;

    public ImageController(AttachmentService attachmentService) {
        this.attachmentService = attachmentService;
    }

    @PostMapping("/upload")
    public void uploadFile(@RequestParam("file")MultipartFile file) throws Exception {
        try {
            attachmentService.saveAttachment(file);
        }catch (Exception e){
            throw new ResponseStatusException(HttpStatus.CONFLICT,"Repeated File");
        }
    }

    @GetMapping("/download/{fileName}")
    public ResponseEntity<Resource>downloadFile(@PathVariable String fileName) throws Exception{
        Attachment attachment;
        attachment = attachmentService.getAttachment(fileName);
        if (attachment==null) throw new ResponseStatusException(
                HttpStatus.NOT_FOUND,"File not Found"
        );
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(attachment.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=\"" + attachment.getFileName()
                                + "\"")
                .body(new ByteArrayResource(attachment.getData()));
    }


}
