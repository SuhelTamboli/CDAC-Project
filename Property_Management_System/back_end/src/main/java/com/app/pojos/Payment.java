package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.*;

/*@Entity
@Table(name="payment")
public class Payment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name="trans_date")
	private LocalDate transDate;
	@Column(name="next_pay_date")
	private LocalDate nextTransDate;
	private double amount;
	@Enumerated(EnumType.STRING)
	private Type  paymentType;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="seeker_id")
	private Users seekerData;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="owner_id")
	private Users pownerData;
	@OneToOne
	@JoinColumn(name="property_id")
	private PropertyDetails ppropertyData;
	public Payment()
	{
		
	}
	public Payment(LocalDate transDate, LocalDate nextTransDate, double amount, Type paymentType, Users seekerData,
			Users pownerData, PropertyDetails ppropertyData) {
		super();
		this.transDate = transDate;
		this.nextTransDate = nextTransDate;
		this.amount = amount;
		this.paymentType = paymentType;
		this.seekerData = seekerData;
		this.pownerData = pownerData;
		this.ppropertyData = ppropertyData;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public LocalDate getTransDate() {
		return transDate;
	}
	public void setTransDate(LocalDate transDate) {
		this.transDate = transDate;
	}
	public LocalDate getNextTransDate() {
		return nextTransDate;
	}
	public void setNextTransDate(LocalDate nextTransDate) {
		this.nextTransDate = nextTransDate;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public Type getPaymentType() {
		return paymentType;
	}
	public void setPaymentType(Type paymentType) {
		this.paymentType = paymentType;
	}
	public Users getSeekerData() {
		return seekerData;
	}
	public void setSeekerData(Users seekerData) {
		this.seekerData = seekerData;
	}
	public Users getPownerData() {
		return pownerData;
	}
	public void setPownerData(Users pownerData) {
		this.pownerData = pownerData;
	}
	public PropertyDetails getPpropertyData() {
		return ppropertyData;
	}
	public void setPpropertyData(PropertyDetails ppropertyData) {
		this.ppropertyData = ppropertyData;
	}
	@Override
	public String toString() {
		return "Payment [id=" + id + ", transDate=" + transDate + ", nextTransDate=" + nextTransDate + ", amount="
				+ amount + ", paymentType=" + paymentType + ", seekerData=" + seekerData + ", pownerData=" + pownerData
				+ ", ppropertyData=" + ppropertyData + "]";
	}
	
      
}*/
