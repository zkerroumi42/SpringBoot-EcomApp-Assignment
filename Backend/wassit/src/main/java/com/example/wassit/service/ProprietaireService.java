package com.example.wassit.service;

import com.example.wassit.model.Proprietaire;
import com.example.wassit.repository.ProprietaireRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProprietaireService {

    @Autowired
    private ProprietaireRepository repository;

    public List<Proprietaire> getAllProprietaires() {
        return repository.findAll();
    }

    public Proprietaire getProprietaireById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Proprietaire saveProprietaire(Proprietaire proprietaire) {
        return repository.save(proprietaire);
    }

    public void deleteProprietaire(Long id) {
        repository.deleteById(id);
    }
}
