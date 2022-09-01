package com.suryansh.Service;

import com.suryansh.Entity.Shows;
import com.suryansh.Repository.ShowRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.*;


@Service
@Slf4j
public class ShowServiceImpl implements ShowsService {
    @Autowired
    private ShowRepository showRepository;

    @Override
    public List<Shows> getAllByTag(String type, Pageable pageable) {
        return showRepository.findByType(type,pageable);
    }

    @Override
    public List<Shows> getByGenre(String s, Pageable page) {

        return showRepository.findByGenre(s,page);
    }

    @Override
    public List<Shows> getAllShows(Pageable pageable) {
        return showRepository.findAll(pageable).getContent();
    }


    @Override
    public void SaveShow(Shows show) {
        showRepository.save(show);
    }

    @Override
    public int GetLastId() {
        return showRepository.getLastId();
    }

    @Override
    public Optional<Shows> getAllMovieByNameTest(String name) {
        return showRepository.findByName(name);
    }

    @Override
    public List<Shows> getMovieByActor(String name) {
        return showRepository.findByActorName(name);
    }

    @Override
    public List<Shows> getMovieByDirectorName(String name, Pageable pageable) {
        return showRepository.getAllByDirectorName(name);
    }

    @Override
    public int getAllShowsTotalNumber(Pageable pageable) {
        return (int) showRepository.findAll(pageable).getTotalPages();
    }

    @Override
    public List<String> getAllShowsName() {
        return showRepository.getAllShowsName();
    }

}
