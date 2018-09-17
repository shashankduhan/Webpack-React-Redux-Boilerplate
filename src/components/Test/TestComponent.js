import React, { Component } from 'react';
import { testAction } from '../../actions/testAction';
import { connect } from 'react-redux';

class TestComponent extends Component {
    constructor(props) {
        super(props);
    }
    
    handleClick(e) {
        this.props.testAction();
    }

    render () {
        return (
            <div className="testButton" onClick={this.handleClick.bind(this)}>
                {this.props.test.toString()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { value } = state.test;
    return {
        test: value
    };
};

const mapActionsToProps = {
    testAction
}
  
export default connect(mapStateToProps, mapActionsToProps)(TestComponent);
