package com.bosssoft.monitor.entity;

import java.util.List;

/**
 * @author ouyangjunjie
 * @version 1.0.0
 * @ClassName WholeOrder.java
 * @Description TODO
 * @createTime 2020/01/10
 */
public class WholeOrder {
    private String id;
    private String name;
    private String phone;
    private String orderDate;
    private String sendDate;
    private String address;
    private int amount;
    private List<OrderDetail> details;

    public WholeOrder(String id, String name, String phone, String orderDate, String sendDate, String address, int amount, List<OrderDetail> details) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.orderDate = orderDate;
        this.sendDate = sendDate;
        this.address = address;
        this.amount = amount;
        this.details = details;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(String orderDate) {
        this.orderDate = orderDate;
    }

    public String getSendDate() {
        return sendDate;
    }

    public void setSendDate(String sendDate) {
        this.sendDate = sendDate;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public List<OrderDetail> getOrderDetails() {
        return details;
    }

    public void setOrderDetails(List<OrderDetail> details) {
        this.details = details;
    }
}
