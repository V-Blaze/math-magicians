import operate from './operate';

describe('Test operatorJs logic', () => {
  test('15 divided by 3 to give 5', () => {
    const result = operate('15', '3', '÷');

    expect(result).toEqual('5');
  });
  test('Multiply 20 by 5 to get 100', () => {
    const result = operate('20', '5', 'x');

    expect(result).toEqual('100');
  });
});
