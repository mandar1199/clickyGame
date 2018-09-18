import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import ImageCards from "./components/ImageCards";
import Confused from "/Confused.json";
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
          alert("You did it man! You won!");
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
        <Navbar bestScore={this.state.bestScore} />
        <Jumbotron />
        <div className="wrapper">
          {this.state.DazedConfused.map(DazedConfused => (
            <ImageCards 
              DazedClicked={this.DazedClicked}
              id={DazedConfused.id}
              key={DazedConfused.id}
              image={DazedConfused.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
