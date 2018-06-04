import moment from 'moment';
import filtersReducer from '../../reducers/filters.jsx';

//test the default (@@INIT) is set up correctly

test('should set up default filter values', () => {

    const state = filtersReducer(undefined, '@@INIT');

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });

});

//test sortBy is set to 'amount'
test('should set sortBy to amount', () => {

    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');

});

//test sortBy is set to 'date'
test('should set sortBy to date', () => {
    
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const action = { type: 'SORT_BY_DATE' };
    const stateAfter = filtersReducer(currentState, action);
    expect(stateAfter.sortBy).toBe('date');

});

test('should set text filer', () => {

    const text = "test text";
    const action = {
        type: 'SET_TEXT_FILTER',
        text: text
    }

    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);

});

test('should set startDate filter', () => {

    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate: startDate
    }

    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(startDate);

});

test('should set endDate filter', () => {

    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate: endDate
    }

    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(endDate);
})