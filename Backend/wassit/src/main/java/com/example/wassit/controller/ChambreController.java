package com.example.wassit.controller;

import com.example.wassit.model.Chambre;
import com.example.wassit.service.ChambreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/chambres")
public class ChambreController {
    @Autowired
    private ChambreService service;
    @GetMapping
    public List<Chambre> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Chambre getDetails(@PathVariable Long id) {
        return service.getDetails(id);
    }
    @PostMapping("/create")
    public Chambre create(@RequestBody Chambre chambre, @RequestParam Long appartementId) {
        return service.save(chambre,appartementId);
    }


    @PutMapping("/{id}/update")
    public Chambre update(@PathVariable Long id, @RequestBody Chambre chambre) {
        Chambre existing = service.getDetails(id);
        if (existing != null) {
            existing.setDescription(chambre.getDescription());
            existing.setMaxMembers(chambre.getMaxMembers());
            existing.setPrix(chambre.getPrix());
            existing.setStatus(chambre.getStatus());
            existing.setType(chambre.getType());

            return service.update(id, existing);
        }
        return null;
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

}
