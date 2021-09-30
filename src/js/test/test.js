import Calculator from '../logic/calculator';
import Helper from '../logic/helper';
import TaskManager from '../logic/taskManager';
import Task from '../models/task';
import Mockstorage from './mockstorage';

global.localStorage = new Mockstorage();
let helper = new Helper();
let calculator = new Calculator();
let taskManager = new TaskManager([]);
let previousTaskArrayLenth = taskManager.tasksArray.length;
let task = new Task('Cook Fish');
taskManager.addTask(task);

test('check id task was added', () => {
  expect(previousTaskArrayLenth).toBeLessThan(taskManager.tasksArray.length);
});
test('Check delete Task works', () => {
  taskManager.removeTask(0);
  expect(previousTaskArrayLenth).toBe(taskManager.tasksArray.length);
});

test('Check string Lenght', () => {
  let value = helper.stringLength('info');
  expect(value).toBe(4);
  expect(value).toBeGreaterThanOrEqual(1);
});

test('Reverse String: reverseString("sum") should return mus', () => {
  let value = helper.reverseString('sum');
  expect(value).toBe('mus');
});

describe('Calculator Class', () => {
  test('Add: add(2 , 2) should return 4', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  test('Subtract: sub(2,1) should return 1', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });

  test('divide: divide(3,1) should return 3', () => {
    expect(calculator.divide(3, 1)).toBe(3);
  });

  test('multiply: multiply(4,2) should return 8', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });
});

test('capitalize: capitalize("information") should return 8', () => {
  expect(helper.capitalize('hello')).toBe('Hello');
});
