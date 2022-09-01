package com.suryansh.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "comments")
@Getter
@Setter
@ToString
public class Comments {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int comment_id;
    private int showId;
    private String userName;
    private String userPic;
    private String note;
    private String dateOfComment;

}