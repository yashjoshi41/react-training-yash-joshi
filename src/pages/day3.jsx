import React from "react";
import Child from "../component/Child";
import DerivedStateFromPropsMethod from "./DerivedStateFromPropsMethod";

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Yash",
    };
    //console.log("Constructor Called");
  }
  changeName = () => {
    this.setState({
      name: "Bhavin",
    });
    //console.log("Change-Name Called");
  };

  hello() {
    console.log("Hello");
  };

  shouldComponentUpdate() {
    //console.log("shouldComponent Update Called - Return True");
    return true; //if we set this to false it will not change the component state or props 
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({name: "This is a componentDidMount Method"})
      //console.log("ComponentDidMount Called");
    }, 5000)
  }

  componentDidUpdate(prevState){
    if(prevState.name !== this.state.name){
        document.getElementById('statechange').innerHTML = "Yes the state is changed"
    }
  }

  componentWillUnmount() {
    alert('This will unmount');
  }

  render() {
    return (
      <div>
        <br />
        <button onClick={this.hello}>Call Hello</button>
        <Child name={this.state.name} changeName={this.changeName} />
        <DerivedStateFromPropsMethod/>
        <p id="statechange"></p>
        <p id="prev"></p>
      </div>
    );
  }
}
export default Parent;
