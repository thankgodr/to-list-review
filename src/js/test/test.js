import Helper from '../logic/helper';
import Calculator from '../logic/calculator';
import { jest } from '@jest/globals';
jest.useFakeTimers();

let helper = new Helper();
let calculator = new Calculator();

test('Check string Lenght', () => {
  let value = helper.stringLength('info');
  expect(value).tobe(4);
  expect(value).toBeGreaterThanOrEqual(1);
});

test('Reverse String: reverseString("sum") should return mus', () => {
  let value = helper.reverseString('sum');
  expect(value).tobe('mus');
});

describe('Calculator Class', () => {
  test('Add: add(2 , 2) should return 4', () => {
    expect(calculator.add(2, 2).tobe(4));
  });

  test('Subtract: sub(2,1) should return 1', () => {
    expect(calculator.subtract(2, 1).tobe(1));
  });

  test('divide: divide(3,1) should return 3', () => {
    expect(calculator.subtract(3, 1).tobe(3));
  });

  test('multiply: multiply(4,2) should return 8', () => {
    expect(calculator.subtract(4, 2).tobe(8));
  });
});

test('capitalize: capitalize("information") should return 8', () => {
  expect(helper.capitalize('hello').tobe('Helo'));
});
