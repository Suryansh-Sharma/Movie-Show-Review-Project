package com.suryansh.Repository;

import com.suryansh.Entity.Shows;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ShowRepository extends JpaRepository<Shows,Integer> {

    @Query("select name from Shows ")
    List<String> getAllShowsName();


    List<Shows> findByType(String type, Pageable pageable);

    // To Get Show By Genre With Page.

    @Query(value ="SELECT * FROM shows INNER JOIN genre ON shows.id = genre.id WHERE genre.genre_name LIKE :str" ,nativeQuery = true)
    List<Shows> findByGenre(@Param("str") String str, Pageable page);

    Optional<Shows> findByName(String name);

    @Query(value =  "SELECT max(Id) FROM shows",
        nativeQuery = true
    )
    int getLastId();

    List<Shows> getAllByDirectorName(String name);

    @Query(value = "SELECT * FROM shows INNER JOIN cast ON shows.id = cast.id WHERE cast.actor_name LIKE :name",
        nativeQuery = true
    )
    List<Shows> findByActorName(@Param("name") String name);

}
