import React from 'react';
import {shallow, mount} from 'enzyme';
import Players, {mapStateToProps} from ".";


function setup(ajaxStatus) {
    const props = {
        players: [{
            name: 'name',
            position: 'position',
            nationality: 'nationality',
            dateOfBirth: "1990-11-07",
        }, {
            name: 'name',
            position: 'position',
            nationality: 'nationality',
            dateOfBirth: "1990-11-07",
        }],
        ajaxStatus: ajaxStatus
    }
    return shallow(<Players.WrappedComponent {...props} />);
}

describe('The Players component', () => {

    it('should render players container and hide modal when loading ', () => {
        const wrapper = setup(0);
        expect(wrapper.find('.player-container').length).toBe(1);
        expect(wrapper.find('.modal').length).toBe(0);

    });
    it('should render modal when loading', () => {
        const wrapper = setup(1);
        expect(wrapper.find('.modal').length).toBe(1);

    });

    it("should map the state to props correctly", () => {
        const sampleState = {
            players: [{
                "contractUntil": "2019-06-30",
                "dateOfBirth": "1990-11-07",
                "jerseyNumber": 1,
                "name": "David de Gea",
                "nationality": "Spain",
                "position": "Keeper"
            }],
            ajaxStatus: 0,
            filters:{},
        };
        //
        const componentState = mapStateToProps(sampleState, {});
        expect(componentState).toEqual(sampleState);
    });
    it("should map the state to props correctly with filters", () => {

        const setFilterFn = jest.fn(x=>{return});

        const sampleState = {
            players: [{
                "contractUntil": "2019-06-30",
                "dateOfBirth": "1990-11-07",
                "jerseyNumber": 1,
                "name": "David de Gea",
                "nationality": "Spain",
                "position": "Keeper"
            }],
            ajaxStatus: 0,
            filters:{
                name:"david",
                age:'28'
            },
            actions:{
                setFilters:setFilterFn,
            }
        };


        //
        const componentState = mapStateToProps(sampleState, {});
        componentState.actions= {
            setFilters:setFilterFn,
        };

        expect(componentState).toEqual(sampleState);
    });
});




