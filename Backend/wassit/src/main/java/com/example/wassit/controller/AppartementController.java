package com.example.wassit.controller;

import com.example.wassit.model.Appartement;
import com.example.wassit.service.AppartementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/appartements")
public class AppartementController {

    @Autowired
    private AppartementService appartementService;

    @GetMapping
    public List<Appartement> getAllAppartements() {
        return appartementService.getAllAppartements();
    }

    @GetMapping("/{id}")
    public Appartement getAppartementById(@PathVariable Long id) {
        return appartementService.getAppartementById(id);
    }

    @PostMapping
    public Appartement createAppartement(@RequestBody Appartement appartement, @RequestParam Long proprietaireId) {
        return appartementService.createAppartement(appartement, proprietaireId);
    }

    @PutMapping("/{id}")
    public Appartement updateAppartement(@PathVariable Long id, @RequestBody Appartement appartementDetails) {
        return appartementService.updateAppartement(id, appartementDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteAppartement(@PathVariable Long id) {
        appartementService.deleteAppartement(id);
    }
}
