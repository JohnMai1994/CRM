import React, {Component} from 'react';
import style from "./index.less"

class Contact extends Component {
    render() {
        return (
            <div className={style.contact}>
                {/*标题*/}
                <h1 >Contacts</h1>
                {/*分组按钮*/}
                <span className={style.buttons}>
                    <button className={style.button}>
                        Group |
                    </button>



                </span>

                {/* 表单 */}
            </div>
        );
    }
}

export default Contact;