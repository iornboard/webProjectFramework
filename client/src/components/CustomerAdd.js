import React from 'react';
import axios from 'axios';

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
        this._addData()
            .then(( response ) => {
                console.log(response.data);
            }) 
    }


    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }



    // 클라이언트 -> 서버 (전달) (axios + console)

    _addData = async(e) =>{
        const formData = 
            {
            'name':this.state.username,
            'birthday': this.state.birthday
            }

        console.log(await axios( '/api/customers', {
            method : 'POST',
            data : formData ,
            headers: new Headers()
        }))
    }
    

    // 페이지 구성(종속) 

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