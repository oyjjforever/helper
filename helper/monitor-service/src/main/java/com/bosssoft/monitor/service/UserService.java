package com.bosssoft.monitor.service;

import com.bosssoft.monitor.entity.User;

public interface UserService {
    User findUserByUserCodePassword(String userCode, String password);
}
