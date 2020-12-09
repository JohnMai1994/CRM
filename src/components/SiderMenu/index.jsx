import React, {Component} from 'react';
import {Link} from "umi"
import {Layout, Menu, Button} from "antd";
import style from "./index.less"
// 导入Icon以后删掉
import {DashboardIcon, ContactIcon, PersonnelIcon, MessageIcon} from "../../static/staticIcon"

const {Sider} = Layout
const {Item} = Menu


class SiderMenu extends Component {
    constructor(props) {
        super(props);
        this.menus = props.menuData;
    }

    getMenuItemPath = (item) => {
        const itemPath = `/${item.path}`;
        return (
            <Link
                to={itemPath}
                replace={itemPath === this.props.location.pathname}
            >
                <span>{item.name}</span>
            </Link>
        )
    }


    getMenuItem = (item) => {
        return <Item key={item.path} icon={<item.icon icontype={1}/>}>{this.getMenuItemPath(item)}</Item>
    }


    getNavMenuItems = (menuData) => {
        if (!menuData) {
            return [];
        }
        return menuData
            .filter(item => item.name && !item.hideInMenu)
            .map(item => {
                const ItemDom = this.getMenuItem(item)
                return ItemDom
            })
            .filter(item => item)
    }


    render() {
        const {logo, collapsed, location} = this.props

        return (
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                breakpoint={"lg"}
                collapsedWidth={0}
                width={256}
                className={style.sider}
            >
                <div className={style.logo} key="logo">
                    <Link to="/">
                        <img src={logo} alt="logo"/>
                        <h1>CRM SYSTEM</h1>
                    </Link>
                </div>

                {/*这是Menu Bar的使用数据组装，*/}
                {/*<Menu*/}
                {/*    key="Menu"*/}
                {/*    theme="light"*/}
                {/*    mode="inline"*/}
                {/*    style={{padding: '16px 0', width: '100%'}}*/}
                {/*>*/}
                {/*    {this.getNavMenuItems(this.menus)}*/}
                {/*</Menu>*/}


                {/* 模块测试， 失败了*/}
                {/* 模块测试， 失败了*/}
                {/*<Menu key="Menu" theme="light" mode="inline" >*/}
                {/*    <Item key="Dashboard" icon={<DashboardIcon icontype={0}/>}>Dashboard</Item>*/}
                {/*    <Item key="Contact" icon={<ContactIcon icontype={1}/>}>Contact</Item>*/}
                {/*    <Item key="Personnel" icon={<PersonnelIcon icontype={0}/>}>Personnel</Item>*/}
                {/*    <Item key="Message" icon={<MessageIcon icontype={0}/>}>Message</Item>*/}
                {/*</Menu>*/}


            </Sider>
        );
    }
}

export default SiderMenu;