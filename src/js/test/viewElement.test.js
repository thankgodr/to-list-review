import TaskManager from '../logic/taskManager';
import Task from '../models/task';
import Mockstorage from './mockstorage';
import { deleteTask, printInitialTasks, removeALlCompleted, addTask } from '../index';

global.localStorage = new Mockstorage();

describe('Taskmanager Add DOM', () => {
    test('Add task', () => {
        document.body.innerHTML = '<ul id="taskList" class="list-group"></ul>';
        const ul = document.querySelector('#taskList');
        printInitialTasks();
        addTask('task1');
        expect(ul.childElementCount).toBe(1);
    });
 });