import React, {Component} from 'react';
import {ContactIcon, ProjectIcon, PersonnelIcon, ManagementIcon, FinanceIcon, DashboardIcon} from "../../static/staticIcon"

class HelloWorld extends Component {
    render() {
        return (
            <div>
                Umi Work, Say Hello World!!!
                {/*还不能直接传 true&false 进去，需要用1，0*/}
                <ContactIcon icontype={1}/>
                <ProjectIcon icontype={0}/>
                <PersonnelIcon icontype={1}/>
                <ManagementIcon icontype={0}/>
                <FinanceIcon icontype={1}/>
                <DashboardIcon icontype={0}/>
            </div>
        );
    }
}

export default HelloWorld;