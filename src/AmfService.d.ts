import AMF from 'amf-client-js';
import { ApiEndPointListItem, ApiCustomDomainProperty, ApiDocumentation, ApiEndPoint, ApiEndPointWithOperationsListItem, ApiExample, ApiInit, ApiNodeShapeListItem, ApiOperation, ApiOperationListItem, ApiParameter, ApiParametrizedSecurityScheme, ApiPayload, ApiRequest, ApiResponse, ApiSecurityRequirement, ApiSecurityScheme, ApiSecuritySchemeListItem, ApiServer, ApiServerInit, ApiTemplatedLink, EndPointInit, OperationInit, OperationRequestInit, SerializedApi, OperationResponseInit, DocumentationInit, ApiNodeShape, ApiShapeUnion, ShapeInit, ParameterInit, PayloadInit, ExampleInit, ApiSecurityScope, ApiSecurityOAuth2Flow, ApiResource, ParserVendors, ParserMediaTypes, ApiDomainExtension, ApiCustomDomainPropertyListItem, CustomDomainPropertyInit, ApiSecuritySettingsUnion, ApiPropertyShape, PropertyShapeInit, ApiOperationRecursive } from './types';


export declare class AmfService {
  graph?: AMF.model.document.Document;
  amf: unknown;
  /**
   * @param amf The reference to the AMF library.
   */
  constructor(amf: unknown);

  /**
   * Loads an API project into the store.
   * @param contents The list of files to process.
   * @param vendor The vendor of the API.
   * @param mediaType The API media type
   * @param main The name of the main API file.
   */
  loadApi(contents: ApiResource[], vendor: ParserVendors, mediaType: ParserMediaTypes, main: string): Promise<void>;

  /**
   * Loads existing API model into to graph as Document.
   */
  loadGraph(model: string): Promise<void>;

  /**
   * Creates new Document in the graph.
   * @param init Api init options
   * @returns The domain id of the created WebAPI
   */
  createWebApi(init?: ApiInit): Promise<string>;

  /**
   * Reads the WebApi property.
   */
  webApi(): AMF.model.domain.WebApi;

  /**
   * Generates RAML api from the current graph.
   * @returns RAML value for the API.
   */
  generateRaml(): Promise<string>;

  /**
   * Generates json+ld from the current graph.
   * @returns JSON+ld value of the API.
   */
  generateGraph(): Promise<string>;

  /**
   * Checks whether an API is currently loaded.
   * @returns True when the API is loaded.
   */
  hasApi(): boolean;

  /**
   * Reads basic info about the API.
   */
  getApi(): Promise<SerializedApi>;

  /**
   * @returns List of servers in this API.
   */
  listServers(): Promise<ApiServer[]>;

  /**
   * Adds a server definition to the API.
   * @param init 
   * @returns The instance of the created server
   */
  addServer(init: ApiServerInit): Promise<ApiServer>;

  /**
   * Reads the Server definition from the graph.
   * @param id The domain id of the Server to read
   */
  getServer(id: string): Promise<ApiServer>;

  /**
   * List all endpoints in the API.
   */
  listEndpoints(): Promise<ApiEndPointListItem[]>;

  /**
   * Lists all endpoints with operations included into the result.
   */
  listEndpointsWithOperations(): Promise<ApiEndPointWithOperationsListItem[]>;

  /**
   * Adds a new endpoint to the API and returns it.
   * @param init EndPoint init parameters
   */
  addEndpoint(init: EndPointInit): Promise<ApiEndPoint>;

  /**
   * Finds an endpoint by path or domain id.
   * @param pathOrId The domain id of the endpoint or its path.
   */
  findEndpoint(pathOrId: string): AMF.model.domain.EndPoint | undefined;

  /**
   * Removes endpoint from the API.
   * @param id The endpoint domain id.
   */
  deleteEndpoint(id: string): Promise<void>;

  /**
   * Reads the information about an endpoint and returns it.
   * @param idOrPath The domain id of the endpoint or its path.
   */
  getEndpoint(idOrPath: string): Promise<ApiEndPoint>;

  /**
   * Updates a scalar property of an endpoint.
   * @param id The domain id of the endpoint.
   * @param property The property name to update
   * @param value The new value to set.
   */
  updateEndpointProperty(id: string, property: string, value: unknown): Promise<ApiEndPoint>;

  /**
   * Adds an empty operation to an endpoint.
   * @param pathOrId The path or domain id of the endpoint that is the parent of the operation.
   * @param init The operation initialize options
   */
  addOperation(pathOrId: string, init: OperationInit): Promise<ApiOperation>;

  /**
   * Searches for an operation in the API.
   * @param methodOrId Method name or the domain id of the operation to find
   * @param pathOrId Optional endpoint path or its id. When not set it searches through all endpoints.
   */
  findOperation(methodOrId: string, pathOrId?: string): AMF.model.domain.Operation | undefined;

  /**
   * Reads the operation model.
   * @param methodOrId Method name or the domain id of the operation to find
   * @param pathOrId Optional endpoint path or its id. When not set it searches through all endpoints.
   */
  getOperation(methodOrId?: string, pathOrId?: string): Promise<ApiOperation>;
  /**
   * Reads the operation model with all sub-models.
   * @param methodOrId Method name or the domain id of the operation to find
   * @param pathOrId Optional endpoint path or its id. When not set it searches through all endpoints.
   */
  getOperationRecursive(methodOrId?: string, pathOrId?: string): Promise<ApiOperationRecursive>;

  /**
   * Lists all operations in an endpoint.
   * @param pathOrId The domain id of the endpoint to list operations from or its path.
   */
  listOperations(pathOrId: string): Promise<ApiOperationListItem[]>;

  /**
   * Removes an operation from the graph.
   * @param id The operation id to remove.
   * @param endpointId The domain id of the parent endpoint.
   * @returns The id of the affected endpoint. Undefined when operation or endpoint cannot be found.
   */
  deleteOperation(id: string, endpointId: string): Promise<string>;
  /**
   * Finds an endpoint that has the operation.
   * @param methodOrId Method name or the domain id of the operation to find
   * @param pathOrId Optional endpoint path or its id. When not set it searches through all endpoints.
   */
  getOperationParent(methodOrId: string, pathOrId?: string): Promise<ApiEndPoint | undefined>;

  /**
   * Finds the parent endpoint for the operation
   * @param id The id of the operation
   */
  findOperationParent(id: string): AMF.model.domain.EndPoint | undefined;

  /**
   * Updates a scalar property of an operation.
   * @param id The domain id of the operation.
   * @param property The property name to update
   * @param value The new value to set.
   */
  updateOperationProperty(id: string, property: string, value: unknown): Promise<ApiOperation>;

  /**
   * @param operationId The operation domain id
   * @param init The response init options.
   * @returns The domain id of the created response
   */
  addResponse(operationId: string, init: OperationResponseInit): Promise<ApiResponse>;

  /**
   * Reads the response data from the graph.
   * @param id The domain id of the response.
   */
  getResponse(id: string): Promise<ApiResponse>;

  /**
   * Reads Response data in a bulk operation
   * @param ids The ids to read
   */
  getResponses(ids: string[]): Promise<ApiResponse[]>;

  /**
   * Adds a header to the response.
   * @param responseId The response domain id
   * @param init The Parameter init options.
   */
  addResponseHeader(responseId: string, init: ParameterInit): Promise<ApiParameter>;

  /**
   * Removes a header from a response
   * @param responseId The response id to remove the header from
   * @param headerId The header id to remove.
   * @returns Updated response
   */
  removeResponseHeader(responseId: string, headerId: string): Promise<ApiResponse>;

  /**
   * Creates a new payload in the response.
   * @param responseId The response domain id
   * @param init The payload init options
   * @returns Created payload object.
   */
  addResponsePayload(responseId: string, init: PayloadInit): Promise<ApiPayload>;

  /**
   * Removes a payload from a response object.
   * @param responseId The response domain id
   * @param payloadId The payload domain id.
   */
  removeResponsePayload(responseId: string, payloadId: string): Promise<void>;

  /**
   * Updates a scalar property of a Response.
   * @param id The domain id of the response.
   * @param property The property name to update
   * @param value The new value to set.
   * @returns The updated response
   */
  updateResponseProperty(id: string, property: keyof AMF.model.domain.Response, value: any): Promise<ApiResponse>;

  /**
   * @param responseId The response id to delete
   * @param operationId The id of the parent operation that has the response
   */
  deleteResponse(responseId: string, operationId: string): Promise<void>;

  /**
   * Reads example value from the store.
   * @param id The id of the example to read.
   */
  getExample(id: string): Promise<ApiExample>;

  /**
   * Reads Example data in a bulk operation
   * @param ids The ids to read
   */
  getExamples(ids: string[]): Promise<ApiExample[]>;

  /**
   * Updates a scalar property of an Example.
   * @param id The domain id of the response.
   * @param property The property name to update
   * @param value The new value to set.
   * @returns The updated example
   */
  updateExampleProperty(id: string, property: keyof AMF.model.domain.Example, value: any): Promise<ApiExample>;

  /**
   * Reads Payload data from the graph
   * @param id The domain id of the payload
   */
  getPayload(id: string): Promise<ApiPayload>;

  /**
   * Reads Payload data in a bulk operation
   * @param ids The ids to read
   */
  getPayloads(ids: string[]): Promise<ApiPayload[]>;

  /**
   * Adds an example to a Payload
   * @param id The if of the Payload to add the example to
   * @param init The example init options
   */
  addPayloadExample(id: string, init: ExampleInit): Promise<ApiExample>;

  /**
   * Removes an example from the Payload.
   * @param payloadId The domain id of the Payload
   * @param exampleId The domain id of the Example to remove.
   */
  removePayloadExample(payloadId: string, exampleId: string): Promise<void>;

  /**
   * Updates a scalar property of a Payload.
   * @param id The domain id of the payload.
   * @param property The property name to update
   * @param value The new value to set.
   * @returns The updated Payload
   */
  updatePayloadProperty(id: string, property: keyof AMF.model.domain.Payload, value: any): Promise<ApiPayload>;

  /**
   * Reads the TemplatedLink object from the graph.
   * @param id The domain id of the TemplatedLink
   */
  getTemplatedLink(id: string): Promise<ApiTemplatedLink>;

  /**
   * Lists the custom domain properties (domain extensions, annotations) definitions for the API.
   */
  listCustomDomainProperties(): Promise<ApiCustomDomainPropertyListItem[]>;

  /**
   * Creates a new type in the API.
   * @param init The Shape init options.
   */
  addCustomDomainProperty(init?: CustomDomainPropertyInit): Promise<ApiCustomDomainProperty>;

  /**
   * Reads the CustomDomainProperty object from the graph.
   * This is a definition of domain extension (RAML annotation).
   * 
   * @param id The domain id of the CustomDomainProperty
   */
  getCustomDomainProperty(id: string): Promise<ApiCustomDomainProperty>;

  /**
   * Removes a CustomDomainProperty from the API.
   * @param id The domain id of the CustomDomainProperty to remove
   * @returns True when the property was found and removed.
   */
  deleteCustomDomainProperty(id: string): Promise<boolean>;

  /**
   * Updates a scalar property of a CustomDomainProperty.
   * @param id The domain id of the object.
   * @param property The property name to update
   * @param value The new value to set.
   * @returns The updated custom domain property
   */
  updateCustomDomainProperty(id: string, property: keyof AMF.model.domain.CustomDomainProperty, value: any): Promise<ApiCustomDomainProperty>;

  /**
   * Reads the DomainExtension object from the graph.
   * This is a definition of applied to an object domain extension (RAML annotation).
   * 
   * @param id The domain id of the CustomDomainProperty
   */
  getDomainExtension(id: string): Promise<ApiDomainExtension>;

  /**
   * Reads the Request object from the graph.
   * @param id The domain id of the Request
   */
  getRequest(id: string): Promise<ApiRequest>;

  /**
   * @param operationId The operation domain id
   * @param init The request init options. Optional.
   * @returns The domain id of the created request
   */
  addRequest(operationId: string, init?: OperationRequestInit): Promise<ApiRequest>;

  /**
   * Adds a header to the request.
   * @param requestId The request domain id
   * @param init The Parameter init options.
   */
  addRequestHeader(requestId: string, init: ParameterInit): Promise<ApiParameter>;

  /**
   * Removes a header from a request
   * @param requestId The request id to remove the header from
   * @param headerId The header id to remove.
   * @returns Updated request
   */
  removeRequestHeader(requestId: string, headerId: string): Promise<ApiRequest>;

  /**
   * Adds a query parameter to the request.
   * @param requestId The request domain id
   * @param init The Parameter init options.
   */
  addRequestQueryParameter(requestId: string, init: ParameterInit): Promise<ApiParameter>;

  /**
   * Removes a query parameter from a request
   * @param requestId The request id to remove the parameter from
   * @param paramId The parameter id to remove.
   * @returns Updated request
   */
  removeRequestQueryParameter(requestId: string, paramId: string): Promise<ApiRequest>;

  /**
   * Adds a cookie to the request.
   * @param requestId The request domain id
   * @param init The Parameter init options.
   */
  addRequestCookieParameter(requestId: string, init: ParameterInit): Promise<ApiParameter>;

  /**
   * Removes a cookie parameter from a request
   * @param requestId The request id to remove the parameter from
   * @param paramId The parameter id to remove.
   * @returns Updated request
   */
  removeRequestCookieParameter(requestId: string, paramId: string): Promise<ApiRequest>;

  /**
   * Creates a new payload in the request.
   * @param requestId The request domain id
   * @param init The payload init options
   * @returns Created payload object.
   */
  addRequestPayload(requestId: string, init: PayloadInit): Promise<ApiPayload>;

  /**
   * Removes a payload from a request object.
   * @param requestId The request domain id
   * @param payloadId The payload domain id.
   */
  removeRequestPayload(requestId: string, payloadId: string): Promise<void>;

  /**
   * @param requestId The request id to delete
   * @param operationId The id of the parent operation that has the request
   */
  deleteRequest(requestId: string, operationId: string): Promise<void>

  /**
   * Updates a scalar property of a Request.
   * @param id The domain id of the request.
   * @param property The property name to update
   * @param value The new value to set.
   * @returns The updated request
   */
  updateRequestProperty(id: string, property: keyof Request, value: any): Promise<ApiRequest>;

  fillParameter(param: AMF.model.domain.Parameter, init: ParameterInit): void;

  /**
   * Reads the info about a parameter.
   * @param id The domain id of the parameter
   */
  getParameter(id: string): Promise<ApiParameter>;
  /**
   * Reads the list of Parameters in a single call.
   * @param ids
   */
  getParameters(ids: string[]): Promise<ApiParameter[]>;

  /**
   * Updates a scalar property of a Parameter.
   * @param id The domain id of the parameter.
   * @param property The property name to update
   * @param value The new value to set.
   * @returns The updated Parameter
   */
  updateParameterProperty(id: string, property: keyof AMF.model.domain.Parameter, value: any): Promise<ApiParameter>;

  /**
   * Adds an example to a Parameter
   * @param id The if of the Parameter to add the example to
   * @param init The example init options
   */
  addParameterExample(id: string, init: ExampleInit): Promise<ApiExample>;

  /**
   * Removes an example from the parameter.
   * @param paramId The domain id of the Parameter
   * @param exampleId The domain id of the Example to remove.
   */
  removeParameterExample(paramId: string, exampleId: string): Promise<void>;

  /**
   * Fills example properties from the init object
   * @param  The example to add properties to
   * @param init The example init options
   */
  fillExample(example: AMF.model.domain.Example, init: ExampleInit): void;

  /**
   * Lists the documentation definitions for the API.
   */
  listDocumentations(): Promise<ApiDocumentation[]>;

  /**
   * Adds a new documentation object to the graph.
   * @param init The initialization properties
   * @returns The created documentation.
   */
  addDocumentation(init: DocumentationInit): Promise<ApiDocumentation>;

  /**
   * Reads the documentation object from the store.
   * @param id The domain id of the documentation object
   * @returns The read documentation.
   */
  getDocumentation(id: string): Promise<ApiDocumentation | undefined>;

  /**
   * Updates a scalar property of a documentation.
   * @param id The domain id of the documentation.
   * @param property The property name to update
   * @param value The new value to set.
   */
  updateDocumentationProperty(id: string, property: keyof AMF.model.domain.CreativeWork, value: any): Promise<ApiDocumentation>;

  /**
   * Removes the documentation from the graph.
   * @param id The domain id of the documentation object
   */
  deleteDocumentation(id: string): Promise<void>;

  /**
   * Lists the type (schema) definitions for the API.
   */
  listTypes(): Promise<ApiNodeShapeListItem[]>;
  /**
   * 
   * @param id The domain id of the API type (schema).
   */
  getType(id: string): Promise<ApiShapeUnion>;
  /**
   * Reads types data in a bulk operation
   * @param ids The ids to read
   */
  getTypes(ids: string[]): Promise<ApiShapeUnion[]>;
  /**
   * Creates a new type in the API.
   * @param init The Shape init options.
   */
  buildShape(init?: ShapeInit): AMF.model.domain.Shape;
  /**
   * Creates a new type in the API.
   * @param init The Shape init options.
   */
  addType(init?: ShapeInit): Promise<ApiShapeUnion>;

  /**
   * Removes a type for a given domain id.
   * @param id The type domain id.
   * @returns True when the type has been found and removed.
   */
  deleteType(id: string): Promise<boolean>;

  /**
   * Updates a scalar property of a type.
   * @param id The domain id of the type.
   * @param property The property name to update
   * @param value The new value to set.
   */
  updateTypeProperty(id: string, property: string, value: any): Promise<ApiShapeUnion>;

  /**
   * Updates a scalar property of a scalar type.
   * @param shape The domain id of the type.
   * @param property The property name to update
   * @param  value The new value to set.
   * @returns `true` when the shape has been updated.
   */
  updateAnyShapeProperty(shape: AMF.model.domain.AnyShape, property: string, value: any): boolean;

  /**
   * Updates a scalar property of a scalar type.
   * @param scalar The shape to update
   * @param property The property name to update
   * @param value The new value to set.
   */
  updateScalarShapeProperty(scalar: AMF.model.domain.ScalarShape, property: string, value: any): void;

  /**
   * Updates a scalar property of a Node type.
   * @param shape The shape to update
   * @param property The property name to update
   * @param value The new value to set.
   */
  updateNodeShapeProperty(shape: AMF.model.domain.NodeShape, property: string, value: any): void;

  /**
   * Updates a scalar property of a file type.
   * @param shape The shape to update
   * @param property The property name to update
   * @param value The new value to set.
   */
  updateFileShapeProperty(shape: AMF.model.domain.FileShape, property: string, value: any): void;

  /**
   * Updates a scalar property of a schema type.
   * @param shape The shape to update
   * @param property The property name to update
   * @param value The new value to set.
   */
  updateSchemaShapeProperty(shape: AMF.model.domain.SchemaShape, property: string, value: any): void;

  /**
   * Updates a scalar property of a tuple type.
   * @param shape The shape to update
   * @param property The property name to update
   * @param value The new value to set.
   */
  updateTupleShapeProperty(shape: AMF.model.domain.TupleShape, property: string, value: any): void;

  /**
   * Reads the definition of a property of a NodeShape.
   * @param id The domain id of the property.
   * @throws An error when the type couldn't be find.
   */
  getPropertyShape(id: string): ApiPropertyShape

  /**
   * Creates a new property on a type.
   * @param id The id of the type to add the property to.
   * @param init The property initialization configuration.
   * @throws An error when the type couldn't be find.
   * @throws An error when the type is not a NodeShape.
   */
  addPropertyShape(id: string, init: PropertyShapeInit): ApiPropertyShape;

  /**
   * Removes a property from a node shape.
   * @param typeId The domain id of a parent type
   * @param propertyId The id of the property to remove.
   * @throws An error when the type couldn't be find.
   */
  deletePropertyShape(typeId: string, propertyId: string): void;

  /**
   * Updates a scalar property of a property of a NodeShape.
   * @param parent The domain id of the parent type.
   * @param id The domain id of the type.
   * @param property The property name to update
   * @param value The new value to set.
   */
  updatePropertyShapeProperty(parent: string, id: string, property: keyof AMF.model.domain.PropertyShape, value: any): ApiPropertyShape;

  /**
   * Lists the security definitions for the API.
   */
  listSecurity(): Promise<ApiSecuritySchemeListItem[]>;

  /**
   * Reads the SecurityRequirement object from the graph.
   * @param id The domain id of the SecurityRequirement
   */
  getSecurityRequirement(id: string): Promise<ApiSecurityRequirement>;

  /**
   * Reads the ParametrizedSecurityScheme object from the graph.
   * @param id The domain id of the ParametrizedSecurityScheme
   */
  getParametrizedSecurityScheme(id: string): Promise<ApiParametrizedSecurityScheme>;

  /**
   * Reads the SecurityScheme object from the graph.
   * @param id The domain id of the SecurityScheme
   */
  getSecurityScheme(id: string): Promise<ApiSecurityScheme>;

  /**
   * @param id The domain id of the security settings.
   */
  getSecuritySettings(id: string): Promise<ApiSecuritySettingsUnion>;

  /**
   * Reads the OAuth2Flow object from the graph.
   * @param id The domain id of the flow to read.
   */
  getOAuthFlow(id: string): Promise<ApiSecurityOAuth2Flow>;

  /**
   * Reads the OAuth2Flow object from the graph.
   * @param id The domain id of the flow to read.
   */
  getOAuthScope(id: string): Promise<ApiSecurityScope>;
}
