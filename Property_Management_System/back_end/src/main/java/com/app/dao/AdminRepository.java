package com.app.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import com.app.pojos.Users;
public interface AdminRepository extends JpaRepository<Users, Integer>{
      

}
