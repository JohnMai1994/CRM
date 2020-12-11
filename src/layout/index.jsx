import React, {Component} from 'react';
import {Layout, ConfigProvider} from 'antd'
import zhCN from 'antd/lib/locale/zh_CN';
import enGB from 'antd/lib/locale/en_GB'
// ！！！导入logo
import logo from "../static/cuc_logo/logo.png"
// ！！！没有获取menu数据
import {getMenuData} from "../static/staticMenu/menu";
// ！！！没有写小组件
import SiderMenu from "../components/SiderMenu";
import GlobalHeader from "../components/GlobalHeader"

const {Content} = Layout


class BasicLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            language: zhCN
        }
    }

    handleLanguage = () => {
        const {language} = this.state;

        if (language === zhCN) {
            this.setState({
                language: enGB
            })
        }else {
            this.setState({
                language: zhCN
            })
        }
    }

    handleMenuCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }


    render() {
        const {children, location} = this.props
        const {collapsed, language} = this.state

        return (
            <ConfigProvider locale={this.state.language}>
                <Layout>
                    {/* 主Menu   //submenuDate={getSubmenuData()} */}
                    <SiderMenu
                        logo={logo}
                        collapsed={collapsed}
                        menuData={getMenuData()}
                        location={location}
                    />

                    <Layout>

                        <GlobalHeader
                            collapsed={collapsed}
                            onCollapse={this.handleMenuCollapse}
                            currentUser={{
                                name: 'Johnny',
                                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                                userid: '00000001',
                                notifyCount: 12,
                            }}
                            language={language}
                            changeLanguage={this.handleLanguage}
                        />
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
            </ConfigProvider>
        );
    }
}

export default BasicLayout;