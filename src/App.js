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
  render (){
  return (
    <div className="App">
      <header className="App-header">
        <LocationList cities={cities}/>
      </header>
    </div>
  );
  }
}

export default App;
