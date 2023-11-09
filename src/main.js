import { createEndpoint, fromInsideIframe } from '@remote-ui/rpc';
import {
  peopleRemoteSubscribable,
  filmsRemoteSubscribable,
  infoRemoteSubscribable,
} from './state/index.js';

const endpoint = createEndpoint(fromInsideIframe());

function init() {
  return {
    people: peopleRemoteSubscribable,
    films: filmsRemoteSubscribable,
    info: infoRemoteSubscribable,
  };
}

endpoint.expose({ init });
