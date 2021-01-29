import React from 'react';
import {
	Container,

	Icon,
	FormContent,
	Form,
	FormH1,
	FormLabel,
	FormInput,
	FormButton,
	Text,
      NavBtnLink
} from './SigninElements';


const Signin = () =>{

	return( 
      <>
      <Container>
  
       <Icon to ="/">LOGO</Icon>
       
     <NavBtnLink to='/Login'>Login</NavBtnLink>
     <div className="form">       
      <div className ="row">
      <div className ="col-12 col-sm-3">
      <h1 className ="signin_text">Ready to<br /> own <br />your <br />School</h1>
      </div>
      <div className="col-12 col-sm-9">
      <div className = "col-sm-12 col-12">
       <input type="text" name="" class="input-control" />
      </div>
        <div className = "col-sm-12 col-12">
       <input type="text" name="" class="input-control"/>
      </div>
        <div className = "col-sm-12 col-12">
       <input type="text" name="" class="input-control"/>
      </div>

      </div>
      </div>
      </div>


      
      
      </Container>
      </>

		);
};
export default Signin;