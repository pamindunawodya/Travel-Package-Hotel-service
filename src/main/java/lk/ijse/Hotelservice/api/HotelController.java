package lk.ijse.Hotelservice.api;

import lk.ijse.Hotelservice.dto.HotelDTO;
import lk.ijse.Hotelservice.entity.Hotel;
import lk.ijse.Hotelservice.sevice.HotelService;
import lk.ijse.Hotelservice.util.ResponseUtil;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/hotel")
@CrossOrigin

public class HotelController {

    @Autowired
    HotelService hotelService;

    @Autowired
    ModelMapper modelMapper;

//    @PostMapping
//    public ResponseUtil addHotel(@RequestBody HotelDTO hotelDTO){
//
//        hotelService.addHotel(hotelDTO);
//        return new ResponseUtil("200","New Hotel added",hotelDTO);
//    }

    @PostMapping
    public ResponseUtil saveHotelData(@RequestPart("fileData") MultipartFile image,
                                      @RequestPart("hotel")HotelDTO hotelDTO) throws IOException {
        hotelDTO.setFileData(image.getBytes());
        hotelService.addHotel(hotelDTO);
        return new ResponseUtil("200", "Hotel added Sucessfull", null);
    }

    @DeleteMapping(params = "email")
    public ResponseUtil deleteHotel(@RequestParam String email) {

        hotelService.deleteHotel(email);
        return new ResponseUtil("200", email + "Deleted Sucessfull", null);
    }

    @PutMapping("update")
    public ResponseUtil updateHotel(
            @RequestParam("email") String email,
            @RequestParam("name") String name,
            @RequestParam("category") String category,
            @RequestParam("location") String location,
            @RequestParam("contact") String contact,
            @RequestParam("petsAllowOrNot") String petsAllowOrNot,
            @RequestParam("opt1") double opt1,
            @RequestParam("opt2") double opt2,
            @RequestParam("opt3") double opt3,
            @RequestParam("fileData")MultipartFile file
    ) throws IOException {
        Hotel existsHotel = hotelService.findByEmail(email);

        if (existsHotel != null) {
            existsHotel.setName(name);
            existsHotel.setCategory(category);
            existsHotel.setLocation(location);
            existsHotel.setContact(contact);
            existsHotel.setEmail(email);
            existsHotel.setPetsAllowOrNot(petsAllowOrNot);
            existsHotel.setFileData(file.getBytes());
            existsHotel.setOpt1(opt1);
            existsHotel.setOpt1(opt2);
            existsHotel.setOpt1(opt3);

            // Set other fields as needed.

            hotelService.updateHotel(existsHotel);
            return new ResponseUtil("200", "Updated Hotel", null);
        }

        return new ResponseUtil("404", "Hotel not found", null);
    }

//    @PutMapping
//    public ResponseUtil updateHotelData(@RequestPart("fileData") MultipartFile image,
//                                        @RequestPart("hotel") HotelDTO hotelDTO) throws IOException {
//        hotelDTO.setFileData(image.getBytes());
//        hotelService.updateHotel(hotelDTO); // Assuming you have a method to update the hotel.
//        return new ResponseUtil("200", "Hotel updated successfully", null);
//    }

    @GetMapping
    public ResponseUtil getAllHotels() {
        ArrayList<HotelDTO> hotelDTOS = hotelService.getAllHotel();
        return new ResponseUtil("200", "Show All Hotels", hotelDTOS);
    }

    @GetMapping(value = "/search", params = "name", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchHotelByName(@RequestParam String name) {

        List<HotelDTO> hotelDTOS = hotelService.searchHotelByName(name);
        return new ResponseUtil("200", name + "/b searching", hotelDTOS);
    }
}

