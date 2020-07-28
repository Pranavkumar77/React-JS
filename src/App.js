import React, { Component } from 'react';
import Header from "./Header";
import Game from "./Game";
import Container from '@material-ui/core/Container';


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            gameKey: true
        };

    }

    newGame=()=>{
        this.setState((prevState) => ({
            gameKey: !prevState.gameKey
        }));
    }

    render() {
    return (
      <div className="container">
        <Header/>
        <Container maxWidth="sm">
        <Game key={this.state.gameKey} newGame={this.newGame}/>
        </Container>
      </div>
    );
  }
}

export default App;
