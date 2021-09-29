/*package com.app.dao;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;

import com.app.dto.AddPropertyDTO;
import com.app.dto.AreaDTO;
import com.app.dto.SelectCityTaluqaDTO;
import com.app.pojos.AreaInfo;

@EnableJpaRepositories
public interface AreaInfoRepository extends JpaRepository<AreaInfo,Integer>{
	@Query("select a from AreaInfo a where a.areaName=:areaName and a.cityData.cityName=:city")
	       List <AreaDTO> findFlatByCity(@Param(value = "areaName") String areaName, @Param (value = "city") String cityName);
	@Query("select a from AreaInfo a join fetch a.cityData")
	  List<SelectCityTaluqaDTO> selectCityTaluqa();
	
	@Query("select a.areaName from AreaInfo a where a.areaName=:areaName")
	String existsAreaByName(@Param(value="areaName")String areaName);
}
*/