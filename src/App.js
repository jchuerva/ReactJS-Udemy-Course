import React, {Component} from "react";
import WeatherLocation from "./components/WeatherLocation";
import "./App.css";

// function App() {
class App extends Component {
  render (){
  return (
    <div className="App">
      <header className="App-header">
        <WeatherLocation />
      </header>
    </div>
  );
  }
}

export default App;
