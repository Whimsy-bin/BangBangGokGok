package com.ssafy.bbkk.db.repository;

import com.ssafy.bbkk.db.entity.Region;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RegionRepository extends JpaRepository<Region, Integer> {

    boolean existsByRegionBig(String RegionBig);
    Optional<Region> findByRegionBigAndRegionSmall(String regionBig, String regionSmall);
    List<Region> findByRegionBig(String regionBig);
    List<String> findAllRegionSmallByRegionBig(String regionBig);
    List<Region> findAllByRegionBig(String regionBig);
}