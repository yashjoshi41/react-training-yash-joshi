import React from 'react';  
import User from '../component/User';
import './index.css';

class Parent extends React.Component {
    constructor(){
        super();
        this.state = {
                info:{
                FirstName:"Yash",
                LastName:"Joshi",
                City:"Ahmedabad",
                State:"Gujarat",
                Country:"India",
                Gender:"Male",
                Age:22,
                MobileNumber:7858145874
            }
        }
    }

    handleClick() {
        if(this.state.info.FirstName === "Yash"){
            this.state = this.setState({
                info:{
                    FirstName:"Dax",
                    LastName:"Patel",
                    City:"Toronto",
                    State:"Ontario",
                    Country:"Canada",
                    Gender:"Male",
                    Age:24,
                    MobileNumber:"(250)555-0199"
                }
            })
        } else {
                this.state = this.setState({
                    info:{
                    FirstName:"Yash",
                    LastName:"Joshi",
                    City:"Ahmedabad",
                    State:"Gujarat",
                    Country:"India",
                    Gender:"Male",
                    Age:22,
                    MobileNumber:7858145874
                }
            })
        }
    }
    render() {
        return (
            <>
                <h2>User Information</h2>
                <User info={this.state.info} /><br/>
                <button onClick={() => this.handleClick()}>Change Data</button>
            </>
        )
    }
}

export default Parent;