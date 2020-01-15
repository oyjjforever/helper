package com.bosssoft.monitor.service;

import com.bosssoft.monitor.common.entity.BusinessException;
import com.bosssoft.monitor.entity.OrderDetail;
import com.bosssoft.monitor.entity.WholeOrder;

import java.util.List;

/**
 * @author ouyangjunjie
 * @version 1.0.0
 * @ClassName OrderService.java
 * @Description TODO
 * @createTime 2020/01/03
 */
public interface OrderService {
    void insertOrderDetail(List<OrderDetail> orderDetails) throws BusinessException;
    void updateOrderDetail(List<OrderDetail> orderDetails) throws BusinessException;
    void deleteOrderDetail(List<OrderDetail> orderDetails) throws BusinessException;
    void updateOrderPicUrl(String picUrl, String id) throws BusinessException;
    void exportPDF(WholeOrder wholeOrder, String pdfLocation, String fontLocation);
}
