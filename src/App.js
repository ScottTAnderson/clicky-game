import React, { Component } from 'react';
import './App.css';
import Characters from "./characterData.json";
import Navbar from "./components/Navbar";
import Card from './components/Card';

class App extends Component {
  state = {
    characters: Characters,
    score: 0,
    highScore: 0,
    display: "Try to click all 12 characters, but sure not to click the same character twice!"
  }

  //If the user either gets the max score (12) or clicks on a character that has already been clicked
  gameOver = () => {
    let currentScore = this.state.score;
    currentScore++;
    console.log(this.state.score);
    if (currentScore === 12) {
      this.setState({
        highScore: currentScore,
        score: 0,
        display: "You set the maximum score! Well done!"
      })
    }
    else if (this.state.score > this.state.highScore) {
      this.setState({
        highScore: this.state.score,
        score: 0,
        display: "You set a new high score! Try again!"
      })
    } else {
      this.setState({
        score: 0,
        display: "So close! Try again!"
      })
    }
    this.state.characters.forEach(character => {
      character.wasClicked = false;
    })
  }

  //Once a character is clicked, set its state to new random characters array and update score.
  characterNotClicked = () => {
    let currentScore = this.state.score;
    currentScore++;
    
    if (currentScore === 12) {
      this.gameOver();
    } else {
      this.setState({
        characters: this.state.characters.sort(() => 0.5 - Math.random()),
        score: currentScore,
        display: "Got one!"
      })
    }
  }

  //Give each character card an ID through for loop
  assignCharacter = (id) => {
    let character = this.state.characters;
    let assignedCharacter;

    for (let i = 0; i < character.length; i++) {
      if (character[i].id === id) {
        assignedCharacter = character[i];
        console.log(assignedCharacter);
      }
    }

    if (assignedCharacter.wasClicked === false) {
      assignedCharacter.wasClicked = true;
      this.characterNotClicked();
    } else {
      this.gameOver();
    }
  }

  render() {
    return (
      <div>
        <div className="game">
          <Navbar
            display={this.state.display}
            score={this.state.score}
            highScore={this.state.highScore}
          />
          <div className="card-container container-fluid">
            {this.state.characters.map((character) => (
              <Card
                assignCharacter={this.assignCharacter}
                id={character.id}
                name={character.name}
                image={character.image}
                wasClicked={character.wasClicked}
                key={character.id}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
};

export default App;
