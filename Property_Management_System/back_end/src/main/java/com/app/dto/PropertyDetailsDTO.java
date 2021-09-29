package com.app.dto;

import java.time.LocalDate;
import java.util.List;

import com.app.pojos.Type;

public interface PropertyDetailsDTO {
	  int getId();
	String getAddress();
	String getRent();
	String getStatus();
	String getCity();
	Type getPropertyType();
	LocalDate getDate();
     
}
