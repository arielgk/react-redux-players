import React from 'react';
import App from './App';
import {shallow, mount} from 'enzyme';

function setup() {

    const props = {
        store: {}
    }
    return shallow(<App {...props}/>);
}

describe('The App component', () => {

    it('renders app', () => {
        const wrapper = setup();
        expect((wrapper.find('.app').length)).toBe(1);
    });
    it('renders container', () => {
        const wrapper = setup();
        expect((wrapper.find('.container').length)).toBe(1);
    });

})

