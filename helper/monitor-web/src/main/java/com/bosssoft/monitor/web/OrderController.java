package com.bosssoft.monitor.web;

import com.alibaba.fastjson.JSON;
import com.bosssoft.monitor.common.entity.BusinessException;
import com.bosssoft.monitor.common.entity.ResponseResult;
import com.bosssoft.monitor.common.utils.YamlUtil;
import com.bosssoft.monitor.entity.OrderDetail;
import com.bosssoft.monitor.entity.WholeOrder;
import com.bosssoft.monitor.service.OrderService;
import com.bosssoft.monitor.service.utils.PDFUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.List;


/**
 * 功能说明：ukey/机构证书发放数据-控制层
 */

@RestController
public class OrderController {
    @Value("${pdfConfig.location}")
    String pdfLocation;

    @Value("${picConfig.url}")
    String fileUrl;

    @Value("${picConfig.location}")
    String picLocation;

    @Autowired
    private OrderService orderService;

    /**
     * 功能说明:新增ukey/机构证书发放数据
     * @return
     */
    @PostMapping("modifyOrderDetail")
    public ResponseResult insertOrder(@RequestBody String Orders) throws UnsupportedEncodingException {
        String message = "";
        try {
            String jsonStr = URLDecoder.decode(Orders, "UTF-8");
            jsonStr = jsonStr.substring(5);
            List<OrderDetail> orderList = JSON.parseArray(jsonStr,OrderDetail.class);
            List<OrderDetail> insertList = new ArrayList<>();
            List<OrderDetail> updateList = new ArrayList<>();
            List<OrderDetail> deleteList = new ArrayList<>();
            for (OrderDetail orderDetail : orderList) {
                if("1".equals(orderDetail.getOperation())){
                    insertList.add(orderDetail);
                } else if ("-1".equals(orderDetail.getOperation())) {
                    deleteList.add(orderDetail);
                } else {
                    updateList.add(orderDetail);
                }
            }
            if(insertList.size() > 0){
                orderService.insertOrderDetail(insertList);
                message = "插入成功";
            }
            if(updateList.size() > 0) {
                orderService.updateOrderDetail(updateList);
                message = "更新成功";
            }
            if(deleteList.size() > 0) {
                orderService.deleteOrderDetail(deleteList);
                message = "删除成功";
            }
            return ResponseResult.success(message);
        } catch (BusinessException e){
            return ResponseResult.failure(e.getMessage());
        }
    }
    @PostMapping("pictureUpload")
    public void test(@RequestParam(value="id",required=false) String id,@RequestParam("file") MultipartFile file){
        String fileName = file.getOriginalFilename();
        String realName = "";
        int dot = fileName.lastIndexOf('.');
        if ((dot >-1) && (dot < (fileName.length() - 1))) {
            realName =  id + fileName.substring(dot);
        }
        String filePath = picLocation + realName;
        File desFile = new File(filePath);
        if(!desFile.getParentFile().exists()){
            desFile.mkdirs();
        }
        try {
            file.transferTo(desFile);
        } catch (IllegalStateException | IOException e) {
            e.printStackTrace();
        }
        try {
            orderService.updateOrderPicUrl(fileUrl + realName, id);
        } catch (BusinessException e) {
            e.printStackTrace();
        }
    }
    /**
     * 功能说明:导出PDF
     * @return
     */
    @PostMapping("exportPDF")
    public ResponseResult exportPDF(@RequestBody String wholeOrderStr) throws UnsupportedEncodingException {
        try {
            String jsonStr = URLDecoder.decode(wholeOrderStr, "UTF-8");
            jsonStr = jsonStr.substring(5);
            WholeOrder wholeOrder = JSON.parseObject(jsonStr,WholeOrder.class);
            System.out.println(wholeOrder);
            PDFUtil.exportPDF(wholeOrder,pdfLocation);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        String message = "";
        return ResponseResult.success(message);
    }

}
