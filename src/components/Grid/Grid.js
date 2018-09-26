import React, { Component } from 'react';

class Grid extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="grid-container row">
                <div className="hero col-md-12">
                    <span>Hero Element</span>
                </div>
                <div className="sub-box col-md-4 col-sm-6">
                    <span>Sub Element</span>
                </div>
                <div className="sub-box col-md-4 col-sm-6">
                    <span>Sub Element</span>
                </div>
                <div className="sub-box col-md-4 col-sm-6">
                    <span>Sub Element</span>
                </div>
                <div className="sub-box col-md-4 col-sm-6">
                    <span>Sub Element</span>
                </div>
                <div className="sub-box col-md-4 col-sm-6">
                    <span>Sub Element</span>
                </div>
                <div className="sub-box col-md-4 col-sm-6">
                    <span>Sub Element</span>
                </div>
            </div>
        )
    }
}

export default Grid;