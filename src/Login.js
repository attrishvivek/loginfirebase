import React, { Component } from 'react'
import fire from  './Fire'

class Login extends Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup=this.signup.bind(this); 
        this.state={
            email:'',
            password:''
        }
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
         }).catch((error) => {
            console.log(error);
        });
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .catch((error) => {
            console.log(error);
        });
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value});
}

render()
  {
    return (
 <div className="col-md-6">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail">Email adress</label>   
                    <br/> <br/>
                    <input value={this.state.email} onChange={this.handleChange}
                     type= "email"
                     name="email"
                     class="form-control" 
                     id="exampleInputEmail" 
                     aria-describedby="emailHelp"
                    placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">
                      <p>  we'll never share your email with anyone</p>
                    </small>
                     </div>


                     <div class="form-group">
                    <label for="exampleInputpassword1">Password</label> <br/> <br/>
                    <input value={this.state.password} onChange={this.handleChange} 
                    type="password"
                    name="password" 
                    class="form-control" 
                    id="exampleInputpassword1"
                     placeholder="Password"/>
             </div>
          <br/>
          <button type="submit" onClick={this.login} class="btn-btn-primary">Login</button>
         <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn
         btn-sucess">Signup</button>

  </form>
</div>
    );
}
}

export default Login;
