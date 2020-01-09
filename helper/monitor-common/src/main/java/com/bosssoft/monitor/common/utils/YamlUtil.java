package com.bosssoft.monitor.common.utils;

import org.apache.ibatis.io.ResolverUtil;
import org.yaml.snakeyaml.Yaml;
import java.io.FileInputStream;
import java.net.URL;
import java.util.Map;

/**
 * @author ouyangjunjie
 * @version 1.0.0
 * @ClassName YamlUtil.java
 * @Description TODO
 * @createTime 2020/01/09
 */
public class YamlUtil {
    public static Object readYaml (){
        try {
            Yaml yaml = new Yaml();
            URL url = YamlUtil.class.getClassLoader().getResource("application.yaml");
            if (url != null) {
                //获取test.yaml文件中的配置数据，然后转换为obj，
                Object obj =yaml.load(new FileInputStream(url.getFile()));
                //也可以将值转换为Map
                Map map =(Map)yaml.load(new FileInputStream(url.getFile()));
                //通过map我们取值就可以了.
                return obj;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
