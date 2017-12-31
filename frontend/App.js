import React from 'react';
import counterStores from './store/couter'
import Counter from './components/Counter';


class App extends React.Component {
    render() {
        return (
          <div>
              <Counter counterState={counterStores} />
          </div>
        )
    }
}

export default App;