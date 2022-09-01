package com.suryansh.Service;

import com.suryansh.Entity.Comments;
import com.suryansh.Repository.CommentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentsServiceImpl implements CommentsService{

    @Autowired
    private CommentsRepository commentsRepository;
    @Override
    public List<Comments> getShowComments(int id) {
        return commentsRepository.findByShowId(id);
    }

    @Override
    public void save(Comments comment) {
        commentsRepository.save(comment);
    }
}
