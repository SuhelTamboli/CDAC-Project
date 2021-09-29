package com.app.service;

import java.util.List;

import com.app.custom_excs.ResourceNotFoundException;
import com.app.dto.PropertyDetailsDTO;
import com.app.pojos.Users;

public interface IAdminService {
    List<Users> fetchAllUsers();
    String deletePropertyById(int propId) throws ResourceNotFoundException;
    
}
