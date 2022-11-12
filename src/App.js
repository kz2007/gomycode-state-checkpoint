import "./App.css";
import React from "react";
import MyProfile from './/profile/profile.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



class App extends React.Component {

  state = {
    Person: { fullName: "James Robinson",bio: "A very good developer .", imgSrc: "https://tabib.ae/uploads/profile/free-profile-photo-whatsapp-4_1617693292_1625640135.png", profession: "Developer"},
    shows: false,
    Render: {display: 'initial'},
    Time: 0
  }

  OnButtonClick = () => {
    this.setState({shows: !this.state.shows})
    console.log(this.state.shows)
    this.setState({Render: {display: (this.state.shows) ? 'initial' : 'none'}})
  }

  render() {
    return (
      <div className="MainDiv">      
      <MyProfile fullName={this.state.Person.fullName} bio={this.state.Person.bio} profession={this.state.Person.profession} imgSrc={this.state.Person.imgSrc} style={this.state.Render} />

      <div className="ButtonDiv">
        <button type="button" className="btn btn-dark" onClick={this.OnButtonClick}>Profile details</button> 
        <h2>{this.state.Time }</h2>
      </div>
      
    </div>
    );
  }
  componentDidMount()
  {
    setInterval(() => {this.setState({Time: this.state.Time + 1})}, 1000)
  }
}

export default App;
