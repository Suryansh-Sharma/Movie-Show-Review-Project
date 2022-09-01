package com.suryansh.Repository;

import com.suryansh.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,String> {
    Optional<User> findByUserName(String name);

    @Modifying
    @Transactional
    @Query(
            value = "update user set user_pic = ?2 where user_name = ?1 ",
            nativeQuery = true
    )
    void updateUserPic(String userName, String newImageName);


    @Modifying
    @Transactional
    @Query(
            value = "update user set user_password =?2 where user_name =?1",
            nativeQuery = true
    )
    void updateUserPassword(String userName, String newPassword);
}
