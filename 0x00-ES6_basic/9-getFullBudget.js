import getBudgetObject from './7-getBudgetObject';

/**
* Returns a full budget object with additional methods to convert income to dollars and euros.
*/
export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullbudget = {
    ...budget,
    getIncomeInDollars: (income) => `$${income}`,
    getIncomeInEuros: (income) => `${income} euros`,
  };

  return fullbudget;
}
