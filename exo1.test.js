const question2 = require("./exo1");

const input = [
    {
        price: 3000,
        kind: 'reductionVoucher',
        savings: 300,
        savingsType: 'total',
    },
    {
        price: undefined,
        kind: 'sales',
        savings: 10,
        savingsType: 'percent',
    },
    {
        price: 3000,
        kind: 'sales',
        savings: 15,
        savingsType: 'percent',
    }
]

test('Exo 1 question 2', () => {
    expect(question2(input));
});