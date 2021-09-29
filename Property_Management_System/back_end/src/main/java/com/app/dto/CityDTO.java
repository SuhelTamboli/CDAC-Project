package com.app.dto;

public class CityDTO {
private String cityName;
private String state;
public String getCityName() {
	return cityName;
}
public void setCityName(String cityName) {
	this.cityName = cityName;
}
public String getState() {
	return state;
}
public void setState(String state) {
	this.state = state;
}
@Override
public String toString() {
	return "CityDTO [cityName=" + cityName + ", state=" + state + "]";
}
}
