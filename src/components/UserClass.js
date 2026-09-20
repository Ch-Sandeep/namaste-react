import React, { useState } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + " Child Constructor");

    this.state = {
      // count: 1,
      userInfo: {
        name: "Dummy Name",
        location: "Dummy location",
        avatar_url: "http://dummy-photo.com",
      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name + " Child Component mounted");
    const data = await fetch("https://api.github.com/users/ch-sandeep");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    // console.log(this.props.name + " Child Render");

    const { name, location, avatar_url } = this.state.userInfo;
    const { contact } = this.props;
    // const { count } = this.state;

    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1>
        <button
          onClick={() => {
            // Never update state variables directly(Won't Work)
            // this.state.count++;
            this.setState({
              count: ++this.state.count,
            });
          }}
        >
          Increase Count
        </button> */}
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
