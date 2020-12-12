import React, {Component} from 'react';
import style from "./index.less"


// 需要传入变量 icon(从antd Icon中获取) 和 words
class SmallButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            icon,
            words
        } = this.props;


        return (
            <button className={style.action}>
                <span className={style.icon}>
                     {icon}
                </span>
                <span className={style.word}>
                    {words}
                </span>
            </button>
        );
    }
}

export default SmallButton;