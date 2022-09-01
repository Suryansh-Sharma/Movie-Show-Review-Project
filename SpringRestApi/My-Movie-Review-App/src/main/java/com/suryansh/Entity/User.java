package com.suryansh.Entity;



import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Entity
@Getter
@Setter
@ToString
public class User {

    @Id
    @NotEmpty(message = "Please Enter User Name")

    private String userName;
    @NotEmpty(message = "Please Enter First Name")
    private String userFirstName;
    private String userLastName;
    @NotEmpty(message = "Please Enter User Password")
    private String userPassword;
    private String userEmail;
    private String userPic;
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "USER_ROLE",
            joinColumns = {
                    @JoinColumn(name = "USER_ID")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "ROLE_ID")
            }
    )
    private Set<Role> role;

}