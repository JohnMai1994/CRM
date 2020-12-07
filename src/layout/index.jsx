import React, {Component} from 'react';
import {Layout} from 'antd'
// ！！！没有导入logo

// ！！！没有获取menu数据

// ！！！没有写小组件

const {Sider, Content, Header} = Layout


class BasicLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }


    render() {
        const {children, location} = this.props
        console.log(children, location)
        const {collapsed} = this.state

        return (
            <Layout>
                <Sider>
                    Sider 菜单部分（需要封装小组件）
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', textAlign: 'center', padding: 0}}>
                        Header
                    </Header>
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