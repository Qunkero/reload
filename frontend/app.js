import React from 'react';
import ReactDom from 'react-dom';
import Button from './Component/Button';
import Div from './Component/SimpleDiv';

class App extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            data: new Date()
        }
    }

    handleClick(e) {
        console.log('click  was done');
        this.setState({
            data: new Date()
        })
    }

    render() {
        return (
            <div>
                <Button name="mazafaka" handleClick={this.handleClick}/>
                <Div data={+this.state.data}/>
            </div>
        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
);