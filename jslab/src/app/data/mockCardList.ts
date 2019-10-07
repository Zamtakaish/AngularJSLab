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
      },
      {
        id: '1.2',
        name: 'Healthcare',
        description: 'Sign to complex diagnostics',
        dueDate: '01.11.2019'
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
        dueDate: '31.12.2020'
      },
      {
        id: '2.2',
        name: 'Room interior change',
        description: 'Think about new furniture and advanced workplace',
      },
      {
        id: '2.3',
        name: 'Watch new film',
        description: 'Watch new film',
        dueDate: '17.10.2019'
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
        dueDate: '14.10.2019'
      },
      {
        id: '3.2',
        name: 'Set meeting with friends',
        description: 'Board games midweek meeting',
        dueDate: '13.10.2019'
      },
      {
        id: '3.3',
        name: 'Clean up',
        description: 'Clean up home',
        dueDate: '15.10.2019'
      }
    ]
  },
];
