import getTotal from '../../selectors/totals.jsx';
import expenses from '../fixtures/expenses.jsx';

test('should return 0 if no expenses', () => {

    const result = getTotal([]);
    expect(result).toBe(0);

});

test('should correctly add up a single expense', () => {

    const result = getTotal([expenses[0]]);
    expect(result).toBe(195);

});

test('should correctly add up a multiple expense', () => {

    const result = getTotal(expenses);
    expect(result).toEqual(114195);

});