package com.coursework.Kotik.Controllers;

import com.coursework.Kotik.Models.*;
import com.coursework.Kotik.Repositories.OrderRepository;
import com.coursework.Kotik.Repositories.UserRepository;
import com.coursework.Kotik.Service.CustomUserDetailsService;
import com.coursework.Kotik.Service.ProductService;
import com.coursework.Kotik.Service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {
    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    private PurchaseService purchaseService;

    @Autowired
    private ProductService productService;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/completeOrder")
    public ResponseEntity<OrderResponse> completeOrder(Authentication authentication, @RequestBody OrderRequest orderRequest) {
        User user = ((User) userDetailsService.getByUsername(authentication.getName()));
        System.out.println(orderRequest.getTotalPrice());
        Order newOrder = new Order(orderRequest.getTotalPrice());

        Set<Order> orders = user.getOrders();
        orders.add(newOrder);

        user.setOrders(orders);

        Order order = orderRepository.save(newOrder);
        userRepository.save(user);

        return ResponseEntity.ok(new OrderResponse(
                order.getId(),
                order.getDate(),
                order.getTotalPrice()
        ));
    }

    @GetMapping("/")
    public ResponseEntity<Set<Order>> getOrdersOfCurrentUser(Authentication authentication) {
        User user = ((User) userDetailsService.getByUsername(authentication.getName()));

        return new ResponseEntity<>(user.getOrders(), HttpStatus.OK);
    }
}