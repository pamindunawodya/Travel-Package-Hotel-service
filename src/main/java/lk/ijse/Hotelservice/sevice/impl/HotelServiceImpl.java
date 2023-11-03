package lk.ijse.Hotelservice.sevice.impl;


import lk.ijse.Hotelservice.dto.HotelDTO;
import lk.ijse.Hotelservice.entity.Hotel;
import lk.ijse.Hotelservice.repo.HotelRepo;
import lk.ijse.Hotelservice.sevice.HotelService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
@Transactional
public class HotelServiceImpl implements HotelService {

    @Autowired
    HotelRepo hotelRepo;

    @Autowired
    ModelMapper modelMapper;


    @Override
    public void addHotel(HotelDTO hotelDTO) {
        if (hotelRepo.existsByEmail(hotelDTO.getEmail())){
            throw new RuntimeException(hotelDTO.getEmail()+"Already exists!");
        }
        Hotel map = modelMapper.map(hotelDTO, Hotel.class);
        map.setFileData(null);
//      hotel=modelMapper.map(hotelDTO,Hotel.class);
        hotelRepo.save(map);

        Hotel hotel = hotelRepo.findByEmail(hotelDTO.getEmail()).get();
        hotel.setFileData(hotelDTO.getFileData());
        hotelRepo.save(hotel);
    }

    @Override
    public void deleteHotel(String email) {
    if (!hotelRepo.existsByEmail(email)){
        throw new RuntimeException("Hotel"+email+"Not Available Deleted");
    }

    hotelRepo.deleteByEmail(email);

    }

    @Override
    public void updateHotel(Hotel hotelDTO) {

        Optional<Hotel> byEmail = hotelRepo.findByEmail(hotelDTO.getEmail());
        if (byEmail.isEmpty()){
            throw new RuntimeException("Emial dosen't exist");
        }
//        hotelDTO.setId(byEmail.get().getId());
        hotelRepo.save(modelMapper.map(hotelDTO, Hotel.class));
    }

    @Override
    public ArrayList<HotelDTO> getAllHotel() {
        return modelMapper.map(hotelRepo.findAll(), new TypeToken<ArrayList<HotelDTO>>() {}.getType());
    }

    @Override
    public List<HotelDTO> searchHotelByName(String name) {

        return modelMapper.map(hotelRepo.findAllByName(name), new TypeToken<ArrayList<HotelDTO>>() {}.getType());
    }

    @Override
    public Hotel findByEmail(String email) {
        if (!hotelRepo.existsByEmail(email)){
             throw new RuntimeException("Hotel"+email+"Not Available");
        }
        Optional<Hotel> byEmail = hotelRepo.findByEmail(email);
        return byEmail.get();

    }


}
