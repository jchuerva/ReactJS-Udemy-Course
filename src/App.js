import React, {Component} from "react";
import Paper from "@material-ui/core/Paper"
import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"
import { Grid, Row, Col} from 'react-flexbox-grid'
import "./App.css";
import LocationList from "./components/LocationList";
import ForecastExtended from "./components/ForecastExtended";

const cities = [
  "Huelva,es",
  "Málaga,es",
  "London,uk",
  "Lima,pe",
  "A Coruña,es"
]

// function App() {
class App extends Component {

  constructor(){
    super();
    // only possible in the constructor
    this.state = { city: null };
  }

  handleSelectionLocation = city => {
    this.setState({city: city}) 
    // this.setState({city}) as both parameters have the same name
    console.log(`handleSelectionLocation ${city}`);
  }

  render (){
    const {city} = this.state
    return(
      <Grid className="App" >
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>Weather App</Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities} onSelectedLoation= {this.handleSelectionLocation} />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              {
              city && // city == null ? and we don't want to render anything if not
                <div className="details"> <ForecastExtended city={city}> </ForecastExtended></div> 
              }
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
