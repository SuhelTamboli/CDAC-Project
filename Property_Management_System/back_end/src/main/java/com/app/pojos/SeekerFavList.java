/*package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name="fav_list")
public class SeekerFavList {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@OneToOne
	@JoinColumn(name="seeker_id")
	private Users userData;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="property_id")
	private List<PropertyDetails> propList=new ArrayList<>();
	public SeekerFavList()
	{
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Users getUserData() {
		return userData;
	}

	public void setUserData(Users userData) {
		this.userData = userData;
	}

	public List<PropertyDetails> getPropList() {
		return propList;
	}

	public void setPropList(List<PropertyDetails> propList) {
		this.propList = propList;
	}


      
}
*/