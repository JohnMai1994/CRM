import React, {Component} from 'react';
import style from "./index.less"


// 需要传入变量 icon(icon是svg，从static中找) && words
class DefaultButton extends Component {

    constructor(props) {
        super(props);
    }


    toggle = () => {
        this.props.method()
    }


    render() {

        const {
            icon,
            words,
        } = this.props

        return (
            <button className={style.action} onClick={this.toggle}>
                <img src={icon} alt={words}/>
                <span>
                    {words}
                </span>
            </button>
        );
    }
}

export default DefaultButton;