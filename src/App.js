import React, {Component} from "react";
import "./App.css";
import LocationList from "./components/LocationList";

const cities = [
  "Huelva,es",
  "Málaga,es",
  "London,uk",
  "Lima,pe"
]

// function App() {
class App extends Component {

  handleSelectionLocation = city => {
    console.log(`handleSelectionLocation ${city}`);
  }

  render (){
  return (
    <div className="App">
      <header className="App-header">
        <LocationList cities={cities} onSelectedLoation= {this.handleSelectionLocation} />
      </header>
    </div>
  );
  }
}

export default App;
