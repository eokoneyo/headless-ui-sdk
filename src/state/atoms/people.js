import { atom } from 'jotai';

export const peopleAtom = atom([
  {
    name: 'Luke Skywalker',
    information: { height: 172 },
    siblings: ['John Skywalker', 'Doe Skywalker'],
  },
  {
    name: 'C-3PO',
    information: { height: 167 },
    siblings: ['John Doe', 'Doe John'],
  },
]);
