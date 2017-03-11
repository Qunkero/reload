import React from 'react'
import {shallow} from 'enzyme'
import Div from '../frontend/Component/SimpleDiv';
import Button from '../frontend/Component/Button';
import chai from 'chai';
import sinon from 'sinon';

describe("react testing", () => {
    it('testing Div component', () => {
        let data = 'hello';
        const div = shallow(
            <Div data={data}/>
        );
        chai.assert(div.text(), 'hello')
    });

    it('testing Button component', ()=> {
        var callback = sinon.stub().returns(42);
        let name = 'click';

        const button = shallow(
            <Button handleClick={callback} name={name}/>
        );

        chai.assert(button.text(), 'click me click');
        chai.assert(button.simulate('click'), 42);
        console.log(`${button}`);
    });

});