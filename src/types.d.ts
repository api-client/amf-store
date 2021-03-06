export interface WorkerMessage {
  /**
   * The type of the message. It identifies an operation performed by the worker.
   */
  type: string;
  /**
   * The id of the message to report back.
   */
  id: number;
  /**
   * The list of arguments to be passed to the operation.
   */
  arguments: any[];
}

export interface WorkerResponse {
  /**
   * The id of the request message.
   */
  id: number;
  /**
   * The computation result.
   */
  result: any;
  /**
   * Whether there was an error when computing the value
   */
  error?: boolean;
  /**
   * Error message.
   */
  message?: string;
  stack?: string;
}

export declare interface AmfWorkerStoreInit {
  /**
   * The path to the web worker location.
   */
  workerLocation?: string;
  /**
   * When set this function is used to create an instance of the web worker.
   * It has to return an instance of a WebWorker.
   */
  createWebWorker?: () => Worker;
  /**
   * The location of the `amd-bundle.js` file.
   * When not set it imports the file from the root location.
   */
  amfLocation?: string;
}

export declare interface AmfHttpWorkerInit {
  /**
   * The API base URI.
   * e.g. https://api.domain.com/v1/
   */
  baseUri: string;
  /**
   * The AMF store process to use.
   * If not set the application must call `init()` to initialize new
   * session.
   */
  pid?: string;
  /**
   * The events target for the DOM events. 
   * @default Window
   */
  eventsTarget?: EventTarget;
}

export interface WorkerQueueItem {
  resolver: Function;
  rejecter: Function;
}

export interface ApiResource {
  /**
   * The API file content.
   */
  contents: string;
  /**
   * The full path of the file beginning of the API project root directory.
   */
  path: string;
}

export declare interface ProxyStatusResponse {
  kind: 'AMF#SessionStatus',
  status: 'closed' | 'created' | 'active';
  /**
   * The id of the created server process.
   */
  id: string;
  timeout?: number;
}

export declare interface ProxyRequest {
  /**
   * The id of the server process.
   */
  id: string;
  /**
   * The function to call in the proxy.
   */
  type: string;
  /**
   * The function arguments.
   */
  args?: any[];
}

export declare interface ProxyResponse {
  kind: 'AMF#ProxyResponse',
  /**
   * The id of the server process.
   */
  id: string;
  /**
   * The number of milliseconds after which the server destroys the instance of the API process.
   * All unsaved information will be lost. The application should use the `ping()` function to keep
   * the process alive.
   */
  timeout: number;
  result?: any;
}

export declare interface ProxyErrorResponse {
  error: boolean;
  message: string;
}

export type RAMLVendors = 'RAML 0.8' | 'RAML 1.0';
export type OASVendors = 'OAS 2.0' | 'OAS 3.0';
export type AmfVendors = 'AMF Graph' | 'JSON Schema';
export type AsyncVendors = 'ASYNC 2.0';
export type ParserVendors = RAMLVendors | OASVendors | AmfVendors | AsyncVendors;

export type RAMLMediaTypes = 'application/raml08+yaml' | 'application/raml10+yaml';
export type OASMediaTypes = 'application/oas20' | 'application/oas20+yaml' | 'application/oas20+json' | 'application/openapi30' | 'application/openapi30+yaml' | 'application/openapi30+json';
export type AsyncMediaTypes = 'application/asyncapi20' | 'application/asyncapi20+yaml' | 'application/asyncapi20+json';
export type AmfMediaTypes = 'application/amf-payload' | 'application/amf-payload+yaml' | 'application/amf-payload+json';
export type GraphMediaTypes = 'application/graph' | 'application/schema+json';

export type ParserMediaTypes = RAMLMediaTypes | OASMediaTypes | AsyncMediaTypes | AmfMediaTypes | GraphMediaTypes;


export declare interface ContentFile {
  lastModified: number;
  name: string;
  type: string;
  content: string;
  size: number;
}

export declare interface ImportFile {
  label: string;
  ext: string | string[];
}

export declare interface ApiSearchTypeResult {
  /**
   * API type
   */
  type: ParserVendors;
  /**
   * File media type
   */
  contentType: ParserMediaTypes;
}

interface ApiDomainProperty {
  id: string;
  types: string[];
  customDomainProperties: ApiDomainExtension[];
}

export interface ApiInit {
  name?: string;
  description?: string;
  schemes?: string[];
  accepts?: string[];
  contentType?: string[];
  version?: string;
  termsOfService?: string;
}

export interface ApiServerInit {
  url: string;
  description?: string;
  /**
   * The names of variables. This can only be used to create new (empty) variables.
   */
  variables?: string[];
}

export interface EndPointInit {
  description?: string;
  name?: string;
  summary?: string;
  // relativePath?: string;
  path: string;
}

export interface OperationInit {
  method: string;
  name?: string;
  description?: string;
  summary?: string;
  deprecated?: boolean;
  schemes?: string[];
  accepts?: string[];
  contentType?: string[];
}

export interface OperationRequestInit {
  description?: string;
  required?: boolean;
  /**
   * List of header names (parameter names) to create
   */
  headers?: string[];
  /**
   * List of mediaTypes of the payloads to create.
   */
  payloads?: string[];
  /**
   * List of query parameter names to be set as query parameters.
   */
  queryParameters?: string[];
  /**
   * List of URI parameter names to be set as URI parameters.
   */
  uriParameters?: string[];
  /**
   * List of cookie names to be set as Cookie parameters.
   */
  cookieParameters?: string[];
}

export interface OperationResponseInit {
  name: string;
  description?: string;
  statusCode?: string;
  /**
   * List of header names (parameter names) to create
   */
  headers?: string[];
  /**
   * List of mediaTypes of the payloads to create.
   */
  payloads?: string[];
}

export type ScalarDataTypes = 'string' | 'base64Binary' | 'boolean' | 'date' | 'dateTime' | 'double' | 'float' | 'integer' | 'long' | 'number' | 'time';

export interface ParameterInit {
  /**
   * The parameter name
   */
  name: string;
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: string;
  explode?: boolean;
  allowReserved?: boolean;
  binding?: string;
  /**
   * When set it adds a scalar schema definition to the parameter 
   * with the same name as the parameter.
   */
  dataType?: ScalarDataTypes;
}

export interface PayloadInit {
  /**
   * The payload media type
   */
  mediaType: string;
  /**
   * The payload name
   */
  name?: string;
}

export interface ExampleInit {
  /**
   * The name name of the example
   */
  name: string;
  displayName?: string;
  description?: string;
  value?: string;
  strict?: boolean;
  mediaType?: string;
}

export interface ApiEndPointListItem {
  /**
   * The domain id of the endpoint.
   * It may be undefined when the endpoint is created "abstract" endpoint vor the visualization.
   */
  id?: string;
  path: string;
  name?: string;
}

export interface ApiEndPointWithOperationsListItem extends ApiEndPointListItem {
  operations: ApiOperationListItem[];
}

export interface ApiEndpointsTreeItem extends ApiEndPointWithOperationsListItem {
  label: string;
  indent: number;
  hasShortPath?: boolean;
  hasChildren?: boolean;
}

export interface ApiEndPoint extends ApiDomainProperty {
  description?: string;
  name?: string;
  summary?: string;
  relativePath?: string;
  path: string;
  operations: string[];
  parameters: string[];
  payloads: string[];
  servers: string[];
  security: string[];
}

export interface ApiOperationBase extends ApiDomainProperty {
  method: string;
  name?: string;
  description?: string;
  summary?: string;
  deprecated: boolean;
  schemes?: string[];
  accepts?: string[];
  contentType?: string[];
  operationId?: string;
}

export interface ApiOperation extends ApiOperationBase {
  documentation?: string;
  request?: string;
  responses: string[];
  security: string[];
  callbacks: string[];
  servers: string[];
}

export interface ApiOperationRecursive extends ApiOperationBase {
  documentation?: ApiDocumentation;
  request?: ApiRequestRecursive;
  responses: ApiResponseRecursive[];
  security: ApiSecurityRequirementRecursive[];
  callbacks: ApiCallback[];
  servers: ApiServerRecursive[];
}

export interface ApiOperationListItem {
  id: string;
  method: string;
  name?: string;
}

export interface ApiServerBase extends ApiDomainProperty {
  url: string;
  description?: string;
}

export interface ApiServer extends ApiServerBase {
  variables: string[];
}

export interface ApiServerRecursive extends ApiServerBase {
  variables: ApiParameterRecursive[];
}

export interface ApiParameterBase extends ApiDomainProperty {
  name: string;
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: string;
  explode?: boolean;
  allowReserved?: boolean;
  binding?: string;
}

export interface ApiParameter extends ApiParameterBase {
  schema?: string;
  payloads: string[];
  examples: string[];
}

export interface ApiParameterRecursive extends ApiParameterBase {
  schema?: ApiShapeUnion;
  payloads: ApiPayloadRecursive[];
  examples: ApiExample[];
}

export interface ApiExample extends ApiDomainProperty {
  name?: string;
  displayName?: string;
  description?: string;
  value?: string;
  structuredValue?: ApiDataNodeUnion;
  strict: boolean;
  mediaType?: string;
}

export interface ApiPayloadBase extends ApiDomainProperty {
  name?: string;
  mediaType?: string;
}

export interface ApiPayload extends ApiPayloadBase {
  schema?: string;
  examples: string[];
  encoding: string[];
}

export interface ApiPayloadRecursive extends ApiPayloadBase {
  schema?: ApiShapeUnion;
  examples: ApiExample[];
  encoding: ApiEncodingRecursive[];
}

export interface ApiResponseBase extends ApiDomainProperty {
  name?: string;
  description?: string;
  statusCode?: string;
}

export interface ApiResponse extends ApiResponseBase {
  headers: string[];
  payloads: string[];
  examples: string[];
  links: string[];
}

export interface ApiResponseRecursive extends ApiResponseBase {
  headers: ApiParameterRecursive[];
  payloads: ApiPayloadRecursive[];
  examples: ApiExample[];
  links: ApiTemplatedLinkRecursive[];
}

export interface ApiTemplatedLinkBase extends ApiDomainProperty {
  name?: string;
  description?: string;
  template?: string;
  operationId?: string;
  requestBody?: string;
}

export interface ApiTemplatedLink extends ApiTemplatedLinkBase {
  mapping?: string[];
  server?: string;
}

export interface ApiTemplatedLinkRecursive extends ApiTemplatedLinkBase {
  mapping?: ApiIriTemplateMapping[];
  server?: ApiServerRecursive;
}

export interface ApiIriTemplateMapping extends ApiDomainProperty {
  templateVariable?: string;
  linkExpression?: string;
}

export interface ApiSecurityRequirementBase extends ApiDomainProperty {
  name?: string;
}
export interface ApiSecurityRequirement extends ApiSecurityRequirementBase {
  schemes: ApiParametrizedSecurityScheme[];
}
export interface ApiSecurityRequirementRecursive extends ApiSecurityRequirementBase {
  schemes: ApiParametrizedSecuritySchemeRecursive[];
}

export interface ApiParametrizedSecuritySchemeBase extends ApiDomainProperty {
  name?: string;
  settings?: ApiSecuritySettingsUnion;
}
export interface ApiParametrizedSecurityScheme extends ApiParametrizedSecuritySchemeBase {
  scheme?: ApiSecurityScheme;
}
export interface ApiParametrizedSecuritySchemeRecursive extends ApiParametrizedSecuritySchemeBase {
  scheme?: ApiSecuritySchemeRecursive;
}

export interface ApiSecuritySchemeBase extends ApiDomainProperty {
  name?: string;
  type?: string;
  displayName?: string;
  description?: string;
  settings?: ApiSecuritySettingsUnion;
}

export interface ApiSecurityScheme extends ApiSecuritySchemeBase {
  headers: string[];
  queryParameters: string[];
  responses: string[];
  queryString?: string;
}

export interface ApiSecuritySchemeRecursive extends ApiSecuritySchemeBase {
  headers: ApiParameterRecursive[];
  queryParameters: ApiParameterRecursive[];
  responses: ApiResponseRecursive[];
  queryString?: ApiShapeUnion;
}

export interface ApiSecuritySettings extends ApiDomainProperty {
  additionalProperties?: ApiDataNodeUnion;
}

export interface ApiSecurityOAuth1Settings extends ApiSecuritySettings {
  requestTokenUri?: string;
  authorizationUri?: string;
  tokenCredentialsUri?: string;
  signatures: string[];
}

export interface ApiSecurityOAuth2Settings extends ApiSecuritySettings {
  authorizationGrants: string[];
  flows: ApiSecurityOAuth2Flow[];
}

export interface ApiSecurityApiKeySettings extends ApiSecuritySettings {
  name?: string;
  in?: string;
}

export interface ApiSecurityHttpSettings extends ApiSecuritySettings {
  scheme?: string;
  bearerFormat?: string;
}

export interface ApiSecurityOpenIdConnectSettings extends ApiSecuritySettings {
  url?: string;
}

export type ApiSecuritySettingsUnion = ApiSecuritySettings | ApiSecurityOAuth1Settings | ApiSecurityOAuth2Settings | ApiSecurityApiKeySettings | ApiSecurityHttpSettings | ApiSecurityOpenIdConnectSettings;

export interface ApiSecurityOAuth2Flow {
  authorizationUri?: string;
  accessTokenUri?: string;
  flow?: string;
  refreshUri?: string;
  scopes: ApiSecurityScope[];
  customDomainProperties: ApiDomainExtension[];
}

export interface ApiSecurityScope {
  name?: string;
  description?: string;
  customDomainProperties: ApiDomainExtension[];
}

export interface ApiRequestBase extends ApiDomainProperty {
  description?: string;
  required?: boolean;
}

export interface ApiRequest extends ApiRequestBase {
  queryParameters: string[];
  headers: string[];
  payloads: string[];
  queryString?: string;
  uriParameters: string[];
  cookieParameters: string[];
}

export interface ApiRequestRecursive extends ApiRequestBase {
  queryParameters: ApiParameterRecursive[];
  headers: ApiParameterRecursive[];
  uriParameters: ApiParameterRecursive[];
  cookieParameters: ApiParameterRecursive[];
  queryString?: ApiShapeUnion;
  payloads: ApiPayloadRecursive[];
}

export interface ApiCallback extends ApiDomainProperty {
  name?: string;
  expression?: string;
  endpoint?: ApiEndPoint;
}

/**
 * The definition of the domain extension
 */
export interface ApiCustomDomainExtension extends ApiDomainProperty {
  name?: string;
  displayName?: string;
  description?: string;
  domain: string[];
  schema?: ApiShapeUnion;
}

export interface CustomDomainPropertyInit {
  /**
   * The custom property (annotation) name
   */
  name?: string;
  /**
   * The custom property (annotation) display name
   */
  displayName?: string;
  /**
   * The custom property (annotation) description
   */
  description?: string;
}

/**
 * Applies to an object domain extension
 */
export interface ApiDomainExtension extends ApiDomainProperty {
  name?: string;
  definedBy?: ApiCustomDomainExtension;
  extension?: ApiDataNodeUnion;
}

export interface ApiCustomDomainExtensionListItem {
  id: string;
  name?: string;
  displayName?: string;
}

export interface ApiSecuritySchemeListItem {
  id: string;
  type: string;
  name?: string;
  displayName?: string;
}

export interface ApiDocumentation extends ApiDomainProperty {
  url?: string;
  description?: string;
  title?: string;
}

export interface DocumentationInit {
  title: string;
  /**
   * The documentation content. Not used with the `url`.
   */
  description?: string;
  url?: string;
}

export declare interface ApiNodeShapeListItem {
  id: string;
  name?: string;
  displayName?: string;
}

export interface SerializedApi extends ApiDomainProperty {
  isAsyncApi: boolean;
  isWebApi: boolean;
  name?: string;
  description?: string;
  identifier?: string;
  schemes: string[];
  endPoints: string[];
  accepts: string[];
  contentType: string[];
  version?: string;
  termsOfService?: string;
  provider?: string;
  license?: string;
  documentations: string[];
  servers: string[];
  security: string[];
}

export interface ShapeInit {
  /**
   * The AMF type. By default it is AnyType
   */
  type?: string;
  /**
   * The schema (type) name
   */
  name?: string;
  /**
   * The schema (type) display name
   */
  displayName?: string;
  description?: string;
  readOnly?: boolean;
  writeOnly?: boolean;
}

export type ApiShapeUnion = ApiScalarShape | ApiNodeShape | ApiUnionShape | ApiFileShape | ApiSchemaShape | ApiAnyShape | ApiArrayShape | ApiTupleShape | ApiRecursiveShape;

export interface ApiShape extends ApiDomainProperty {
  values: ApiDataNodeUnion[];
  inherits: ApiShapeUnion[];
  or: ApiShapeUnion[];
  and: ApiShapeUnion[];
  xone: ApiShapeUnion[];
  name?: string;
  displayName?: string;
  description?: string;
  defaultValueStr?: string;
  deprecated?: boolean;
  readOnly?: boolean;
  writeOnly?: boolean;
  defaultValue?: ApiDataNodeUnion;
  not?: ApiShapeUnion;
  /**
   * A label that appeared on a link.
   */
  linkLabel?: string;
}

export interface ApiPropertyShape extends ApiShape {
  path?: string;
  range?: ApiShapeUnion;
  minCount?: number;
  maxCount?: number;
  patternName?: string;
}

export interface ApiAnyShape extends ApiShape {
  documentation?: ApiDocumentation;
  xmlSerialization: ApiXMLSerializer;
  examples: ApiExample[];
}

export interface ApiNodeShape extends ApiAnyShape {
  minProperties?: number;
  maxProperties?: number;
  closed?: boolean;
  customShapeProperties: string[];
  customShapePropertyDefinitions: string[];
  discriminator?: string;
  discriminatorValue?: string;
  properties: ApiPropertyShape[];
  dependencies: string[];
}

export interface ApiXMLSerializer extends ApiDomainProperty {
  attribute?: boolean;
  wrapped?: boolean;
  name?: string;
  namespace?: string;
  prefix?: string;
}

export interface ApiScalarShape extends ApiAnyShape {
  dataType?: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: boolean;
  exclusiveMaximum?: boolean;
  format?: string;
  multipleOf?: number;
}

export interface ApiFileShape extends ApiAnyShape {
  fileTypes?: string[];
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: boolean;
  exclusiveMaximum?: boolean;
  format?: string;
  multipleOf?: number;
}

export interface ApiSchemaShape extends ApiAnyShape {
  mediaType?: string;
  raw?: string;
}

export interface ApiUnionShape extends ApiAnyShape {
  anyOf: ApiShapeUnion[];
}

export interface ApiDataArrangeShape extends ApiAnyShape {
  minItems?: number;
  maxItems?: number;
  uniqueItems?: boolean;
}

export interface ApiArrayShape extends ApiDataArrangeShape {
  items?: ApiShapeUnion;
}

export interface ApiTupleShape extends ApiDataArrangeShape {
  items: ApiShapeUnion[];
  additionalItems?: string;
}

export interface ApiRecursiveShape extends ApiShape {
  fixPoint: string;
}

export interface ApiDataNode extends ApiDomainProperty {
  name?: string;
}

export interface ApiObjectNode extends ApiDataNode {
  properties: { [key: string]: ApiDataNodeUnion };
}

export interface ApiScalarNode extends ApiDataNode {
  value?: string;
  dataType?: string;
}

export interface ApiArrayNode extends ApiDataNode {
  members: ApiDataNodeUnion[];
}

export type ApiDataNodeUnion = ApiDataNode | ApiObjectNode | ApiScalarNode | ApiArrayNode;

export interface PropertyShapeInit {
  name: string;
  displayName?: string;
  description?: string;
  defaultValueStr?: string;
  patternName?: string;
  readOnly?: boolean;
  writeOnly?: boolean;
  deprecated?: boolean;
  minCount?: number;
  maxCount?: number;
  range?: ShapeInit;
}

export interface ApiEncodingBase extends ApiDomainProperty {
  propertyName?: string;
  contentType?: string;
  style?: string;
  explode?: boolean;
  allowReserved?: boolean;
}

export interface ApiEncoding extends ApiEncodingBase {
  headers: string[];
}

export interface ApiEncodingRecursive extends ApiEncodingBase {
  headers: ApiParameterRecursive[];
}
