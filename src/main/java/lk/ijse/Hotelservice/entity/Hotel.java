package lk.ijse.Hotelservice.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString

@Entity
public class Hotel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String category;
    private String location;
    private String contact;
    private String email;
    private String petsAllowOrNot;
    @Lob
    private byte[] fileData;
    private double opt1;
    private double opt2;
    private double opt3;

}
