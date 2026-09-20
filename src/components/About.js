import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent Component mounted");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div className="about">
        <h1 className="text-3xl font-bold underline">About Class Component</h1>
        {/* way to get context in class based components */}
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-lg font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
        <UserClass name="Sandeep" location="RCPM" contact="@sandeep" />
      </div>
    );
  }
}

// const About = () => {
//   return (
// <div className="about">
//   <h1>About page</h1>
//   {/* <User name="Sandeep" location="Ramachandrapuram" /> */}
//   <UserClass name="Akshay" location="Dehradun" />
// </div>
//   );
// };

export default About;
