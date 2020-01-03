package com.bosssoft.monitor.dao;

import com.bosssoft.monitor.entity.User;

public interface UserMapper {
    User selectSelective(User user);
}