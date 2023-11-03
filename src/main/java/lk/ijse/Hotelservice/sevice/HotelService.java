package lk.ijse.Hotelservice.sevice;

import lk.ijse.Hotelservice.dto.HotelDTO;
import lk.ijse.Hotelservice.entity.Hotel;


import java.util.ArrayList;
import java.util.List;

public interface HotelService {

    public void  addHotel(HotelDTO hotelDTO);

    void deleteHotel(String email);

    void updateHotel(Hotel hotelDTO);

    ArrayList<HotelDTO>getAllHotel();

    List<HotelDTO> searchHotelByName(String name);

    Hotel findByEmail(String email);







}
