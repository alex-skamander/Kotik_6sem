package com.coursework.Kotik.Controllers;

import com.coursework.Kotik.Models.Product;
import com.coursework.Kotik.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/{type}")
    public ResponseEntity<List<Product>> getProductByType(@PathVariable("type") String type) {
        return ResponseEntity.ok(productService.findByType(type));
    }

}

