//
//
//import java.util.HashSet;
//import java.util.Set;
//
//import javax.persistence.*;
//
//@Entity
//@Table(name="District")
//public class City {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int id;
//	@Column(name="city_name",unique=true,length=25)
//	private String cityName;
//	@Column(length=25)
//	private String state;
//	@OneToMany(mappedBy="cityData",cascade=CascadeType.ALL,fetch = FetchType.EAGER)
//	 private Set<AreaInfo>areaList=new HashSet<>();
//	public City()
//	{
//		
//	}
//	public City(String cityName, String state) {
//		super();
//		this.cityName = cityName;
//		this.state = state;
//	}
//	public int getId() {
//		return id;
//	}
//	public void setId(int id) {
//		this.id = id;
//	}
//	public String getCityName() {
//		return cityName;
//	}
//	public void setCityName(String cityName) {
//		this.cityName = cityName;
//	}
//	public String getState() {
//		return state;
//	}
//	public void setState(String state) {
//		this.state = state;
//	}
//	public Set<AreaInfo> getAreaList() {
//		return areaList;
//	}
//	public void setAreaList(Set<AreaInfo> areaList) {
//		this.areaList = areaList;
//	}
//	@Override
//	public String toString() {
//		return "City [id=" + id + ", cityName=" + cityName + ", state=" + state +"]";
//	}
//	   
//	
//}
