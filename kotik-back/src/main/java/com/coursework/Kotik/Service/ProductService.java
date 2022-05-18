package com.coursework.Kotik.Service;

import com.coursework.Kotik.Models.Product;
import com.coursework.Kotik.Repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;
    public List<Product> findByType(String type){
        return productRepository.findByType(type);
    }
    public Product findProductById(Long id){
        return productRepository.findProductById(id);
    }
}
