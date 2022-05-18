package com.coursework.Kotik.Repositories;

import com.coursework.Kotik.Models.Product;
import com.coursework.Kotik.Models.User;
import org.springframework.data.repository.CrudRepository;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByEmail (String email);
    Optional<User> findByUsername (String username);
}

