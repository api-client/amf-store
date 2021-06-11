export const EventTypes = {
  Store: {
    init: 'apistoreinit',
    loadGraph: 'apistoreloadgraph',
    loadApi: 'apistoreloadapi',
  },
  Api: {
    createWebApi: 'apistoreapicreatewebapi',
    generateRaml: 'apistoreapigenerateraml',
    generateGraph: 'apistoreapigenerategraph',
    get: 'apistoreapigetapi',
  },
  Endpoint: {
    add: 'apistoreendpointadd',
    get: 'apistoreendpointget',
    update: 'apistoreendpointupdate',
    delete: 'apistoreendpointdelete',
    list: 'apistoreendpointlist',
    listWithOperations: 'apistoreendpointlistwithops',
    listOperations: 'apistoreendpointoperations',
    addOperation: 'apistoreendpointaddoperation',
    removeOperation: 'apistoreendpointremoveoperation',
    State: {
      updated: 'apistoreendpointstateupdate',
      deleted: 'apistoreendpointstatedelete',
      created: 'apistoreendpointstatecreate',
    },
  },
  Operation: {
    get: 'apistoreopget',
    update: 'apistoreopupdate',
    addRequest: 'apistoreopaddrequest',
    removeRequest: 'apistoreopremoverequest',
    addResponse: 'apistoreopaddresponse',
    removeResponse: 'apistoreopremoveresponse',
    getParent: 'apistoreopgetparent',
    State: {
      updated: 'apistoreopstateupdate',
      deleted: 'apistoreopstatedelete',
      created: 'apistoreopstatecreate',
    },
  },
  Parameter: {
    get: 'apistoreparamget',
    update: 'apistoreparamupdate',
    addExample: 'apistoreparamupdateaddexample',
    removeExample: 'apistoreparamupdateremoveexample',
    State: {
      updated: 'apistoreparamstateupdate',
      deleted: 'apistoreparamstatedelete',
      created: 'apistoreparamstatecreate',
    },
  },
  Example: {
    get: 'apistoreexampleget',
    update: 'apistoreexampleupdate',
    State: {
      updated: 'apistoreexamplestateupdate',
      deleted: 'apistoreexamplestatedelete',
      created: 'apistoreexamplestatecreate',
    },
  },
  Payload: {
    get: 'apistorepayloadget',
    update: 'apistorepayloadupdate',
    addExample: 'apistorepayloadaddexample',
    removeExample: 'apistorepayloadremoveexample',
    State: {
      updated: 'apistorepayloadstateupdate',
      deleted: 'apistorepayloadstatedelete',
      created: 'apistorepayloadstatecreate',
    },
  },
  Request: {
    get: 'apistorerequestget',
    update: 'apistorerequestupdate',
    addPayload: 'apistorerequestaddpayload',
    removePayload: 'apistorerequestremovepayload',
    addHeader: 'apistorerequestaddheader',
    removeHeader: 'apistorerequestremoveheader',
    addQueryParameter: 'apistorerequestaddqueryparameter',
    removeQueryParameter: 'apistorerequestremovequeryparameter',
    addCookieParameter: 'apistorerequestaddcookieparameter',
    removeCookieParameter: 'apistorerequestremovecookieparameter',
    State: {
      updated: 'apistorerequeststateupdate',
      deleted: 'apistorerequeststatedelete',
      created: 'apistorerequeststatecreate',
    },
  },
  Response: {
    get: 'apistoreresponseget',
    update: 'apistoreresponseupdate',
    addHeader: 'apistoreresponseaddheader',
    removeHeader: 'apistoreresponseremoveheader',
    addPayload: 'apistoreresponseaddpayload',
    removePayload: 'apistoreresponseremovepayload',
    State: {
      updated: 'apistoreresponsestateupdate',
      deleted: 'apistoreresponsestatedelete',
      created: 'apistoreresponsestatecreate',
    },
  },
  Documentation: {
    add: 'apistoredocsadd',
    get: 'apistoredocsget',
    update: 'apistoredocsupdate',
    delete: 'apistoredocsdelete',
    list: 'apistoredocslist',
    State: {
      updated: 'apistoredocsstateupdate',
      deleted: 'apistoredocsstatedelete',
      created: 'apistoredocsstatecreate',
    },
  },
  Security: {
    get: 'apistoresecurityget',
    getRequirement: 'apistoresecuritygetrequirement',
    list: 'apistoresecuritylist',
  },
  Server: {
    list: 'apistoreserverslist',
    add: 'apistoreserversadd',
    get: 'apistoreserversget',
    State: {
      updated: 'apistoreserversstateupdate',
      deleted: 'apistoreserversstatedelete',
      created: 'apistoreserversstatecreate',
    },
  },
  Type: {
    add: 'apistoretypeadd',
    get: 'apistoretypeget',
    update: 'apistoretypeupdate',
    delete: 'apistoretypedelete',
    list: 'apistoretypelist',
    State: {
      updated: 'apistoretypestateupdate',
      deleted: 'apistoretypestatedelete',
      created: 'apistoretypestatecreate',
    },
  },
  CustomProperty: {
    add: 'apistorecdpadd',
    get: 'apistorecdpget',
    getExtension: 'apistoredomainextensionget',
    update: 'apistorecdpupdate',
    list: 'apistorecdplist',
    delete: 'apistorecdpdelete',
    State: {
      updated: 'apistorecdpstateupdate',
      deleted: 'apistorecdpstatedelete',
      created: 'apistorecdpstatecreate',
    },
  },
};

Object.freeze(EventTypes);
Object.freeze(EventTypes.Store);
Object.freeze(EventTypes.Api);
Object.freeze(EventTypes.Endpoint);
Object.freeze(EventTypes.Endpoint.State);
Object.freeze(EventTypes.Operation);
Object.freeze(EventTypes.Operation.State);
Object.freeze(EventTypes.Parameter);
Object.freeze(EventTypes.Example);
Object.freeze(EventTypes.Payload);
Object.freeze(EventTypes.Request);
Object.freeze(EventTypes.Response);
Object.freeze(EventTypes.Documentation);
Object.freeze(EventTypes.Documentation.State);
Object.freeze(EventTypes.Security);
Object.freeze(EventTypes.Server);
Object.freeze(EventTypes.Type);
Object.freeze(EventTypes.Type.State);
Object.freeze(EventTypes.CustomProperty);
Object.freeze(EventTypes.CustomProperty.State);
