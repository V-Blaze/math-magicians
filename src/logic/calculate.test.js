import calculate from './calculate';

describe('Test the calculate.js Logic', () => {
  test('Add 2 and 3 to get 5', () => {
    const obj = {
      total: '2',
      next: '3',
      operation: '+',
    };

    const buttonName = '+';

    const result = calculate(obj, buttonName);

    expect(result.total).toBe('5');
  });

  test('subtract 20 from 41 to get 21', () => {
    const obj = {
      total: '41',
      next: '20',
      operation: '-',
    };

    const buttonName = '-';

    const result = calculate(obj, buttonName);

    expect(result.total).toBe('21');
  });

  test('expect 50 mod 4 to give 2', () => {
    const obj = {
      total: '50',
      next: '4',
      operation: '%',
    };

    const buttonName = '%';

    const result = calculate(obj, buttonName);

    expect(result.total).toBe('2');
  });
  test('expect the AC button to retun keys with null value', () => {
    const obj = {
      total: '50',
      next: '4',
      operation: '%',
    };

    const buttonName = 'AC';

    const result = calculate(obj, buttonName);

    expect(result.total).toBe(null);
    expect(result.operation).toBeNull();
  });
});
