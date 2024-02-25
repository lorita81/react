import React from "react";

class Name extends React.Component {
    constructor (){
        super();

        this.state = {
            name : "john",
            lastname : "doe",

        }

    }

  render() {
    return (

        <React.Fragment>
            {
              <h1>{this.state.name + " " + this.state.lastname}</h1> 
            }
            

        </React.Fragment>
    );
  }


}
export default Name