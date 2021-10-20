const question2 = require("./exo1");
const question1 = require("./tt");

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

const input2 = [
    ["key1", 1, 2, 3,4],
    ["key2", 4, 5, 6,7]
]
test('Exo 1 question 2', () => {
    expect(question2(input));
});

test('Exo 1 question 1', () => {
    expect(question1(input2));
});