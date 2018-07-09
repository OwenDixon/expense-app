import expensesReducer from '../../reducers/expenses.jsx';
import expenses from '../fixtures/expenses.jsx';
import { setExpenses } from '../../actions/expenses';


test('should set up the default expenses array', () => {

    const state = expensesReducer(undefined, '@@INIT');
    expect(state).toEqual([]);
});

test('should remove an expense by id', () => {

    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);

});

test('should add an expense to array', () => {

    const expense = {
        id: '4',
        description: 'Watch',
        note: '',
        amount: 295,
        createdAt: 22220
    }
    
    const action = {
        type: 'ADD_EXPENSE',
        expense: expense
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses, expense]);

});

test('should edit an existing expense', () => {

    const amount = 2000000;

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            amount: amount
        }
    }

    const state = expensesReducer(expenses, action);

    expect(state[2].amount).toBe(amount);

});

test('should not edit an existing expense because id is incorrect', () => {

    const amount = 2000000;

    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            amount: amount
        }
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);

});

test('should set expenses', () => {

    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);

});