import React from 'react';

import {shallow, mount} from 'enzyme';
import Player from "./Player";
import { getAge} from "../../selectors/playersSelector";

const dateOfBirth = '1991-11-07';


function setup() {

    const props = {
        player: {
            name: 'name',
            position: 'position',
            nationality: 'nationality',
            dateOfBirth: dateOfBirth,
        }
    }



    return shallow(<Player {...props}/>);
}

describe('The Player component', () => {

    it('renders player name', () => {
        const wrapper = setup();
        const age = getAge(dateOfBirth);

        expect(wrapper.find('.player-row').children().at(0).text()).toBe('name');
        expect(wrapper.find('.player-row').children().at(1).text()).toBe('position');
        expect(wrapper.find('.player-row').children().at(2).text()).toBe('nationality');
        expect(wrapper.find('.player-row').children().at(3).text()).toBe( age.toString(10) );
    });

});

