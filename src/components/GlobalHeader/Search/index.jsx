import React, {Component} from 'react';
import style from "../index.less";
import {SearchOutlined} from "@ant-design/icons";
import {AutoComplete, Input} from "antd";
import classNames from "classnames";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchMode: false,
            value: ""
        }
    }



    // 点击搜索按钮
    enterSearchMode = () => {
        this.setState( {searchMode: true}, ()=> {
            if (this.state.searchMode) {
                this.input.focus()
            }
        })
    }

    // Input框添加东西
    onChange = value => {
        this.setState({value})
    }

    // 按下Enter
    onKeyDown = e => {
        if (e.key === 'Enter') {
            this.timeout = setTimeout(() => {
                console.log("User Press Enter")
                console.log(this.state.value)
                //this.props.onPressEnter(this.state.value); // Fix duplicate onPressEnter
            }, 0);
        }
    }

    // 失去焦点
    leaveSearchMode = () => {
        this.setState({
            searchMode: false,
            value: ""
        })

    }



    render() {

        const inputClass = classNames(style.input, {
            [style.show]: this.state.searchMode
        })

        return (
            <span
                className={`${style.action} ${style.search}`}
                onClick={this.enterSearchMode}
            >
                        <SearchOutlined/>
                        <AutoComplete
                            key="AutoComplete"
                            className={inputClass}
                            value={this.state.value}
                            onChange={this.onChange}
                        >
                            <Input
                                placeholder="站内搜索"
                                ref={node => {
                                    this.input = node
                                }}
                                onKeyDown={this.onKeyDown}
                                onBlur={this.leaveSearchMode}
                            />

                        </AutoComplete>
                    </span>
        );
    }
}

export default Search;