import React, {Component} from 'react';
import {Dropdown, Menu, Spin, Avatar} from "antd";
import {CloseCircleOutlined, LoadingOutlined, LogoutOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
import style from "../index.less";

class User extends Component {
    constructor(props) {
        super(props);

    }


    render() {

        const {
            currentUser = {},
        } = this.props

        // menu 内容
        const menu = (
            <Menu>
                <Menu.Item key="user">
                    <UserOutlined type="user"/>
                    个人中心
                </Menu.Item>
                <Menu.Item disabled>
                    <SettingOutlined type="setting"/>
                    设置
                </Menu.Item>
                <Menu.Item>
                    <CloseCircleOutlined type="error"/>
                    报告错误
                </Menu.Item>
                <Menu.Divider/>
                <Menu.Item>
                    <LogoutOutlined type="setting"/>
                    退出登录
                </Menu.Item>


            </Menu>
        )

        // Loading状态
        const loadingIcon = <LoadingOutlined style={{color: "#577BF9"}}/>

        return (
            <>
                {
                    currentUser.name ?
                        (
                            <Dropdown overlay={menu}>
                                    <span className={`${style.action} ${style.account}`}>
                                         <Avatar size="small" className={style.avatar} src={currentUser.avatar} />

                                         <span >{currentUser.name}</span>

                                    </span>


                            </Dropdown>
                        ) :

                        (
                            <Spin indicator={loadingIcon} spinning={true} size="default"
                                  style={{padding: "0 16px"}}/>
                        )

                }
            </>
        );
    }
}

export default User;