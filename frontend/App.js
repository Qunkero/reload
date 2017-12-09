import React from 'react';
import stateCounter from './ducks/couter'
import Counter from './components/Counter';


class App extends React.Component {
    render() {
        return (
            <Counter counterState={stateCounter} />
        )
    }
}

export default App;