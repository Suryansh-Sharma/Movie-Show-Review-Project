package com.suryansh.Entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Shows {
    @Id
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "rating")
    private int rating;

    @Column(name = "description")
    private String description;

    @Column(name = "time")
    private String time;


    @Column(name = "type")
    private String type;

    @Column(name = "releaseDate")
    private String releaseDate;


    private String directorName;

    // For One to Many Mapping of Images.
    @OneToOne(
            cascade = CascadeType.ALL,
            fetch = FetchType.EAGER
    )
    @JoinColumn(
            name ="id",
            referencedColumnName = "imageId"
    )
    private Images images;

    // One to Many Mapping for Cast for Shows.
    @OneToMany(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name ="id",
            referencedColumnName = "id"
    )
    private List<Cast> showCasts;
    // One to Many Mapping for Genre.
    @OneToMany(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "id",
            referencedColumnName = "id"
    )
    private List<Genre> showGenre;

}
