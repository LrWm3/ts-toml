// src/parsing-utils.ts

// Helper type to split a string by a delimiter
export type Split<S extends string, D extends string> = S extends `${infer Head}${D}${infer Tail}`
  ? [Head, ...Split<Tail, D>]
  : [S];

// Whitespace characters
export type Whitespace = ' ' | '\n' | '\t' | '\r';

// Helper types for trimming whitespace
export type TrimLeft<S extends string> = S extends `${Whitespace}${infer Rest}` ? TrimLeft<Rest> : S;
export type TrimRight<S extends string> = S extends `${infer Rest}${Whitespace}` ? TrimRight<Rest> : S;
export type Trim<S extends string> = TrimLeft<TrimRight<S>>;

// Map a type name to the actual TypeScript type
export type MapTypeName<TypeMapping, T extends string> = T extends keyof TypeMapping ? TypeMapping[T] : any;

// Helper type to parse a line into key, isArray, and value
export type ParseKeyValueLine<Line extends string> =
  Line extends `${infer Key}[]${Whitespace}=${Whitespace}[${infer Value}]`
    ? { key: Trim<Key>, isArray: true, value: Trim<Value> }
  : Line extends `${infer Key}${Whitespace}=${Whitespace}${infer Value}`
    ? { key: Trim<Key>, isArray: false, value: Trim<Value> }
  : null;

