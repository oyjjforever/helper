package com.bosssoft.monitor.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
//@EnableSwaggerBootstrapUI
@Profile({"dev","test"})
public class SwaggerConfig {
    @Bean
    public Docket createV1Api() {
        return
                new Docket(DocumentationType.SWAGGER_2)
                        .select()
                        .apis(RequestHandlerSelectors.any())
                        .paths(PathSelectors.ant("/api/v1/**"))
                        .build()
                        .groupName("v1")
                        .apiInfo(
                                new ApiInfoBuilder()
                                        .title("监控系统接口文档")
                                        .description("博思软件—监控系统接口文档")
                                        .contact(new Contact("非税票据产品开发部", "", ""))
                                        .version("1.0")
                                        .build()
                        );
    }
}