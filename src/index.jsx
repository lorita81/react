import React from "react";
import  ReactDOM  from "react-dom/client";
import Name from "./Name";
class App extends React.Component {
 

  render() {
    return (

        <React.Fragment>
           
            <Name />

        </React.Fragment>
    );
  }


}
ReactDOM.createRoot(document.getElementById ("root")).render(<App />);