# tomlscript: TypeScript TOML Typing

Have you ever wanted to be able to define typescript types using [TOML](https://toml.io/en/)? Well, now you can!

## Try It Out!

Try out the examples on TypeScript Playground: [TypeScript Playground Link](https://www.typescriptlang.org/play/?ssl=34&ssc=1&pln=42&pc=1#code/FAehAIFEA8EMFsAOAbApuArgZ1gc1cAC4Cei6AwgPZJrQAq1y4AvOA-MgMqEBOAlgDtcDOqVQAeYOHAARVADNYGZIVFkAcglQBZWIkSDcAGingABqemE+hNC3BZehy+DzpWAjPABGqHi74sbVQfP3tvSko0WAEXQjwsAG0AXXtEx34hZOAXRIBjSgF5Plxs6WkMHiZWDOdy8Gt4VEoMQntPUP9cgqKSgDoBVEdUABM+2B5vEdREQgALMvKsVEJrIXtaoVMLAD4AbhzQCBgEFHRsNyIxcE4+GlR2arZGbkzhSjUJUzlFZVUxTRNXT6QwmaQWerWWzuBxOLb1NztLy+Lr1fKFYqlFyVJ6bXBxO7NVpIzrAMz7Q5oNpYO5nR4ANVgyAwqAAXDdaWhHvYAN6mKFodkAIgFqCFYNc+HZABYJT1Mey+fUccKAO7qvoFeDiglNFqEGWmAC+wCNBxyVPAWrO9EYjOZbPAVHuto4vP5NkF4BFnrFErcMol8VwWHZiSF8GIAFpCIwhckJYFgp12YpkMs5RiSorsVU1RqtTrIYT9YGXINhiMc-VpBMpjN5tWa9JlqtDMKAIwABh7RZrJvqA-AJrNhzAbGuAi04HgegMWxIZCg0EIqAE0xGn0BOjnhndLbhuHZeIO0g6KPZ578p-AESiqBi7Lv0QEN+dNse7PftEeN-HAEERhGcBKHmMJZxBIQsFcaDBlGUZTXNACgPAYgWh4EDVQEBoxGg2NXGQZBKFVK0eAfNZcAaRgcLIaDYGgq4l0eT4AHUbDmGBV3XUZgXnSjWEeV5DBEMRJGkTi1w3LctF40FtnLacakPFxrVoexv1QV1kBcZBYF8dMUjSPFslyeRdIAN0oHhFhbAoyJJFEXCZEoBCaAQ2iUt5wWACkjiOWQFEEdBFyGcBVXY8BEjoAB5bQABlkgACjmVZEFDMBYw4Po+EoEA1xAABKcA-P8z5wCnJoZ13Bdrh+JQVGkoFqv48AlVhN5j0PG8rx4S9kWvUxnwfAQn0iF8-wgQDgNAuZwOaujYNQeCRkQnJxwACVQZAyAwkKqIcFAbFcdq928YhjumZA7hsPxGPQThDsIcROHATSuJGaC8SMWRXpXSTPsPHZ7Bet7-vMAASHlBHkMJNtgEYjUhmREahoowjoWA+GQI0IXAAB+SK4ZGb6+lJh6rqejGse+mQdkWMNOGSJCIE27awhC6D5Cshp+HgeA91VOYbqwRBYDyAg9pYoXVxFsWYQAcnARWAB8lYAHQEFX1cILX5bVnh5YOPa6F5uKFCekG-vXAG3iB1hLfe6CzEhqXhdF8WUehsIACUhkIHH8bYU3zfEX3HCB9lOCN64Tbub2ShS57fsdk6hDtm5k7B53UZhjCw-9l3paGd3UADgnY-gePcET-OI5uaOmN5pPQet1PcHTiuzfkSnearxPOB2Xzx2BY69oq4LKAaWbXDyQgMCZCcyE4PJ+FmGiJeuYFGokT5ZKEb66Ez1u8Q7o+PvAABrVA0PkRed0gyjy7EPfcCi1J2RiYhmfAVmdvX-bvAYCxsBWA5U-ajBAt4AAVqgWe4B5A8GoK4bCEweCwHOpQW+V9iB0XXMdcyTIWR3XAAAISAcgEY6hwEjGitA2BT0ADS19oIt3Pp-FI317QsnTkwnBZ9oKJC9hhAAYnwHgjgSakyEeAfOiwCY8kigw8AghwCiPEW0AAZG3ZI7IyHAKoZWWhMDZ6hz9pwwhqAgZDnZFw1A38qA8DIrPCBwQeD4H-vMWAbQ7JONsOdJobjQoVlXNNOhs8sDENcfgcQ-5vokPTv+fhkDjGEFMATEhSTKBhNSfUeRLg0RKJUdgzB4BEmq2KbfEhOjwBKNYdBCppT8k1gJrUq258GkkKac2AmUSJD-kSAwhMpCBnJB2F0ms7J+mDPGdIdkrSU4dJmYHEhIylmXlQOZAazYhyzMabskh39f7s2uPhUW4j0CgKuoMZR7lJ7YO+oEf8jj0HfRiMBAhDpiEAAUJjLF4bYuKQVxCAuuXUtudtTAgvQGC7O0jeFGhSIXN2csjTMCRTLEuCLIbSNsUaZIuNpDyMvtfdkFdxC8J2A8rATy0HEHZLwFk30PkslJU3WxVjTDsihUk2FaMMLwvRcXFFaKeSuwxSi7FfLwC4oJYHBR2DWV3HJdfSlyjqXPLpfApkGZwDMsdGS9lw5OXlWUMgQ5W0-57XwoA4BxLox6vAKLMRnNEHwGOlcjeS49EUP+RY4RrqoViTvi-CU3KwVfVMF8pJ7DsgQukD885vqHSBqhUDMF0iE3LBGFClwBNM2jDDW06C8qSU3NzjU6+VKaXoPZNIgAkuq2lTKLG1qlbYo13TwANuredMFDKCDNkJaQ8hlDqFGPoeIRIpM+hfO+rw8AWjjLfR7eILeAItDiF3s1cxDoF3gsHuM3RI6DEhPHSYqdpNZ0VvOouw8Qy10aA3Vuh+O6WR7pPmM5siodngG-d-XQKirWTx6JsngbQYrxTbvtUBnxl6rzaCFYhglDwiTIEG59fEJSH3DYeCUUawUxrSLG+w2Gi0QxzmEKFRoNaSvLfnHGaSg5KtTUk+WWszAAGJIZ4gY7k54HAhJCFQzvZ+26ZFmPAF8oG45OAXz4IgV6SASDgA9bg4CWo3KEAifURV8BgVBTTWRswiRaNhE4PQnKAg8WyqHcht4wnN2iZfeJiRkVp3kxsJupu5nZ6WdVfLPo8s6bSYgAAVUQCMLxwVp6i3mGFCKYEwEkWWL5woTT2S9KDYO4dwCk0sn9dQQNGHQRMb06m76UmJTZbs8JD4oliv7xc4QCrn7B2td05uwzKc2PgFVpx7jh5ePlHkT+o9uXr62IK-AIrTnMOlc6y1g4QA)

## Usage Examples

Below are examples demonstrating various TOML string configurations and how they translate to TypeScript types.

### Simple tomlscript Example

```typescript
import { TomlStringToType } from '../src/toml-types';
import { DefaultTypeNameMapping } from '../src/type-mapping';

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
  title: "Sample Title",
  age: 30,
  config: {
    url: "https://example.com",
    timeout: 100,
  }
};
```

### Complex TOML Example

```typescript
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
  title: "Complex Title",
  age: 42,
  tags: ["tag1", "tag2"],
  isMember: false,
  config: {
    url: "https://complex.example.com",
    timeout: 500,
    nested: {
      arbdepth: {
        setting: "deep value",
      }
    }
  }
};
```

### Very Complex TOML Example

This example demonstrates extended type mapping, enabling references to other TOML structures.

```typescript
type ExtendedTypeNameMapping = {
  string: string;
  number: number;
  boolean: boolean;
  ComplexToml: ComplexToml; // Allows nested usage of previously defined types
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
  age: 35,
  tags: ["outer-tag1", "outer-tag2"],
  complex: {
    title: "Inner Complex Title",
    age: 28,
    tags: ["inner-tag"],
    isMember: true,
    config: {
      url: "https://inner.example.com",
      timeout: 600,
      nested: {
        arbdepth: {
          setting: "inner setting",
        }
      }
    }
  },
  config: {
    url: "https://outer.example.com",
    timeout: 800,
    nested: {
      arbdepth: {
        setting: "outer setting",
      }
    }
  }
};
```

## Installation

Copy the source files into your project.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or additional features.

## License

This project is licensed under the MIT License.
