package com.example.wassit.controller;

import com.example.wassit.model.Proprietaire;
import com.example.wassit.service.ProprietaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/proprietaires")
@CrossOrigin(origins = "http://localhost:4200")
public class ProprietaireController {

    @Autowired
    private ProprietaireService service;

    @GetMapping
    public List<Proprietaire> getAllProprietaires() {
        return service.getAllProprietaires();
    }

    @GetMapping("/{id}")
    public Proprietaire getProprietaireById(@PathVariable Long id) {
        return service.getProprietaireById(id);
    }

    @PostMapping
    public Proprietaire createProprietaire(@RequestBody Proprietaire proprietaire) {
        return service.saveProprietaire(proprietaire);
    }

    @PutMapping("/{id}")
    public Proprietaire updateProprietaire(@PathVariable Long id, @RequestBody Proprietaire proprietaire) {
        Proprietaire existing = service.getProprietaireById(id);
        if (existing != null) {
            existing.setNom(proprietaire.getNom());
            existing.setPrenom(proprietaire.getPrenom());
            existing.setTelephone(proprietaire.getTelephone());
            existing.setIdLocal(proprietaire.getIdLocal());
            existing.setCin(proprietaire.getCin());
            existing.setPassword(proprietaire.getPassword());
            existing.setAdresse(proprietaire.getAdresse());
            return service.saveProprietaire(existing);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteProprietaire(@PathVariable Long id) {
        service.deleteProprietaire(id);
    }
}
