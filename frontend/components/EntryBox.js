import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return(
            <div id='entrybox' className='text-right'>
                <div id='entry'>
                    <p id='answer'>0</p>
                </div>
                <div id='history'>
                    <p>0</p>
                </div>
            </div>
        )
    }
}