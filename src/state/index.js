import { store } from './store.js';
import { peopleAtom, filmsAtom, infoAtom } from './atoms/index.js';
import { createAtomValueGetter, createAtomValueUpdater } from './helpers.js';
import { createRemoteSubscribableFromAtom } from './remotes.js';

export const updateAtomValue = createAtomValueUpdater(store);
export const getAtomValue = createAtomValueGetter(store);

export const filmsRemoteSubscribable = createRemoteSubscribableFromAtom(
  store,
  filmsAtom
);
export const peopleRemoteSubscribable = createRemoteSubscribableFromAtom(
  store,
  peopleAtom
);
export const infoRemoteSubscribable = createRemoteSubscribableFromAtom(
  store,
  infoAtom
);

// Simulate update to people atom
setTimeout(() => {
  updateAtomValue(peopleAtom, (prevValue) => {
    return [
      ...prevValue,
      {
        name: 'Uchia Sasuke',
        information: { height: 167 },
        siblings: ['Uchia Itachi'],
      },
    ];
  });
}, 1000 * 60);
