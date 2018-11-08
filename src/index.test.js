import configureStore from './store/configureStore';
import initialState from "./store/initialState";


const store = configureStore(initialState);
describe('Root Reducer',()=>{
    it('should get initialState',()=>{
        expect(store.getState().ajaxStatus).toEqual(0 );
        expect(store.getState().players).toEqual([]);
        expect(store.getState().filters).toEqual({});
    })

});



