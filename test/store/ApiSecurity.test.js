import { assert } from '@open-wc/testing';
import { AmfLoader } from '../helpers/AmfLoader.js';
import { AmfStoreService, StoreEvents } from '../../worker.index.js';

/** @typedef {import('../../').ApiEndPointListItem} ApiEndPointListItem */
/** @typedef {import('../../').ApiEndPointWithOperationsListItem} ApiEndPointWithOperationsListItem */
/** @typedef {import('../../').ApiSecurityOAuth2Settings} ApiSecurityOAuth2Settings */

describe('AmfStoreService', () => {
  describe('Reading data', () => {
    let demoStore = /** @type AmfStoreService */ (null);
    let demoApi;

    before(async () => {
      demoApi = await AmfLoader.loadApi();
      demoStore = new AmfStoreService();
      await demoStore.init();
      await demoStore.loadGraph(demoApi);
    });

    after(() => {
      demoStore.worker.terminate();
    });

    describe('listSecurity()', () => {
      it('reads list of security', async () => {
        const result  = await demoStore.listSecurity();
        assert.typeOf(result, 'array', 'has the security');
        assert.lengthOf(result, 3, 'has all security definitions');
      });
  
      it('has the security definition', async () => {
        const result  = await demoStore.listSecurity();
        const [sec] = result;
        assert.typeOf(sec.id, 'string', 'has the id');
        assert.equal(sec.type, 'OAuth 2.0', 'has the type');
        assert.equal(sec.name, 'oauth_2_0', 'has the name');
      });
  
      it('list security with the event', async () => {
        const result = await StoreEvents.Security.list(document.body);
        assert.typeOf(result, 'array');
      });
    });

    /**
     * @param {string} name 
     * @returns {Promise<string>}
     */
    async function getSecuritySchemeId(name) {
      const list  = await demoStore.listSecurity();
      const scheme = list.find((item) => item.name === name);
      return scheme.id;
    }

    describe('getSecurityScheme()', () => {
      it('reads the security definition', async () => {
        const id = await getSecuritySchemeId('oauth_2_0');
        const result = await demoStore.getSecurityScheme(id);
        assert.typeOf(result.headers, 'array', 'has the headers property');
        assert.typeOf(result.queryParameters, 'array', 'has the queryParameters property');
        assert.typeOf(result.responses, 'array', 'has the responses property');
        assert.typeOf(result.settings, 'object', 'has the settings property');
        assert.equal(result.name, 'oauth_2_0', 'has the name property');
        assert.equal(result.type, 'OAuth 2.0', 'has the type property');
        assert.equal(result.description, 'This API supports OAuth 2.0 for authenticating all API requests.', 'has the description property');
      });

      it('has the oauth 2 settings', async () => {
        const id = await getSecuritySchemeId('oauth_2_0');
        const result = await demoStore.getSecurityScheme(id);
        const schema = /** @type ApiSecurityOAuth2Settings */ (result.settings);
        assert.typeOf(schema.flows, 'array', 'has the flows property');
        assert.typeOf(schema.authorizationGrants, 'array', 'has the authorizationGrants property');
      });
    });

    describe('getSecurityRequirement()', () => {
      it('reads the security definition on an operation', async () => {
        const op = await demoStore.getOperation('post', '/messages');
        const [id] = op.security;
        const result = await demoStore.getSecurityRequirement(id);
        assert.typeOf(result.schemes, 'array', 'has the schemes property');
        assert.lengthOf(result.schemes, 1, 'has a single scheme');
        const [scheme] = result.schemes;
        // if this fails just check what is the name of the generated security for this operation.
        assert.equal(scheme.name, 'basic', 'has the scheme details');
      });
    });
  });
});
