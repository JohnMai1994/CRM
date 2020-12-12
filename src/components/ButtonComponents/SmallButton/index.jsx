import React, {Component} from 'react';
import style from "./index.less"

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