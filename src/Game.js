import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Game extends Component {

    constructor(props){
        super(props);
        this.state = {
            randomNumber: Math.floor(Math.random() *100) + 1,
            guesses: "",
            lastResult: "",
            guessCount: 1,
            classLastResult: "",
            classButtonNewGame: 'd-none'
        };
    }

    componentDidMount(){
        this.guessNumber.focus();
    }
     componentDidUpdate(){
        if(this.state.classButtonNewGame === "btn btn-primary m-2"){
            this.replay.focus();
        }
    }

    checkGuess = e => {
        e.preventDefault();
        let guessValue = e.target.guessNumber.value;
        let randomValue = this.state.randomNumber;
        e.target.guessNumber.value = "";
        console.log(randomValue);
    

         let result = (guessValue- randomValue);
        if (result < 0){
            result = result * (-1);
        }
        

        if(guessValue !== "") {
            this.setState((prevState) => ({
                guesses: prevState.guesses === "" ? `Previous guesses: ${guessValue}` : `${prevState.guesses}, ${guessValue}`
            }))};
            if (result === 0) {
                this.setState({
                    lastResult: "Correct",
                    classLastResult: "m-2 p-1 bg-success",
                    classButtonNewGame: "btn btn-primary m-2"
                });
                this.submitGuess.setAttribute("disabled", "disabled");
                this.guessNumber.setAttribute("disabled", "disabled");

            } else if (result >= 0 && result <= 4 ) {
                this.setState({
                    lastResult: "Hot",
                    classLastResult: "m-2 p-1 bg-danger"
                });
            } else if (result >=5 && result <=15 ) {
                this.setState({
                    lastResult: "warm",
                    classLastResult: "m-2 p-1 bg-warning"
                });

            } else { 
                this.setState({
                    lastResult: "cold",
                    classLastResult: "m-2 p-1 bg-info"
                })
            }
    }

    render(){
        return(
            <div>
                <form className="form-inline" onSubmit={this.checkGuess}>
                        <h4>Choose a number:</h4>
                        <input name="guessNumber" type="number" min="1" max="100" ref={(input) => {this.guessNumber = input;}} className="form-control m-2"/>
                        <lable id='errorMessage'></lable>
                        <Button variant= "contained" color="primary" type="submit" ref={(button) => {this.submitGuess = button;}}>Go</Button>
                </form>
                <div>
                    <p className="m-2">{this.state.guesses}</p>
                    <p className={this.state.classLastResult}>{this.state.lastResult}</p>
                    <button ref={(button) => {this.replay = button;}} className={this.state.classButtonNewGame} onClick={this.props.newGame}>Replay</button>
                  
                </div>  
            </div>    
        );
    }
}

export default Game;