package com.suryansh.Entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Setter
public class Genre {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int idGenre;
    private String genreName;
    private int id;

    public String getGenreName() {
        return genreName;
    }
}