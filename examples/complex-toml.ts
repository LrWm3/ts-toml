import { TomlStringToType } from '../src/toml-types';
import { DefaultTypeNameMapping } from '../src/type-mapping';

// Example 1: Simple TOML Structure
type SimpleToml = TomlStringToType<
  DefaultTypeNameMapping,
  `
    title = string
    age = number

    [config]
    url = string
    timeout = number
  `
>;

let simpleTomlValue: SimpleToml = {
  title: "title",
  age: 4,
  config: {
    url: "www.com",
    timeout: 4,
  }
};

// Example 2: Complex TOML Structure with Nested Properties
type ComplexToml = TomlStringToType<
  DefaultTypeNameMapping,
  `
    title = string
    age = number
    tags[] = [string]
    isMember = boolean

    [config]
    url = string
    timeout = number

    [config.nested.arbdepth]
    setting = string
  `
>;

let complexTomlValue: ComplexToml = {
  title: "title",
  age: 4,
  tags: ["my-toml"],
  isMember: false,
  config: {
    url: "www.com",
    timeout: 4,
    nested: {
      arbdepth: {
        setting: "1000",
      }
    }
  }
};

// Example 3: Very Complex TOML Structure with Type Mapping for Nested Types
type ExtendedTypeNameMapping = {
  string: string;
  number: number;
  boolean: boolean;
  ComplexToml: ComplexToml;
  // Add other mappings as needed
};

type VeryComplexToml = TomlStringToType<
  ExtendedTypeNameMapping,
  `
    title = string
    age = number
    complex = ComplexToml
    tags[] = [string]

    [config]
    url = string
    timeout = number

    [config.nested.arbdepth]
    setting = string
  `
>;

let veryComplexTomlValue: VeryComplexToml = {
  title: "Very Complex Title",
  age: 30,
  tags: ["tag1", "tag2"],
  complex: {
    title: "Nested Complex Title",
    age: 25,
    tags: ["nested-tag"],
    isMember: true,
    config: {
      url: "http://nested-url.com",
      timeout: 5000,
      nested: {
        arbdepth: {
          setting: "nested-setting"
        }
      }
    }
  },
  config: {
    url: "http://outer-url.com",
    timeout: 1000,
    nested: {
      arbdepth: {
        setting: "outer-setting"
      }
    }
  }
};
