import React, {Component} from 'react';
import {Layout} from 'antd'
// ！！！没有导入logo
import logo from "../static/cuc_logo/logo.png"
// ！！！没有获取menu数据
import {getMenuData} from "../static/staticMenu/menu";

// ！！！没有写小组件
import SiderMenu from "../components/SiderMenu";
import GlobalHeader from "../components/GlobalHeader"

const {Sider, Content, Header} = Layout


class BasicLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }

    handleMenuCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }


    render() {
        const {children, location} = this.props
        const {collapsed} = this.state

        return (
            <Layout >
                {/* 主Menu   //submenuDate={getSubmenuData()} */}
                <SiderMenu
                    logo={logo}
                    collapsed={collapsed}
                    menuData={getMenuData()}
                    location={location}
                />

                <Layout>

                    <GlobalHeader collapsed={collapsed} onCollapse={this.handleMenuCollapse}/>
                    {/*<Header style={{background: '#fff', textAlign: 'center', padding: 0}}>*/}
                    {/*    Header*/}
                    {/*</Header>*/}
                    <Content>
                        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                            {children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default BasicLayout;