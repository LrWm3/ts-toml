import { MapTypeName, ParseKeyValueLine, Split, Trim, TrimLeft, TrimRight, Whitespace } from './parsing-utils';
import { DefaultTypeNameMapping } from './type-mapping';

// Helper type to build a nested object from an array of keys and a value
export type BuildNestedObject<Keys extends any[], Value> = Keys extends [infer First, ...infer Rest]
  ? { [K in First & string]: BuildNestedObject<Rest, Value> }
  : Value;

// Corrected Merge type that correctly merges nested objects
export type Merge<A, B> = A extends object
  ? B extends object
    ? {
        [K in keyof A | keyof B]: K extends keyof A
          ? K extends keyof B
            ? Merge<A[K], B[K]>
            : A[K]
          : K extends keyof B
          ? B[K]
          : never;
      }
    : A
  : B;

// Helper type to build key-value pairs from a line
export type BuildKeyValueFromLine<
  TypeMapping,
  Line extends string,
  P extends any[]
> =
  ParseKeyValueLine<Line> extends infer ParsedLine
    ? ParsedLine extends { key: infer Key, isArray: infer IsArray, value: infer Value }
      ? IsArray extends true
        ? BuildNestedObject<[...P, Key & string], Array<MapTypeName<TypeMapping, Value & string>>>
        : BuildNestedObject<[...P, Key & string], MapTypeName<TypeMapping, Value & string>>
      : {}
    : {};

// Main type to convert TOML string to a TypeScript type
export type TomlStringToType<
  TypeMapping,
  T extends string,
  P extends any[] = []
> = T extends `${infer Line}\n${infer Rest}`
  ? Trim<Line> extends '' | `#${string}`
    ? TomlStringToType<TypeMapping, Rest, P> // Skip empty lines and comments
    : Trim<Line> extends `[${infer Section}]`
      ? TomlStringToType<TypeMapping, Rest, [...Split<Trim<Section>, '.'>]> // Update the path with the new section
      : Merge<
          BuildKeyValueFromLine<TypeMapping, Trim<Line>, P>,
          TomlStringToType<TypeMapping, Rest, P>
        >
  : Trim<T> extends '' | `#${string}`
    ? {}
    : BuildKeyValueFromLine<TypeMapping, Trim<T>, P>;
