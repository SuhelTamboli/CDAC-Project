/*package com.app.pojos;

import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="Taluqa")
public class AreaInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name="area_name")
	private String areaName;
	@Column(name="pincode",unique=true)
	private String pinCode;
	@ManyToOne//(cascade=CascadeType.ALL)
	@JoinColumn(name="cityid")
	private City cityData;
	@OneToMany(mappedBy = "areaData",cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JsonIgnoreProperties("areaData")
	//@JsonIgnore
	private List<PropertyDetails>areaPropData;
	public AreaInfo()
	{
		
	}
	public AreaInfo(String areaName, String pinCode) {
		super();
		this.areaName = areaName;
		this.pinCode = pinCode;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getAreaName() {
		return areaName;
	}
	public void setAreaName(String areaName) {
		this.areaName = areaName;
	}
	public String getPinCode() {
		return pinCode;
	}
	public void setPinCode(String pinCode) {
		this.pinCode = pinCode;
	}
	public City getCityData() {
		return cityData;
	}
	public void setCityData(City cityData) {
		this.cityData = cityData;
	}
	public List<PropertyDetails> getAreaPropData() {
		return areaPropData;
	}
	public void setAreaPropData(List<PropertyDetails> areaPropData) {
		this.areaPropData = areaPropData;
	}
	@Override
	public String toString() {
		return "AreaInfo [id=" + id + ", areaName=" + areaName + ", pinCode=" + pinCode +"]";
	}
	
}
*/