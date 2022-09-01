package com.suryansh.Entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Setter
public class Cast {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int castId;
    private String actorName;
    private int id;

    public String getActorName() {
        return actorName;
    }

    @OneToMany(
            mappedBy ="showCasts"
    )
    private List<Shows> shows;
}
