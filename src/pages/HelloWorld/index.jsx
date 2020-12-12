import React, {Component} from 'react';
import {ContactIcon, ProjectIcon, PersonnelIcon, ManagementIcon, FinanceIcon, DashboardIcon} from "../../static/staticIcon"
import DefaultButton from "../../components/ButtonComponents/DefaultButton";
import searchIcon from "../../static/cuc_logo/icon_search/primary/small.svg"


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

                <div>
                    <DefaultButton words="Search" icon={searchIcon} method={() => console.log("Hello World")}/>


                </div>


            </div>



        );
    }
}

export default HelloWorld;