import React, {Component} from 'react';
import style from "../index.less";
import {QuestionOutlined} from "@ant-design/icons";
import {Tooltip} from "antd";

class Question extends Component {
    render() {
        return (
            <Tooltip title={"后端API接口"}>
                <a
                    target="_blank"
                    href="https://www.google.com"
                    rel="noopener noreferrer"
                    className={style.action}
                >
                    <QuestionOutlined/>
                </a>
            </Tooltip>
        );
    }
}

export default Question;