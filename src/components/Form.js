import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Form extends Component {
    
    state= {
        name: "",
        emailAddress: "",
        password: ""

    }
    render() {
        return (
            <div>
            <p>Form</p>
            <ul>
            <li><Link to= '/'>Home</Link></li>
            <li><Link to= '/People'>People</Link></li>
            </ul>
            <br/>
            <br/>
        
            <form>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter name"
        onChange={e => this.setState({name:e.target.value})}/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
       onChange={e => this.setState({emailAdress:e.target.value})}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password"
        onChange={e => this.setState({password:e.target.value})}/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
    {/* onChange={e=>this.setState({isChecked.value})}}/> */}
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
   )

}
        // </div>
    }
export default Form;
