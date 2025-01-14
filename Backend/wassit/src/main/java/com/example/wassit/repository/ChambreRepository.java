package com.example.wassit.repository;

import com.example.wassit.model.Chambre;
import com.example.wassit.model.Proprietaire;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChambreRepository extends JpaRepository<Chambre, Long> {
}