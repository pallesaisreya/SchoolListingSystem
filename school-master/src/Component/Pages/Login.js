// import { Link } from 'react-router-dom';
// import axios from "axios";
// import { connect } from 'react-redux';
// import { loginAccount } from '../../action/LoginAction';
import "./Login.css"
import React, { Component } from 'react';
import RedirectMessage from './RedirectMessage';
import CustomerValidation from './CustomerValidation';
import {connect} from 'react-redux'
import axios from "axios";
import {loginAccount} from '../../Action/SchoolAction'

 class Login extends Component{
    
     
    constructor(props){
        super(props);

        this.state={
              login:{
                userName:"",
                password:"",
              },
              redirect:false,
            }
        this.validators = CustomerValidation;
        this.resetValidators();
    }
    

    updateValidators = (fieldName, value) => {
        this.validators[fieldName].errors = [];
        this.validators[fieldName].state = value;
        this.validators[fieldName].valid = true;
        this.validators[fieldName].rules.forEach((rule) => {
            if (rule.test instanceof RegExp) {
                if (!rule.test.test(value)) {
                    this.validators[fieldName].errors.push(rule.message);
                    this.validators[fieldName].valid = false;
                }
            } else if (typeof rule.test === 'function') {
                if (!rule.test(value)) {
                    this.validators[fieldName].errors.push(rule.message);
                    this.validators[fieldName].valid = false;
                }
            }
        });
    }

    resetValidators = () => {
        Object.keys(this.validators).forEach((fieldName) => {
            this.validators[fieldName].errors = [];
            this.validators[fieldName].state = '';
            this.validators[fieldName].valid = false;
        });
    }

    displayValidationErrors = (fieldName) => {
        const validator = this.validators[fieldName];
        const result = '';
        if (validator && !validator.valid) {
            const errors = validator.errors.map((info, index) => {
                return <span style={errorStyle} key={index}>* {info}</span>;
            }); 
            return (
                <div style={errorStyle} className="col s12 row">
                    {errors}
                </div>
            ); 
        }
        return result;
    }
    
    isFormValid = () => {
        let status = true;
        Object.keys(this.validators).forEach((field) => {
            if (!this.validators[field].valid) {
                status = false;
            }
        });
        return status;
    }

    handleChange = (event) =>{
        let nam = event.target.name;
        let value = event.target.value;
        this.setState({login:{...this.state.login,[nam]:value}});
        console.log(this.state.login);
       
        this.updateValidators(nam,value);
    }


    checkLogin = async() =>{
        
        console.log(this.state.login);
        const result =  await axios.post(`http://localhost:8777/api/login`,this.state.login).catch((err)=>alert(err.response.data));
        if(result.data){
        this.props.login(result.data);
        this.setState({redirect:true});
        localStorage.setItem("isLoggedIn","true");
        localStorage.setItem("userName",this.state.login.userName);
        localStorage.setItem("password",this.state.login.password);
        }
    }
    
    
    render(){

    
    return (
        <section class="container-fluid bg">
        <section class= "row justify-content-center">
        <section class="col-18 col-sm-7 col-md-3"> 
                    <form className='form-container'>
                        <h3>LOG IN</h3>
                        <div className="form-group">
                            <label>USERNAME</label>
                            <input type="text" className="form-control" placeholder="Enter UserName" name="userName" onChange={(event) => this.handleChange(event)} />
                        </div>
                        {this.displayValidationErrors('userName')}
                        <div className="form-group">
                            <label>PASSWORD</label>
                            <input type="password" className="form-control" placeholder="Enter Password" name="password" onChange={(event)=> this.handleChange(event)} />
                        </div>
                        {this.displayValidationErrors('password')}
                        <br/>
                        
                        <button className={`btn btn-secondary btn-lg btn-block ${this.isFormValid() ? '' : 'disabled'}`} onClick={(event) => {
                            this.checkLogin();
                            event.preventDefault();
                        }}
                        style={{width:'100%'}}
                        >SUBMIT</button>
                         <br/>
                         <br/>
                        <div>
                            <RedirectMessage redirect={this.state.redirect}/>
                        </div>
                    </form>
                
          </section>
       </section>
    </section>
    )
}
}

const errorStyle = {
    color: 'white'
};

const mapDispatchToProps = dispatch => {
    return{
    login: logindetails => dispatch(loginAccount(logindetails)),
    }
}



export default  connect(null,mapDispatchToProps)(Login);