import React, {Component} from "react";
import { Grid, Row, Col} from 'react-flexbox-grid'
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
      <Grid className="App" >
        <Row>
          Titulo
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities} onSelectedLoation= {this.handleSelectionLocation} />
          </Col>
          <Col xs={12} md={6}>
            <div className="details"> Details</div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
