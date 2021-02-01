
import React, {Component } from 'react'
import {

	Icon,

	Form,
	
	FormButton,
	Text,
  NavBtnLink,
  NavBtn,
  Login,
  Start
} from './SigninElements';
import './signin.css';
 
class Signin extends Component{
state={
  name:null,
  Password:null,
  belt:null

}
handleChange = (e)=> {
  this.setState({
    [e.target.id]:e.target.value
  })
}
handleSubmit = (e) =>{
  e.preventDefault();
  console.log(this.state);
}

//const Signin = () =>{
render(){
	return( 
      <>
   
  
       <Icon to ="/"><img src ="https://res.cloudinary.com/cmp84378/image/upload/v1611468513/Logo_mbswgk.png" class="signup_logo"/></Icon>
         <NavBtn>
     <NavBtnLink to='/Login'>Login</NavBtnLink>
       </NavBtn>
       <div className ="form">
     <form onSubmit={this.handleSubmit}>   
      <div className="form_contain">    
    
     <div className="ready_container">
     
      <h1 className ="signin_text">Ready to own your School?</h1>
  
</div>
    
  <div className="input_Container">
      <div className = "col-sm-12 col-12">
       <input type="text" name="" placeholder="Name"id="name" onChange={this.handleChange} />
      </div>
        <div className = "col-sm-12 col-12">
       <input type="text" name="" placeholder="Email" id="Email" onChange={this.handleChange} />
      </div>
        <div className = "col-sm-12 col-12">  
       <input type="Password" name="" placeholder="Password" id="Password" onChange={this.handleChange} />
      </div>
       <div className="forget">Forgot Password?</div>
       <Start to="/"><button type="button" class="btn btn"id="started">Get Started</button></Start>
       <p className="already">Already have an account <Login to='/Login'>Login</Login></p>
      </div>
      </div>
      </form>
</div>

      

      </>

		);
};
};
export default Signin;