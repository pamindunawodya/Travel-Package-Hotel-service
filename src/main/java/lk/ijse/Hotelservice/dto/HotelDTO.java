package lk.ijse.Hotelservice.dto;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString

public class HotelDTO {

    private Long id;
    private String name;
    private String category;
    private String location;
    private String contact;
    private String email;
    private String petsAllowOrNot;
    private byte[] fileData;
    private double opt1;
    private double opt2;
    private double opt3;



}
