package com.suryansh.Service;

import com.suryansh.Entity.Comments;

import java.util.List;

public interface CommentsService {
    List<Comments> getShowComments(int id);

    void save(Comments comment);
}
