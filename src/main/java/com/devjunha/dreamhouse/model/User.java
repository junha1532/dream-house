/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.devjunha.dreamhouse.model;

import javax.persistence.*;
import lombok.*;


/**
 *
 * @author junha
 */
@Entity
@AllArgsConstructor // create constructor with all properties as argument
@NoArgsConstructor // create constructor with no properties as argument
@Data //include getters/setters
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String surname;
    private String email;
    private String username;
    private String password;
}
