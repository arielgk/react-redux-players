import {shallow} from "enzyme/build";
import React from 'react';
import Filters from "./index";
import positions from '../../constants/positions';

describe('The Filters Container', () => {
    function setup() {
        const setFilterFn = jest.fn(x => {
            return
        });
        const props = {
            actions: {
                setFilters: setFilterFn,
            }
        };
        return shallow(<Filters.WrappedComponent {...props}/>);
    }

    it('should render filter container', () => {
        const wrapper = setup();
        expect(wrapper.find('.filter-container').length).toBe(1);
    });
    it('should render select with position options', () => {
        const wrapper = setup();
        expect(wrapper.find('select[name="position"] > option').length).toBe(positions.length + 1);

    })
    describe('Filters logic', () => {
        it('should triger change on input type text', () => {
            const eventPersist = jest.fn(x => {
                return
            });
            const wrapper = setup();
            wrapper.find('input[type="text"]').simulate('change', {target: {value: 'Ro'}, persist: eventPersist});

        });
        it('should triger change on input type number', () => {
            const eventPersist = jest.fn(x => {
                return
            });
            const wrapper = setup();
            wrapper.find('input[type="number"]').simulate('change', {
                target: {name: 'age', value: 29},
                persist: eventPersist
            });
            expect(wrapper.state().filters.age).toBe(29);

        });

        it('should delete invalid filter', () => {
            const eventPersist = jest.fn(x => {
                return
            });
            const wrapper = setup();
            wrapper.find('input[type="number"]').simulate('change', {
                target: {name: 'age', value: ''},
                persist: eventPersist
            });
            expect(wrapper.state().filters).toEqual({});

        });
        it('should create error when age is less than 18', () => {
            const eventPersist = jest.fn(x => {
                return
            });
            const wrapper = setup();
            wrapper.find('input[type="number"]').simulate('change', {
                target: {name: 'age', value: 9},
                persist: eventPersist
            });
            expect(wrapper.state().errors.age).toBe('Age should be between 18 and 40');

        })
        it('should create error when age is more than 40', () => {
            const eventPersist = jest.fn(x => {
                return
            });
            const wrapper = setup();
            wrapper.find('input[type="number"]').simulate('change', {
                target: {name: 'age', value: 49},
                persist: eventPersist
            });
            expect(wrapper.state().errors.age).toBe('Age should be between 18 and 40');

        });

        it('should create set position filter', () => {
            const eventPersist = jest.fn(x => {
                return
            });
            const wrapper = setup();
            wrapper.find('select').simulate('change', {
                target: {name: 'position', value: 'Left Wing'},
                persist: eventPersist
            });
            expect(wrapper.state().filters.position).toBe('Left Wing');

        });

    });

});


