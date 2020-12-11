import React, {Component} from 'react';
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import style from "../index.less";

class CollapsedButton extends Component {
    constructor(props) {
        super(props);
    }

    toggle = () => {
        const {collapsed, onCollapse} = this.props;
        onCollapse(!collapsed);
    }


    render() {
        return (
            <>
                {
                    React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: style.trigger,
                        onClick: this.toggle
                    })
                }
            </>
        )


    }
}

export default CollapsedButton;