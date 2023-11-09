import { createRemoteSubscribable } from '@remote-ui/async-subscription';

export const createRemoteSubscribableFromAtom = (store, atom) =>
  createRemoteSubscribable({
    get current() {
      return store.get(atom);
    },
    subscribe(subscriber) {
      const sub = store.sub(atom, () => {
        subscriber(store.get(atom));
      });

      return () => sub();
    },
  });
