package com.bosssoft.monitor.dao;

import com.bosssoft.monitor.entity.OrderDetail;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface OrderMapper {
    void batchInsert(@Param("orderDetails") List<OrderDetail> orderDetails);
    void batchUpdate(@Param("orderDetails") List<OrderDetail> orderDetails);
    void batchDelete(@Param("orderDetails") List<OrderDetail> orderDetails);
}
