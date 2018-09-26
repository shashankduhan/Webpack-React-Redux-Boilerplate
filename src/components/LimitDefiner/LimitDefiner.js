import React, { Component } from 'react';

class LimitDefiner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            limits:[],
            freeText:[],
            result: "Not Defined"
        }
    }

    limitAddHandler () {
        const max = parseInt(document.getElementById('max_input').value);
        const freeText = document.getElementById('freeText_input').value;
        const freeTexts = this.state.freeText;
        let limits = this.state.limits;
        let newIndex = limits.length;
        if(limits.indexOf(max) == -1){
            limits.push(max);
            limits = limits.sort((a, b) => (a-b));
            newIndex = limits.indexOf(max);
            freeTexts.splice(newIndex, 0, freeText);
        }
        this.setState({
            limits: limits,
            freeText: freeTexts
        });
    }

    limitIndicator() {
        const int = document.getElementById('integer_input').value;
        let result = false;
        for(let i = 0; i < this.state.limits.length; i++){
            if(i+1 < this.state.limits.length){
                if(int > this.state.limits[i] && int <= this.state.limits[i+1]){
                    result = i;break;
                }
            }else {
                if (int > this.state.limits[i]) {
                    result = i;break;
                }
            }
        }

        if(result !== false) {
            this.setState({
                result: this.state.freeText[result]
            })
        }else{
            this.setState({
                result: "Not Defined"
            })
        }
    }

    render(){
        const limit_list = this.state.limits.map((obj, index) => {
            return (
                <div key={index}>
                    <span>{obj} - {this.state.freeText[index]}</span>
                </div>
            )
        })
        return (
            <div className="container" >
                <div className="limit_list">{limit_list}</div>
                <div className="form" >
                    <input type="text" name="max_input" placeholder="Breakpoint" id="max_input"/>
                    <br/>
                    <input type="text" name="freeText_input" placeholder="Free Text" id="freeText_input"/>
                    <button onClick={this.limitAddHandler.bind(this)}>Add Limit</button>
                </div>
                <br className="clearfloat"/>
                <div className="indicator">
                    <input type="text" name="integer_input" id="integer_input"/>
                    <button onClick={this.limitIndicator.bind(this)}>Show</button>
                    <div className="result">{this.state.result}</div>
                </div>
            </div>
        )
    }
}

export default LimitDefiner;