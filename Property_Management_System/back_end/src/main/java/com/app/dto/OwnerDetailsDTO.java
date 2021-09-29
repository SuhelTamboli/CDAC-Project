package com.app.dto;

import com.app.pojos.PropertyDetails;
import com.app.pojos.Users;

public interface OwnerDetailsDTO {
	Users getOwnerData();
       interface Users{
    	      String getName();
    	      String getContactNo();
       }
}
