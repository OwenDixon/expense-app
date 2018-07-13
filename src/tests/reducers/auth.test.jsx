import authReducer from '../reducers/auth.test.jsx';
import { bindActionCreators } from '../../../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import { stat } from 'fs';

test('should set up default auth state', () => {
    const state = authReducer(undefined, '@@INIT');
    expect(state).toEqual({});
});

test('should set up user state as logged in', () => {
    const action = {
        type: 'LOGIN',
        uid: '12345'
    };
    const state = authReducer(undefined, action);
    expect(state.uid).toBe(action.uid);

});

test('should set up user state as logged out', () => {

    const state = authReducer({uid:'12345'}, {type: 'LOGOUT'});
    expect(state).toEqual({});

});