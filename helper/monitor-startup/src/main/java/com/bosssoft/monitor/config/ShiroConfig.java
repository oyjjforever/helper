package com.bosssoft.monitor.config;

import com.bosssoft.monitor.entity.User;
import com.bosssoft.monitor.service.UserService;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.cache.CacheManager;
import org.apache.shiro.cache.MemoryConstrainedCacheManager;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.realm.Realm;
import org.apache.shiro.spring.web.config.DefaultShiroFilterChainDefinition;
import org.apache.shiro.spring.web.config.ShiroFilterChainDefinition;
import org.apache.shiro.subject.PrincipalCollection;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.aop.framework.autoproxy.DefaultAdvisorAutoProxyCreator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Configuration
public class ShiroConfig {
    /**
     * 注入自定义的realm，告诉shiro如何获取用户信息来做登录认证和授权
     */
    @Bean
    public Realm realm() {
        return new CustomRealm();
    }

    @Bean
    public ShiroFilterChainDefinition shiroFilterChainDefinition() {
        DefaultShiroFilterChainDefinition chain = new DefaultShiroFilterChainDefinition();
        chain.addPathDefinition("/**", "anon");
        return chain;
    }

    @Bean
    public static DefaultAdvisorAutoProxyCreator getDefaultAdvisorAutoProxyCreator() {
        DefaultAdvisorAutoProxyCreator creator = new DefaultAdvisorAutoProxyCreator();
        creator.setUsePrefix(true);
        return creator;
    }

    @Bean
    protected CacheManager cacheManager() {
        return new MemoryConstrainedCacheManager();
    }
}

class CustomRealm extends AuthorizingRealm {
    private static final Logger log = LoggerFactory.getLogger(CustomRealm.class);

    @Lazy
    @Autowired
    private UserService userService;

    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        log.info("shiro授权");
        SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();
        return authorizationInfo;
    }

    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token)  {
        log.info("shiro登录认证");
        UsernamePasswordToken usernamePasswordToken = (UsernamePasswordToken) token;
        String userCode = usernamePasswordToken.getUsername();
        String password = new String(usernamePasswordToken.getPassword());
        User user = userService.findUserByUserCodePassword(userCode, password);
        if (user == null) throw new UnknownAccountException("账号或密码错误！"); // 没找到帐号
        Date ticDate = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        long now = 0;
        try {
            now = sdf.parse(sdf.format(ticDate)).getTime();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        if ("1".equals(user.getIsDelete())) {
            throw new DisabledAccountException("该用户已注销，请与管理员联系！");
        }
        if (user.getStartDate() != null && user.getStartDate().getTime() > now + 1L) {
            throw new DisabledAccountException("该用户还未生效，请与管理员联系！");
        }
        if (user.getEndDate() != null && user.getEndDate().getTime() < now + 1L) {
            throw new DisabledAccountException("该用户已失效，请与管理员联系！");
        }
        if (user.getInvlidate() != null && user.getInvlidate().getTime() < now + 1L) {
            throw new DisabledAccountException("该用户密码已失效，请与管理员联系！");
        }
        if ("cancel".equals(user.getStatus())) {
            throw new DisabledAccountException("该用户已被注销，请与管理员联系！");
        }
        if ("hang".equals(user.getStatus()))
            throw new DisabledAccountException("该用户已被挂起，请与管理员联系!");
        if ("lock".equals(user.getStatus())) {
            throw new LockedAccountException("该用户已被锁定，请与管理员联系！");
        }
        //交给AuthenticatingRealm使用CredentialsMatcher进行密码匹配
        SimpleAuthenticationInfo authenticationInfo = new SimpleAuthenticationInfo(
                user,
                user.getPassword(),
                getName()
        );
        return authenticationInfo;
    }
}
