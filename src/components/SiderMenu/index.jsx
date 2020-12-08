import React, {Component} from 'react';
import {Link} from "umi"
import {Layout, Menu, Button} from "antd";
import style from "./index.less"

const {Sider} = Layout
const {SubMenu, Item} = Menu


class SiderMenu extends Component {
    constructor(props) {
        super(props);
        this.menus = props.menuData;
    }



    // 写到这里！！！，现在欠缺把Icon放进去
    getMenuItemPath = (item) => {
        const itemPath = item.path;
        const icon = item.icon
        console.log(item)
        return item.name

    }


    getMenuItem = (item) => {
        return <Item key={item.path}>{this.getMenuItemPath(item)}</Item>
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
                width={256}
                className={style.sider}
            >
                <div className={style.logo} key="logo">
                    <Link to="/">
                        <img src={logo} alt="logo"/>
                        <h1>CRM SYSTEM</h1>
                    </Link>
                </div>
                <Menu
                    key="Menu"
                    theme="dark"
                    mode="inline"
                    style={{padding: '16px 0', width: '100%'}}
                >
                    {this.getNavMenuItems(this.menus)}

                </Menu>

            </Sider>
        );
    }
}

export default SiderMenu;