import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters.jsx';
import moment from 'moment';

test('should generate start date from action object', () => {

    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });

});

test('should generate end date from action object', () => {

    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });

});

test('Set the test filter of the object', () => {

    const action = setTextFilter('test');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test'
    });

});

test('Set the test filter of the object', () => {

    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });

});

test('Sort the object to sort by Date', () => {

    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    });

});

test('Sort the object to sort by Amount', () => {

    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    });

});