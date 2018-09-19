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
    Confused: Confused,
    Unconfused: Confused,
    correctGuesses: 0,
    bestScore: 0,
    clickMessage:"Click an image to begin!"
  }

  componentDidMount() {

  }

  shuffleConfused = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j] = [array[j], array[i]]];
    }
  }


  imageClicked = Confused => {
    // const currentDazed = event.target.alt;
    // const previouslyClicked = this.state.DazedClicked.indexOf(currentDazed) > -1;
    const findConfused = this.state.Unconfused.find(item => item.Confused === Confused)

    if(findConfused === undefined) {
      this.setState({
        clickMessage: "You lose man. Try Again!",
        bestScore: (this.state.correctGuesses > this.state.bestScore) ? this.state.correctGuesses : this.state.bestScore,
        correctGuesses: 0,
        Confused: Confused,
        Unconfused: Confused
      });
  
    } else {
      const newConfused = this.state.Unconfused.filter(item => item.Confused !== Confused);
      
      this.setState({
        clickMessage: "Alright, alright, alright!",
        correctGuesses: this.state.correctGuesses + 1,
        Confused: Confused,
        Unconfused: newConfused
      })
    }

    this.shuffleConfused(Confused);
  };


  render() {
    return (
      <div className="App">
        {/* <img src="./components/ImageCards/images/cynthia.jpg"></img> */}
        <Navbar 
          clickMessage={this.state.clickMessage}
          correctGuesses={this.state.correctGuesses}
          bestScore={this.state.bestScore}
         />
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
