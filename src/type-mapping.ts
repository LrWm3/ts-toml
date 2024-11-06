// src/type-mapping.ts

// Base type mapping for basic TOML types
export type DefaultTypeNameMapping = {
  string: string;
  number: number;
  boolean: boolean;
  // Add other mappings as needed
};

// Extended type mapping for custom complex types
export type ExtendedTypeNameMapping = {
  string: string;
  number: number;
  boolean: boolean;
  ComplexToml: unknown; // Define ComplexToml as unknown initially, will depend on usage in `examples/`
  // Add more complex or nested mappings as needed
};
