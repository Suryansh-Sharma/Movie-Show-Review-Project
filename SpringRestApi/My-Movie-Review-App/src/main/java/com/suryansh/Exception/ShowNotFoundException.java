package com.suryansh.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ShowNotFoundException extends Exception {
    public ResponseEntity<Object> ShowNotFoundException(String message) {
        return new ResponseEntity<>("No Found Found",HttpStatus.NOT_FOUND);
    }
}
