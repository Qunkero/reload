import React from 'react'
import {observer} from 'mobx-react';

@observer
export default class Counter extends React.Component {

    render() {
        return (<button onClick={this.onReset.bind(this)}>
            Seconds passed: {this.props.counterState.timer}
        </button>);
    }

    onReset () {
        this.props.counterState.resetTimer();
    }
}

Counter.propTypes = {

};