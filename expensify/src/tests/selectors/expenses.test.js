import selectExpenses from "../../selectors/expenses";

const expenses = [
  {
    id: "1",
    description: "gum",
    note: "",
    amount: 195,
    createdAt: 0
  },
  {
    id: "2",
    description: "rent",
    note: "",
    amount: 100095,
    createdAt: -1000
  },
  {
    id: "3",
    description: "Credit Card",
    note: "",
    amount: 4595,
    createdAt: 1000
  }
];

test("should filter by text value", () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate : undefined,
        endDate : undefined
    };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[1]]);
});

test('should filter by startDate', () => {
 const filters = {
     text: '',
     startDate : 0, 
     endDate: 1000
 };

 const result = selectExpenses(expenses,filters);
 expect(result).toEqual([expenses[0], expenses[2]]);
});