import {createSelector} from 'reselect'

export const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 31556925994)

const getPlayers = (state) => state.players;
const getFilters = (state) => state.filters;

const playerSelector = createSelector(
    [getPlayers, getFilters],
    function (players, filters) {

        if (Object.keys(filters).length === 0 && filters.constructor === Object) {
            return players;
        } else {

            return Object.assign([], players.filter(
                function search(player) {
                    return Object.keys(this).every((key) => {
                        if (key === 'age') {

                            return getAge(player['dateOfBirth']).toString() === this[key].toString()
                        } else {
                            return player[key].toLowerCase().includes(this[key].toLowerCase())
                        }

                    });
                }, filters));
        }

    }
);

export default playerSelector;
