package test;

import com.bosssoft.monitor.Startup;
import com.bosssoft.monitor.entity.OrderDetail;
import com.bosssoft.monitor.entity.WholeOrder;
import com.bosssoft.monitor.service.OrderService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Startup.class)
public class PdfTest {
    @Autowired
    private OrderService orderService;
    @Test
    public void myTest(){
        List<OrderDetail> orderDetailList = new ArrayList<>();
        orderDetailList.add(new OrderDetail("","","123","黑","100*2000*3000",899,2,1,""));
        orderDetailList.add(new OrderDetail("","","234","黑","100*2000*3000",1899,2,1,""));
        orderDetailList.add(new OrderDetail("","","345","黑","100*2000*3000",2899,2,1,""));
        WholeOrder wholeOrder = new WholeOrder("","张三","1375426626","2019-05-25","2019-05-26","xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",12560,orderDetailList);
        //orderService.exportPDF(wholeOrder);
    }
}
