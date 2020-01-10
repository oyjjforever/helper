package com.bosssoft.monitor.entity;

/**
 * @author ouyangjunjie
 * @version 1.0.0
 * @ClassName OrderDetail.java
 * @Description TODO
 * @createTime 2020/01/03
 */
public class OrderDetail {
    private String mainId;
    private String id;
    private String model;
    private String color;
    private String format;
    private int price;
    private int num;
    private int status;
    private String operation;

    public String getMainId() {
        return mainId;
    }

    public void setMainId(String mainId) {
        this.mainId = mainId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getOperation() {
        return operation;
    }

    public void setOperation(String operation) {
        this.operation = operation;
    }

    public OrderDetail(String mainId, String id, String model, String color, String format, int price, int num, int status, String operation) {
        this.mainId = mainId;
        this.id = id;
        this.model = model;
        this.color = color;
        this.format = format;
        this.price = price;
        this.num = num;
        this.status = status;
        this.operation = operation;
    }
}
