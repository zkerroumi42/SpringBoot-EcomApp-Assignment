package com.example.wassit.repository;

import com.example.wassit.model.Appartement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppartementRepository extends JpaRepository<Appartement, Long> {
}
