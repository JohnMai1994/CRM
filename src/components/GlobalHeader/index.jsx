import React, {Component} from 'react';
import {Button} from "antd"
import zhCN from 'antd/lib/locale/zh_CN';
import {} from '@ant-design/icons';
import style from "./index.less"


// 五个拆分的小组件
import CollapsedButton from "./CollapsedButton";
import Question from "./Question";
import Search from "./Search";
import User from "./User";
import TranslationButton from "./TranslationButton";

class GlobalHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const {
            collapsed,
            currentUser = {},
            onCollapse,
            language,
            changeLanguage
        } = this.props


        return (
            <div className={style.header}>

                <CollapsedButton collapsed={collapsed} onCollapse={onCollapse}/>


                <div className={style.right}>
                    {/* 1. 搜索*/}
                    <Search/>
                    {/* 2. Question API后端接口*/}
                    <Question/>
                    {/* 3. 头像 个人中心 设置 登录登出  */}
                    <User currentUser={currentUser}/>
                    {/* 4. 中英文转换按钮  */}
                    <TranslationButton language={language} changeLanguage={changeLanguage}/>
                </div>


            </div>
        );
    }
}

export default GlobalHeader;