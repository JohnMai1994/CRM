import React, {Component} from 'react';
import {MenuFoldOutlined, MenuUnfoldOutlined  } from '@ant-design/icons';
import style from "./index.less"

class GlobalHeader extends Component {
    constructor(props) {
        super(props);
    }

    toggle = () => {
        const {collapsed, onCollapse} = this.props;
        onCollapse(!collapsed);
    }


    render() {
        const {
            collapsed,
            onCollapse
        } = this.props


        return (
            <div className={style.header}>
                {
                   React.createElement(collapsed ? MenuUnfoldOutlined: MenuFoldOutlined, {
                       className: style.trigger,
                       onClick: this.toggle
                   } )
                }
            </div>
        );
    }
}

export default GlobalHeader;