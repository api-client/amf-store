export const EventTypes = {
  Store: {
    init: 'apistoreinit',
    loadGraph: 'apistoreloadgraph',
  },
  Api: {
    createWebApi: 'apistoreapicreatewebapi',
    generateRaml: 'apistoreapigenerateraml',
    generateGraph: 'apistoreapigenerategraph',
    get: 'apistoreapigetapi',
  },
  Endpoint: {
    list: 'apistoreendpointlist',
    listWithOperations: 'apistoreendpointlistwithops',
    listOperations: 'apistoreendpointoperations',
    add: 'apistoreendpointadd',
    delete: 'apistoreendpointdelete',
    get: 'apistoreendpointget',
    update: 'apistoreendpointupdate',
  },
  Operation: {
    add: 'apistoreopadd',
    get: 'apistoreopget',
    delete: 'apistoreopdelete',
    update: 'apistoreopupdate',
    addRequest: 'apistoreopaddrequest',
    addResponse: 'apistoreopaddresponse',
  },
  Parameter: {
    get: 'apistoreparamget',
  },
  Example: {
    get: 'apistoreexampleget',
  },
  Payload: {
    get: 'apistorepayloadget',
  },
  Request: {
    get: 'apistorerequestget',
  },
  Response: {
    get: 'apistoreresponseget',
  },
  Documentation: {
    list: 'apistoredocslist',
  },
  Security: {
    list: 'apistoresecuritylist',
  },
  Server: {
    list: 'apistoreserverslist',
    add: 'apistoreserversadd',
    get: 'apistoreserversget',
  },
  Type: {
    list: 'apistoretypelist',
  },
};

Object.freeze(EventTypes);
Object.freeze(EventTypes.Store);
Object.freeze(EventTypes.Api);
Object.freeze(EventTypes.Endpoint);
Object.freeze(EventTypes.Operation);
Object.freeze(EventTypes.Parameter);
Object.freeze(EventTypes.Example);
Object.freeze(EventTypes.Payload);
Object.freeze(EventTypes.Request);
Object.freeze(EventTypes.Response);
Object.freeze(EventTypes.Documentation);
Object.freeze(EventTypes.Security);
Object.freeze(EventTypes.Server);
Object.freeze(EventTypes.Type);
