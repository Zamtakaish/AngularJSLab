import IBoard from '../models/Board';
import IUser from '../models/User';

export const CARDLISTS: IBoard[] = [
  {
    id: '1',
    name: 'Critical',
    cards: [
      {
        id: '1.1',
        name: 'Get a job',
        description: 'Get a job asap!',
        assignee: {
          id: 0,
          firstName: 'Anton',
          lastName: 'Ziuzikov'
        },
        isDone: false
      },
      {
        id: '1.2',
        name: 'Healthcare',
        description: 'Sign to complex diagnostics',
        dueDate: '11/01/2019',
        assignee: {
          id: 1,
          firstName: 'Anton',
          lastName: 'Ziuzikov'
        },
        isDone: false
      }
    ]
  },
  {
    id: '2',
    name: 'Stretch',
    cards: [
      {
        id: '2.1',
        name: 'Reapply to university',
        description: 'Grow in programming and biology and reapply to university',
        dueDate: '12/31/2020',
        assignee: {
          id: 0,
          firstName: 'Anton',
          lastName: 'Ziuzikov'
        },
        isDone: false
      },
      {
        id: '2.2',
        name: 'Room interior change',
        description: 'Think about new furniture and advanced workplace',
        isDone: false
      },
      {
        id: '2.3',
        name: 'Watch new film',
        description: 'Watch new film',
        dueDate: '10/17/2019',
        isDone: false
      }
    ]
  },
  {
    id: '3',
    name: 'Weekly',
    cards: [
      {
        id: '3.1',
        name: 'Buy crops',
        description: 'Rice, buckwheat',
        dueDate: '10/14/2019',
        isDone: false
      },
      {
        id: '3.2',
        name: 'Set meeting with friends',
        description: 'Board games midweek meeting',
        dueDate: '10/11/2019',
        isDone: false
      },
      {
        id: '3.3',
        name: 'Clean up',
        description: 'Clean up home',
        dueDate: '10/15/2019',
        isDone: false
      }
    ]
  },
];
