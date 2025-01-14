package com.example.wassit.Dtos;

import lombok.Data;

@Data
public class ChambreDto {
    private String description;
    private String max_members;
    private Long prix;
    private String status;
    private String type;
}
