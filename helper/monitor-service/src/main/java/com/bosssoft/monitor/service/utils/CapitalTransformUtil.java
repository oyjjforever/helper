package com.bosssoft.monitor.service.utils;

/**
 * @author ouyangjunjie
 * @version 1.0.0
 * @ClassName CapitalTransformUtil.java
 * @Description TODO
 * @createTime 2020/01/10
 */
public class CapitalTransformUtil {
    //大写数字
    private static final String[] NUMBERS = {"零","壹","贰","叁","肆","伍","陆","柒","捌","玖"};
    // 整数部分的单位
    private static final String[] IUNIT = {"万","仟","佰","拾",""};

    public static String transform(String number) {
        String capitalNumber = "元整";
        int[] numbers = toIntArray(number);
        for(int i = numbers.length - 1; i >= 0; i--) {
            if (numbers[i] != 0) {
                capitalNumber = ("" + NUMBERS[numbers[i]] + IUNIT[i]) + capitalNumber;
            }
        }

        return capitalNumber;
    }

    //将字符串转为int数组
    private static int[] toIntArray(String number) {
        int[] array = new int[number.length()];
        for(int i = 0;i<number.length();i++) {
            array[i] = Integer.parseInt(number.substring(i,i+1));
        }
        return array;
    }
}
