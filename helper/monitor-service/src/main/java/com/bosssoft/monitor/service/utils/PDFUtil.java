package com.bosssoft.monitor.service.utils;

import com.bosssoft.monitor.entity.OrderDetail;
import com.bosssoft.monitor.entity.WholeOrder;
import com.itextpdf.text.*;
import com.itextpdf.text.pdf.*;
import org.springframework.beans.factory.annotation.Value;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * @author ouyangjunjie
 * @version 1.0.0
 * @ClassName PDFUtil.java
 * @Description TODO
 * @createTime 2020/01/10
 */
public class PDFUtil {
    private static Document document;
    private static Font font;
    public static void exportPDF(WholeOrder wholeOrder, String pdfUrl,String fontLocation) {
        try{
            String fontFamily = "simfang.ttf";
            // font = FontFactory.getFont("STSong-Light", "UniGB-UCS2-H", BaseFont.NOT_EMBEDDED,10f, Font.NORMAL, BaseColor.BLACK);
            font = new Font(BaseFont.createFont(fontLocation + fontFamily, BaseFont.IDENTITY_H,BaseFont.NOT_EMBEDDED));
            //Step 1—Create a Document.
            document = new Document();
            //Step 2—Get a PdfWriter instance.
            PdfWriter.getInstance(document, new FileOutputStream(pdfUrl + wholeOrder.getId() + ".pdf"));
            //Step 3—Open the Document.
            document.open();
            initTable(wholeOrder);
        } catch (DocumentException e) {
            e.printStackTrace();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally{
            document.close();
        }

    }

    private static void initTable(WholeOrder wholeOrder) {
        int fullColspan = 30;
        int labelColspan = 4;
        int valueColspan = 11;
        int oneRowValueColspan = fullColspan - labelColspan;
        // 设置页面 列数
        PdfPTable table = new PdfPTable(fullColspan);
        PdfPCell cell;
        // 设置第一行单元格
        cell = new PdfPCell(new Paragraph("顾客姓名", font));
        cell.setColspan(labelColspan);
        table.addCell(cell);
        cell = new PdfPCell(new Paragraph(wholeOrder.getName(), font));
        cell.setColspan(valueColspan);
        table.addCell(cell);

        cell = new PdfPCell(new Paragraph("订货日期", font));
        cell.setColspan(labelColspan);
        table.addCell(cell);
        cell = new PdfPCell(new Paragraph(wholeOrder.getOrderDate(), font));
        cell.setColspan(valueColspan);
        table.addCell(cell);
        // 设置第二行单元格
        cell = new PdfPCell(new Paragraph("顾客电话", font));
        cell.setColspan(labelColspan);
        table.addCell(cell);
        cell = new PdfPCell(new Paragraph(wholeOrder.getPhone(), font));
        cell.setColspan(valueColspan);
        table.addCell(cell);

        cell = new PdfPCell(new Paragraph("体验店电话", font));
        cell.setColspan(labelColspan);
        table.addCell(cell);
        cell = new PdfPCell(new Paragraph("", font));
        cell.setColspan(valueColspan);
        table.addCell(cell);
        // 设置第三行单元格
        cell = new PdfPCell(new Paragraph("交货地址", font));
        cell.setColspan(labelColspan);
        table.addCell(cell);
        cell = new PdfPCell(new Paragraph(wholeOrder.getAddress(), font));
        cell.setColspan(oneRowValueColspan);
        table.addCell(cell);
        // 设置第四行单元格
        cell = new PdfPCell(new Paragraph("交货时间", font));
        cell.setColspan(labelColspan);
        table.addCell(cell);
        cell = new PdfPCell(new Paragraph(wholeOrder.getSendDate(), font));
        cell.setColspan(oneRowValueColspan);
        table.addCell(cell);
        // 设置第五行单元格
        cell = new PdfPCell(new Paragraph("商品型号名称", font));
        cell.setColspan(6);
        table.addCell(cell);
        cell = new PdfPCell(new Paragraph("规格", font));
        cell.setColspan(5);
        table.addCell(cell);
        cell = new PdfPCell(new Paragraph("颜色", font));
        cell.setColspan(3);
        table.addCell(cell);
        cell = new PdfPCell(new Paragraph("单位", font));
        cell.setColspan(2);
        table.addCell(cell);
        cell = new PdfPCell(new Paragraph("单价", font));
        cell.setColspan(3);
        table.addCell(cell);
        cell = new PdfPCell(new Paragraph("数量", font));
        cell.setColspan(3);
        table.addCell(cell);
        cell = new PdfPCell(new Paragraph("金额", font));
        cell.setColspan(3);
        table.addCell(cell);
        cell = new PdfPCell(new Paragraph("备注", font));
        cell.setColspan(5);
        table.addCell(cell);
        // 设置商品部分
        for (OrderDetail item: wholeOrder.getOrderDetails()) {
            if(item != null) {
                if (item.getModel() != null) {
                    cell = new PdfPCell(new Paragraph(item.getModel(), font));
                    cell.setColspan(6);
                    table.addCell(cell);
                }
                if (item.getFormat() != null) {
                    cell = new PdfPCell(new Paragraph(item.getFormat(), font));
                    cell.setColspan(5);
                    table.addCell(cell);
                }
                if (item.getColor() != null) {
                    cell = new PdfPCell(new Paragraph(item.getColor(), font));
                    cell.setColspan(3);
                    table.addCell(cell);
                }
                if (true) {
                    cell = new PdfPCell(new Paragraph("", font));
                    cell.setColspan(2);
                    table.addCell(cell);
                }
                if (""+item.getPrice() != null) {
                    cell = new PdfPCell(new Paragraph(""+item.getPrice(), font));
                    cell.setColspan(3);
                    table.addCell(cell);
                }
                if (""+item.getNum() != null) {
                    cell = new PdfPCell(new Paragraph(""+item.getNum(), font));
                    cell.setColspan(3);
                    table.addCell(cell);
                }
                if (true) {
                    cell = new PdfPCell(new Paragraph("", font));
                    cell.setColspan(3);
                    table.addCell(cell);
                }
                if (true) {
                    cell = new PdfPCell(new Paragraph("", font));
                    cell.setColspan(5);
                    table.addCell(cell);
                }
            }
        }
        // 设置页脚
        cell = new PdfPCell(new Paragraph("合计(人民币大写)", font));
        cell.setColspan(6);
        table.addCell(cell);
        cell = new PdfPCell(new Paragraph(CapitalTransformUtil.transform(""+wholeOrder.getAmount()), font));
        cell.setColspan(24);
        table.addCell(cell);

//        // 设置单元格
//        cell = new PdfPCell(new Phrase("Cell with rowspan 2"));
//        // 设置单元格所占行数
//        cell.setRowspan(2);
//        table.addCell(cell);
//        table.addCell("row 1; cell 1");
//        table.addCell("row 1; cell 2");
//        table.addCell("row 2; cell 1");
//        table.addCell("row 2; cell 2");
//        table.addCell("row 3; cell 1");
//        table.addCell("row 3; cell 2");
        try {
            document.add(table);
        } catch (DocumentException e) {
            e.printStackTrace();
        }
    }

}
