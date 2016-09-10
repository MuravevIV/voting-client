import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import {expect} from 'chai';
import Voting from '../../src/components/Voting';

describe('Voting', () => {

    it('renders a pair of buttons', () => {
        const component = renderIntoDocument(
            <Voting pair={['Trainspotting', '28 Days Later']}/>
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons.length).to.be.equal(2);
        expect(buttons[0].textContent).to.be.equal('Trainspotting');
        expect(buttons[1].textContent).to.be.equal('28 Days Later');
    });
});
