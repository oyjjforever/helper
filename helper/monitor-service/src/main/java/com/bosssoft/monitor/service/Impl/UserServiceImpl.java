package com.bosssoft.monitor.service.Impl;

import com.bosssoft.monitor.dao.UserMapper;
import com.bosssoft.monitor.entity.User;
import com.bosssoft.monitor.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;
    @Override
    public User findUserByUserCodePassword(String userCode, String password) {
        User user = new User();
        user.setUserCode(userCode);
        user.setPassword(password);
        return userMapper.selectSelective(user);
    }
}
