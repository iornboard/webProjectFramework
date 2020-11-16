import React from 'react';
import {post} from 'axios';

class CustomerAdd extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            birthday: '',
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then(( response ) => {
                console.log(response.data);
            }) 
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('name', this.state.username);
        formData.append('birthday', this.state.birthday);
        const config = {
            headers : {
                'content-type' : "multipart/form-data"
            }
        }
        return post(url, formData, config);
    }


    render() {
        return(
            <form onSubmit={this.handleFormSubmit}>
                <h1> 인원추가 </h1>
                이름 : <input type="text" name="username" value={this.state.username} onChange = {this.handleValueChange}/><br/>
                생일 : <input type="text" name="birthday" value={this.state.birthday} onChange = {this.handleValueChange}/><br/>
                <button type="submit"> 추가하기 </button>
            </form>  
        )
    }
}


export default CustomerAdd;