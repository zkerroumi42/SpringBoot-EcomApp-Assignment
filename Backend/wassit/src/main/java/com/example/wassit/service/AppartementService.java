package com.example.wassit.service;

import com.example.wassit.model.Appartement;
import com.example.wassit.model.Proprietaire;
import com.example.wassit.repository.AppartementRepository;
import com.example.wassit.repository.ProprietaireRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppartementService {

    @Autowired
    private AppartementRepository appartementRepository;

    @Autowired
    private ProprietaireRepository proprietaireRepository;

    public List<Appartement> getAllAppartements() {
        return appartementRepository.findAll();
    }

    public Appartement getAppartementById(Long id) {
        return appartementRepository.findById(id).orElseThrow(() -> new RuntimeException("Appartement not found"));
    }

    public Appartement createAppartement(Appartement appartement, Long proprietaireId) {
        Proprietaire proprietaire = proprietaireRepository.findById(proprietaireId)
                .orElseThrow(() -> new RuntimeException("Proprietaire not found"));

        // Set the proprietaire for the appartement
        appartement.setProprietaire(proprietaire);

        // Save the appartement
        Appartement savedAppartement = appartementRepository.save(appartement);

        // Update the idLocal of the proprietaire
        proprietaire.setIdLocal(savedAppartement.getId());
        proprietaireRepository.save(proprietaire);

        return savedAppartement;
    }

    public Appartement updateAppartement(Long id, Appartement appartementDetails) {
        Appartement appartement = appartementRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Appartement not found"));

        appartement.setVille(appartementDetails.getVille());
        appartement.setSecteur(appartementDetails.getSecteur());
        appartement.setPrix(appartementDetails.getPrix());
        appartement.setMaxMembre(appartementDetails.getMaxMembre());
        appartement.setDescription(appartementDetails.getDescription());
        appartement.setStatus(appartementDetails.getStatus());
        appartement.setBonus(appartementDetails.getBonus());
        appartement.setTypelocataire(appartementDetails.getTypelocataire());
        appartement.setTypeoffre(appartementDetails.getTypeoffre());

        return appartementRepository.save(appartement);
    }

    public void deleteAppartement(Long id) {
        Appartement appartement = appartementRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Appartement not found"));

        Proprietaire proprietaire = appartement.getProprietaire();
        if (proprietaire != null) {
            proprietaire.setIdLocal(null); // Reset idLocal if this was the latest appartement
            proprietaireRepository.save(proprietaire);
        }

        appartementRepository.delete(appartement);
    }
}
