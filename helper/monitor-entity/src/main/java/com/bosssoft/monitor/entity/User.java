package com.bosssoft.monitor.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.format.annotation.DateTimeFormat;

import java.math.BigDecimal;
import java.util.Date;

/**
 * 用户信息表
 * 实体类对应的数据表为：  AFA_USER
 * @author
 * @date 2019/07/20
 */
@ApiModel(description ="用户信息")
public class User {
    @ApiModelProperty(value = "用户ID",position=1651)
    private String userId;

    @ApiModelProperty(value = "租户ID",position=1652)
    private String tenantId;

    @ApiModelProperty(value = "用户账号",position=1653)
    private String userCode;

    @ApiModelProperty(value = "用户密码",position=1654)
    private String password;

    @ApiModelProperty(value = "用户名称",position=1655)
    private String userName;

    @ApiModelProperty(value = "用户类型(admin）",position=1656)
    private String userType;

    @ApiModelProperty(value = "用户身份证号",position=1657)
    private String identityCode;

    @ApiModelProperty(value = "密码失效日期",position=1658)
    private Date invlidate;

    @ApiModelProperty(value = "本地密码认证、LDAP 认证等",position=1659)
    private String authMode;

    @ApiModelProperty(value = "正常，挂起，注销，锁定",position=1660)
    private String status;

    @ApiModelProperty(value = "当状态为锁定时，解锁的时间",position=1661)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date unlockTime;

    @ApiModelProperty(value = "菜单风格",position=1662)
    private String menuStyle;

    private String menuRole;

    @ApiModelProperty(value = "最近登录时间",position=1663)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date lastestLogin;

    @ApiModelProperty(value = "密码错误次数",position=1664)
    private BigDecimal errorCount;

    @ApiModelProperty(value = "用户有效日期",position=1665)
    private Date startDate;

    @ApiModelProperty(value = "用户失效日期",position=1666)
    private Date endDate;

    @ApiModelProperty(value = "允许设置多个 MAC 地址",position=1667)
    private String macAddress;

    @ApiModelProperty(value = "允许设置多个 IP 地址",position=1668)
    private String ipAddress;

    @ApiModelProperty(value = "手机号码",position=1669)
    private String mobileNo;

    @ApiModelProperty(value = "Email地址",position=1670)
    private String email;

    @ApiModelProperty(value = "CA绑定",position=1671)
    private String caSn;

    @ApiModelProperty(value = "直接主管",position=1672)
    private String majorUsercode;

    @ApiModelProperty(value = "主管姓名",position=1673)
    private String majorUsername;

    @ApiModelProperty(value = "所属(主)机构",position=1674)
    private String mainOrgid;

    @ApiModelProperty(value = "所属(主)岗位",position=1675)
    private String mainPositionid;

    @ApiModelProperty(value = "创建人",position=1676)
    private String createUser;

    @ApiModelProperty(value = "创建时间",position=1677)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date createTime;

    @ApiModelProperty(value = "最新修改时间",position=1678)
    private BigDecimal lastModifyTime;

    @ApiModelProperty(value = "是否删除",position=1679)
    private String isDelete;

    @ApiModelProperty(value = "密码是否修改",position=1680)
    private String isModify;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId == null ? null : userId.trim();
    }

    public String getTenantId() {
        return tenantId;
    }

    public void setTenantId(String tenantId) {
        this.tenantId = tenantId == null ? null : tenantId.trim();
    }

    public String getUserCode() {
        return userCode;
    }

    public void setUserCode(String userCode) {
        this.userCode = userCode == null ? null : userCode.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName == null ? null : userName.trim();
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType == null ? null : userType.trim();
    }

    public String getIdentityCode() {
        return identityCode;
    }

    public void setIdentityCode(String identityCode) {
        this.identityCode = identityCode == null ? null : identityCode.trim();
    }

    public Date getInvlidate() {
        return invlidate;
    }

    public void setInvlidate(Date invlidate) {
        this.invlidate = invlidate;
    }

    public String getAuthMode() {
        return authMode;
    }

    public void setAuthMode(String authMode) {
        this.authMode = authMode == null ? null : authMode.trim();
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status == null ? null : status.trim();
    }

    public Date getUnlockTime() {
        return unlockTime;
    }

    public void setUnlockTime(Date unlockTime) {
        this.unlockTime = unlockTime;
    }

    public String getMenuStyle() {
        return menuStyle;
    }

    public void setMenuStyle(String menuStyle) {
        this.menuStyle = menuStyle == null ? null : menuStyle.trim();
    }

    public String getMenuRole() {
        return menuRole;
    }

    public void setMenuRole(String menuRole) {
        this.menuRole = menuRole == null ? null : menuRole.trim();
    }

    public Date getLastestLogin() {
        return lastestLogin;
    }

    public void setLastestLogin(Date lastestLogin) {
        this.lastestLogin = lastestLogin;
    }

    public BigDecimal getErrorCount() {
        return errorCount;
    }

    public void setErrorCount(BigDecimal errorCount) {
        this.errorCount = errorCount;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getMacAddress() {
        return macAddress;
    }

    public void setMacAddress(String macAddress) {
        this.macAddress = macAddress == null ? null : macAddress.trim();
    }

    public String getIpAddress() {
        return ipAddress;
    }

    public void setIpAddress(String ipAddress) {
        this.ipAddress = ipAddress == null ? null : ipAddress.trim();
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo == null ? null : mobileNo.trim();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }

    public String getCaSn() {
        return caSn;
    }

    public void setCaSn(String caSn) {
        this.caSn = caSn == null ? null : caSn.trim();
    }

    public String getMajorUsercode() {
        return majorUsercode;
    }

    public void setMajorUsercode(String majorUsercode) {
        this.majorUsercode = majorUsercode == null ? null : majorUsercode.trim();
    }

    public String getMajorUsername() {
        return majorUsername;
    }

    public void setMajorUsername(String majorUsername) {
        this.majorUsername = majorUsername == null ? null : majorUsername.trim();
    }

    public String getMainOrgid() {
        return mainOrgid;
    }

    public void setMainOrgid(String mainOrgid) {
        this.mainOrgid = mainOrgid == null ? null : mainOrgid.trim();
    }

    public String getMainPositionid() {
        return mainPositionid;
    }

    public void setMainPositionid(String mainPositionid) {
        this.mainPositionid = mainPositionid == null ? null : mainPositionid.trim();
    }

    public String getCreateUser() {
        return createUser;
    }

    public void setCreateUser(String createUser) {
        this.createUser = createUser == null ? null : createUser.trim();
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public BigDecimal getLastModifyTime() {
        return lastModifyTime;
    }

    public void setLastModifyTime(BigDecimal lastModifyTime) {
        this.lastModifyTime = lastModifyTime;
    }

    public String getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(String isDelete) {
        this.isDelete = isDelete == null ? null : isDelete.trim();
    }

    public String getIsModify() {
        return isModify;
    }

    public void setIsModify(String isModify) {
        this.isModify = isModify == null ? null : isModify.trim();
    }
}