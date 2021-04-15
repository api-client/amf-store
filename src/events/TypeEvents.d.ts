import { ApiNodeShapeListItem, ApiShapeUnion, ShapeInit } from '../types';

declare interface ITypeEvents {
  /**
   * Lists the type (schema) definitions for the API.
   * @param target The node on which to dispatch the event
   */
  list(target: EventTarget): Promise<ApiNodeShapeListItem[]>;
  /**
   * Adds a new type (schema) object to the graph.
   * @param target The node on which to dispatch the event
   * @param init The initialization properties
   */
  add(target: EventTarget, init?: ShapeInit): Promise<ApiShapeUnion>;
  /**
   * Reads a type (schema) from the store.
   * @param target The node on which to dispatch the event
   * @param {string} id The id of the document to read.
   * @returns {}
   */
  get(target: EventTarget, id: string): Promise<ApiShapeUnion>;
  /**
   * Updates a scalar property of a type (schema).
   * @param target The node on which to dispatch the event
   * @param {string} id The domain id of the documentation.
   * @param {string} property The property name to update
   * @param {any} value The new value to set.
   * @returns {Promise<void>}
   */
  update(target: EventTarget, id: string, property: string, value: any): Promise<void>;
  /**
   * Removes the type (schema) from the graph.
   * @param target The node on which to dispatch the event
   * @param {string} id The domain id of the documentation object
   * @returns {}
   */
  delete(target: EventTarget, id: string): Promise<void>;
}

export declare const TypeEvents: Readonly<ITypeEvents>;