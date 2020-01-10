package com.bosssoft.monitor.service.Impl;

import com.bosssoft.monitor.common.entity.BusinessException;
import com.bosssoft.monitor.dao.OrderMapper;
import com.bosssoft.monitor.entity.OrderDetail;
import com.bosssoft.monitor.entity.WholeOrder;
import com.bosssoft.monitor.service.OrderService;
import com.bosssoft.monitor.service.utils.PDFUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author ouyangjunjie
 * @version 1.0.0
 * @ClassName OrderServiceImpl.java
 * @Description TODO
 * @createTime 2020/01/03
 */
@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderMapper orderMapper;

    @Override
    public void insertOrderDetail(List<OrderDetail> orderDetails) throws BusinessException {
        try {
            orderMapper.batchInsert(orderDetails);
        } catch (Exception e){
            e.printStackTrace();
            throw new BusinessException("");
        }
    }

    @Override
    public void updateOrderDetail(List<OrderDetail> orderDetails) throws BusinessException{
        try {
            orderMapper.batchUpdate(orderDetails);
        } catch (Exception e){
            e.printStackTrace();
            throw new BusinessException("");
        }
    }

    @Override
    public void deleteOrderDetail(List<OrderDetail> orderDetails) throws BusinessException {
        try {
            orderMapper.batchDelete(orderDetails);
        } catch (Exception e){
            e.printStackTrace();
            throw new BusinessException("");
        }
    }

    @Override
    public void updateOrderPicUrl(String picUrl, String id) throws BusinessException {
        try {
            orderMapper.updateOrderPicUrl(picUrl, id);
        } catch (Exception e){
            e.printStackTrace();
            throw new BusinessException("");
        }
    }

    @Override
    public void exportPDF(WholeOrder wholeOrder, String pdfUrl) {
        PDFUtil.exportPDF(wholeOrder, pdfUrl);
    }
}
