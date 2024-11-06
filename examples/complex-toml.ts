import { TomlStringToType } from '../src/toml-types';
import { ExtendedTypeNameMapping } from '../src/type-mapping';

// Example usage with complex TOML
export type ComplexToml = TomlStringToType<
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

// Example usage with a nested complex TOML structure
let complexTomlValue: ComplexToml = {
  title: "Sample Title",
  age: 42,
  tags: ["tag1", "tag2"],
  complex: {
    title: "Nested Title",
    age: 23,
    isMember: true,
    tags: ["nested-tag"],
    config: {
      url: "http://example.com",
      timeout: 3000,
      nested: {
        arbdepth: {
          setting: "deep setting"
        }
      }
    }
  },
  config: {
    url: "http://outer.example.com",
    timeout: 1000,
    nested: {
      arbdepth: {
        setting: "outer setting"
      }
    }
  }
};
