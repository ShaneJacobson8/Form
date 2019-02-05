import React, { Component, Fragment} from "react";
// import { Link } from "react-router-dom";

class People extends Component {
  constructor() {
    super();
    this.state = {
    people:[]
  };
}

   handleSubmit = async (_id) => {
  await fetch('http://localhost:3030/' + _id, {
    method: 'delete'
  })
  .then(response => {
    response.json().then(json => {
      return json;
    })
  });
  await this.getPeople()
}

getPeople = async () => {
  return fetch('http://localhost:3030')
  .then(results => {
    return results.json();
  })
  .then(data => {
    this.setState({people: data})
  })
}
  async componentWillMount() {

  await this.getPeople()
}

  render() {
    console.log(this)
    console.log(this.state)
    console.log(this.state.people)
    return (
      <Fragment>
          <link to="/"><button type="button" className="btn btn-primary">Home</button></link>
          <br/>
          <br/>
        {this.state.people.map
        (people =>
          <div className="border" key={people._id}>
          <h3> Name: {people.name}</h3>
          <p> Phone {people.phone}</p>
          <button onClick={() => this.handleSubmit(people._id)}>Delete</button>
          </div>
          )}
      //  </Fragment>
    )
  }
}
export default People
