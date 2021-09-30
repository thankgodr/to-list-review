import TaskManager from '../logic/taskManager';
import Task from '../models/task';
import Mockstorage from './mockstorage';

//// Arrange
global.localStorage = new Mockstorage();
const taskManager = new TaskManager([]);
const task = new Task('Cook Fish');
const task2 = new Task('Cook Yam');
const task3 = new Task('Cook Rice');

//Act and Assert
describe('Taskmanager Add and Delete Test', () => {
  test('Add task', () => {
    taskManager.addTask(task);
    taskManager.addTask(task2);
    expect(taskManager.tasksArray.length).toBe(2);
  });

  test('Task must be same according to position', () => {
    expect(taskManager.tasksArray).toEqual([task, task2]);
  });

  test('Task initial task must be false', () => {
    expect(taskManager.tasksArray[0].completed).toBe(false);
  });

  test('Task.index must be +1 with the taxk position in the arra', () => {
    expect(taskManager.tasksArray[0].index).toBe(1);
  });

  test('Delete Task', () => {
    taskManager.removeTask(0);
    expect(taskManager.tasksArray.length).toBe(1);
  });

  test('The right task was deleted', () => {
    expect(taskManager.tasksArray[0].description).toEqual(task2.description);
  });
});
