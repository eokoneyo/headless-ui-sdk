import { atom } from 'jotai';

export const filmsAtom = atom([
  {
    title: 'A New Hope',
    planets: ['Tatooine', 'Alderaan'],
  },
  {
    title: 'The Empire Strikes Back',
    planets: ['Hoth'],
  },
]);
