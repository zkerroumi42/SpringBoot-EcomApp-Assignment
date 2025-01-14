package com.example.wassit.service;

import com.example.wassit.model.Appartement;
import com.example.wassit.model.Chambre;
import com.example.wassit.repository.AppartementRepository;
import com.example.wassit.repository.ChambreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ChambreService {
    @Autowired
    private ChambreRepository chambrerepo;
    @Autowired
    private AppartementRepository appartementRepo;

    public List<Chambre> getAll() {
        return chambrerepo.findAll();
    }

    public Chambre getDetails(Long id) {
        return chambrerepo.findById(id).orElse(null);
    }
    public Chambre save(Chambre chambre, Long appartementId) {
        Appartement appartement = appartementRepo.findById(appartementId)
                .orElseThrow(() -> new RuntimeException("Appartement not found"));
        chambre.setAppartement(appartement);
        return chambrerepo.save(chambre);
    }
    public Chambre update(Long id, Chambre chambreDetails) {
        Chambre chambre = chambrerepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Chambre not found"));

        chambre.setStatus(chambreDetails.getStatus());
        chambre.setType(chambreDetails.getType());
        chambre.setPrix(chambreDetails.getPrix());
        chambre.setDescription(chambreDetails.getDescription());
        chambre.setMaxMembers(chambreDetails.getMaxMembers());

        return chambrerepo.save(chambre);
    }
    public void delete(Long id) {
        Chambre chambre = chambrerepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Chambre not found"));
        Appartement appartement = chambre.getAppartement();
        chambrerepo.delete(chambre);
        if (appartement != null) {
            appartementRepo.save(appartement);
        }
    }

}
