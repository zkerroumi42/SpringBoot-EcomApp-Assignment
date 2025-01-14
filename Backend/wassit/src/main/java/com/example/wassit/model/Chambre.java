package com.example.wassit.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Chambre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonBackReference // Évite les boucles infinies lors de la sérialisation
    @ManyToOne
    @JoinColumn(name = "appartement_id", nullable = false)
    private Appartement appartement;

    private String description;
    private Integer maxMembers; // Utilisation d'un type numérique cohérent
    private Double prix; // Utilisation de Double pour gérer les décimales
    private String status;
    private String type;
}
