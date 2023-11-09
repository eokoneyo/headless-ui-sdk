export const createAtomValueUpdater = (store) => (atom, value) => {
  if (value instanceof Function) {
    return store.set(atom, value(store.get(atom)));
  } else {
    store.set(atom, value);
  }
};

export const createAtomValueGetter = (store) => (atom) => {
  return store.get(atom);
};
