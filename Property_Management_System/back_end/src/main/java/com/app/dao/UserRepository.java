package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Users;
import com.app.pojos.Role;

public interface UserRepository extends JpaRepository<Users, Integer>{
	@Query("select  u from Users u where u.email=:em and u.password=:pass")
        Optional<Users> Login(@Param("em") String email,@Param("pass") String password);	 
	
	@Query ("Select u.contactNo from Users u where u.id=:ownerid")
	   String getUserDetails(@Param("ownerid") int id);
	
     @Query("select u from Users u where u.id=:id and u.role=:role")
       Users profilePage(@Param("id") int id,@Param("role") Role role);
     
     @Query("select u.email from Users u where u.email=:email")
        String existsByEmail(@Param ("email") String email);
     
     @Query("select u from Users u where u.email=:email")
     Users findByEmail(@Param ("email") String email);       
}
