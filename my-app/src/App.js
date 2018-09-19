import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import ImageCards from "./components/ImageCards";
import Confused from "./Confused.json";
import "./App.css";


let clickMessage = "Click on the images to earn pionts, but each image can only be clicked once!"

class App extends Component {

  state = {
    Confused,
    DazedClicked: [],
    correctGuesses: 0,
    bestScore: 0,
    clickMessage
  };

  imageClicked = event => {
    const currentDazed = event.target.alt;
    const previouslyClicked = this.state.DazedClicked.indexOf(currentDazed) > -1;

    if(previouslyClicked) {
      this.setState({
        Confused: Confused.sort(function(a, b) {return 0.5 - Math.random()}),
        DazedClicked: [],
        correctGuesses: 0
      });
        alert("You lose man. Try again?")
    } else {
      this.setState({
        Confused: Confused.sort(function(a, b) {return 0.5 - Math.random()}),
        DazedClicked: this.state.DazedClicked.concat(
          currentDazed
        ),
        correctGuesses: this.state.correctGuesses + 1
      },
      () => {
        if (this.state.correctGuesses === 12) {
          alert("Alright, alright, alright!");
          this.setState({
            Confused: Confused.sort(function(a, b) {return 0.5 - Math.random()}),
            DazedClicked: [],
            correctGuesses: 0,
          });
        }
      }
    );
    }
  };


  render() {
    return (
      <div className="App">
        {/* <img src="./components/ImageCards/images/cynthia.jpg"></img> */}
        <Navbar correctGuesses={this.state.correctGuesses} />
        <Jumbotron />
        <div className="wrapper">
          {this.state.Confused.map(Confused => (
            <ImageCards 
              DazedClicked={this.DazedClicked}
              id={Confused.id}
              key={Confused.id}
              image={Confused.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
