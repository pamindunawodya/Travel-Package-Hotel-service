package lk.ijse.Hotelservice.repo;

import lk.ijse.Hotelservice.entity.Hotel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface HotelRepo extends JpaRepository<Hotel,Long> {

    boolean existsByEmail(String email);

    void deleteByEmail(String email);

    Optional<Hotel>  findByEmail(String email);

    List<Hotel> findAllByName(String name);




}
