import TaskManager from '../logic/taskManager';
import Task from '../models/task';
import Mockstorage from './mockstorage';

global.localStorage = new Mockstorage();

describe('Taskmanager Add', () => { });