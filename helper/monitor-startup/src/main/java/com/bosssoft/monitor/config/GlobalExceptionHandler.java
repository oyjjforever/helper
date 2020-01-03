package com.bosssoft.monitor.config;

import com.bosssoft.monitor.common.entity.ResponseResult;
import com.bosssoft.monitor.common.entity.StatusCode;
import org.apache.tomcat.util.buf.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {
    private static Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);
    @ResponseBody
    @ExceptionHandler(value = Exception.class)
    public Object errorHandler(HttpServletRequest req, Exception e) throws Exception {
        StringBuffer errorLog = new StringBuffer("\r\n========异常信息Begin========\r\n");
        errorLog.append("错误信息："+e.getLocalizedMessage()+"\r\n");
        errorLog.append("请求地址："+req.getRequestURL()+"\r\n");
        errorLog.append("参数信息：");
        Map<String, String[]> params = req.getParameterMap();
        for (Map.Entry<String, String[]> entry : params.entrySet()) {
            errorLog .append(entry.getKey() + "=" );
            if(entry.getValue().length>1) {
                errorLog.append("["+ StringUtils.join(Arrays.asList(entry.getValue()), ',') +"]");
            }else  {
                errorLog.append(StringUtils.join(Arrays.asList(entry.getValue()), ','));
            }
            errorLog.append("，");
        }
        if (params.size() == 0) {
            errorLog .append("无");
        }else {
            errorLog = new StringBuffer(errorLog.substring(0, errorLog.length()-1));
        }
        errorLog.append("\r\n堆栈信息："+e.getStackTrace()[0]+"\r\n");
        errorLog.append("========异常信息End========\r\n");
        log.error(errorLog.toString());
        e.printStackTrace();
        Map<String,Object> errorInfo =new HashMap();
        errorInfo. put("message", e.getLocalizedMessage());

        return ResponseResult.failure(StatusCode.Exception,errorInfo);
    }
}
