package com.suryansh.Service;

import com.suryansh.Entity.Shows;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ShowsService {
    List<Shows> getAllShows(Pageable pageable);


    List<Shows> getAllByTag(String type, Pageable pageable);

    List<Shows> getByGenre(String s, Pageable str);


    void SaveShow(Shows show);

    int GetLastId();


    Optional<Shows> getAllMovieByNameTest(String name);

    List<Shows> getMovieByActor(String name);

    List<Shows> getMovieByDirectorName(String name, Pageable pageable);

    int getAllShowsTotalNumber(Pageable pageable);

    List<String> getAllShowsName();

}