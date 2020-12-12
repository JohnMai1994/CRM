import React, {Component} from 'react';
import {Button} from "antd";
import style from "../index.less";
import zhCN from "antd/lib/locale/zh_CN";

class TranslationButton extends Component {

    toggle = () => {
        this.props.changeLanguage()
    }

    render() {
        const {
            language,
        } = this.props

        return (
            <Button className={`${style.action} ${style.language}`} onClick={this.toggle}>
                {language === zhCN ? "CH" : "EN"}
            </Button>
        );
    }
}

export default TranslationButton;