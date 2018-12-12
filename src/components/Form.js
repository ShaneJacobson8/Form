import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Form extends Component {
    render() {
        return (
            <div>
            <p>Form</p>
            <ul>
            <li><Link to= '/Home'>Home</Link></li>
            <li><Link to= '/People'>People</Link></li>
            </ul>
            <br/>
            <br/>
        
            <form>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="name" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter name"/>
    <small id="nameHelp" class="form-text text-muted"></small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
   )

}
        // </div>
    }
export default Form;