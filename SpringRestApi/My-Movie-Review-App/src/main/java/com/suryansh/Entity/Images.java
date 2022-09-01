package com.suryansh.Entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Setter
public class Images {

    @Id
    private int imageId;
    private String coverImage;
    private String poster1;
    private String poster2;
    private String poster3;

    public int getImageId() {
        return imageId;
    }

    public String getCoverImage() {
        String link= "http://localhost:8080/file/download/";
        return link+coverImage;
    }

    public String getPoster1() {
        String link= "http://localhost:8080/file/download/";
        return link+poster1;
    }

    public String getPoster2() {
        String link= "http://localhost:8080/file/download/";
        return link+poster2;
    }

    public String getPoster3() {
        String link= "http://localhost:8080/file/download/";
        return link+poster3;
    }
}
