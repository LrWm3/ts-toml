# TypeScript TOML Typing

Have you ever wanted to be able to define typescript types using TOML? Well, now you can!

## Try It Out!

Try out the examples on TypeScript Playground: [TypeScript Playground Link](https://www.typescriptlang.org/play/?#code/PTAEBUE8AcFNQHYEMC28VOtAlgg5gFAAuM8AIrAGZICuANkVHAHKqwCymO+oAvKAG8CoUAGciAJ1x4AXGMnSA3MMQ0UAI1gS5CNZonKR6gPbG6sJAjkmzFhIdAhQAQQAmr0MaIALLaAxY0qKgSMEIsLCukQQAvsoETgASsHRwEqAkcBnGYtB02EQh8lI86pBFUfkoBVrEpKAAynkFADwNoLAAHkSwCK7B4iV4ADSgZB3dvf3F0gB8fI0TPX3BAAYAJAK4lH7JSK4xm2SHWwg76eBI2HQxqyoA-KAA2nuuowB0n035RC2X16MyLMALoqORPBrA+JJFJpDKkYKUYzpBQoao8ADu3hqomgSAAxrA6lkAOrYnq4gnwfgAclAdIAPvSADoIRksojsmnMiQ05SZeDgKQoAAyVF+7S6y2mgzmC0lkxWoA2AjJOLxhJO2z8ACVYOJbqBHkLsKLxS09eJ5nIGvz6iaUDrsHhvBKllMBgp8PN+ArpWtNtr0paiCc1RSNbBDcbhU6Xb8Q9bGnasg62u6lbLvQsHWLKL8HXHXW1ZrNoWBONAigLEGxshlfCF8UQaEg6BBSA18VJoIUBcT4JWmLBWGg-qRK9wRhAMzKvXgfTOpR7QABrWCQYyUDtwSfSI07jhcaRPcDA0BySyQcugZKpPw1og5dQ0a4eJCIfU9DzGdQAK1gZtQEoCRjBQEIEBCCQJCQcotzXDdgksd9QAANzbGgiRrAAhV86FcZgv0iAB5f9AN+ABpRDZyQhBICeYFRgANQw2BFyoyBgmXJUniDUAADFsAkcQPk+PiQ1BERHgEZ4KNAXABKE8RQAAMhmfBgTkXC30I8QSLI5sLS-ZjWPmGIwVAFi6Ewm8AGFkQkcjIlAdgtDweBH28JBCnxBzyLoco0AkdywiIn8DKIUQBxctzYBaZxRmwxdnBozwIoeUBsNS38AObFQpMEfKRGKp45IU9dN23FKmQq+DsM00A5O46ZaqqoriuKx4msVFqNzq9qOs6mLgri5xSsYzLxtmAbBovFxxpm4q5G6-0EMqzLFoK7CFtmjqdFgVCtAcDrzL2lwLOwm87zhR8cjxYT4A-fJwnkhAnzW0ZsFEZxoNg0ZkLQ1jooABSQB6OKszCRVwOLoZe5rPSGH0VDh+AEeVQMzj8DiYgYzZw31SMYl4fHyUJqlccx85LNYmJgTuDrpLWuQ0w42ZPu+37IDkSRMNGdDrNgFnhRaSG2NAU65tR1KVT4nHSfVCmSdVMnKU1Km-DF24iqZirhdNFo2Y5n6YO54C21EWB+dY-WUFF0yJYs3Q6DoK7YQfep3pfN81oAWgFzDQDxJTgNA8Cnph6LtPwiHWP4sPUZaFRhz3fBhhRmHUqzEYVGB1KrwYghkZEUHwY3MXE9R+Z0b40vLdcVGddAOvIml9GZL117qY442ubkPiAElOdN63Bf7rH0jFx3ZseIeTdg1LeaJXaD2jgiwtI3LfieT53mB0YONU9S8Am+fIBaIdSFHOKU+PNOacFo-s9LaaV60vD1701xN-Ilod8+fejUNxP3nBNS+LA2Djl3HfacU81LP1foNOQAhJYiGQXEAgCQKxXEgrdUAvkECHQkIUcAxF2AimPvWD8w4uw9j7KQaK4AwJ0AaPOJhw4k4iFvoENOycs7znTiXfOdEGILELoucAMsNbpFRjEVk0jQAhm1gVNMVdUo0nZKsAAxJsbOyihpMJQCwthxgOHcKnKMEMoxgbzCcA0Vc2AqywBQL2coz19QQQ8L5NEvRIpFVti0NR6NVhPAUQ0ci2BjAIDpgzQaxpmGsKGOw0gUCjw8OnFY54u9vitDTOE5skSEDs3pO8GkIJbFgAAKrQFcN5DyjY8Q+FABiAo3gGzwHCBiMQESokDTkK5EanCV6ZQ-rHQW8cwKJ3MdIUYqiYbFJsYI4ZhjjFJNMSk6Z99Mk2MWoggJ4Bq49WCBo0ATJtG6PnPogqKD-EjLfGMzCEzRQw1SanacaYDnWLLJgpwABRToqA8jwBoKIJA7lor2RceYToKycwJJMRwlQFBqD0EYFfNgbylmxJEEQAo5gFjZyKmC6kqgNC1A6l9VyZL0j8BsOYSwRUiBgtEKI-gTxs6giKk8AhlBnSSWKjQCQ7Z+CEo6ritAxgaCFH4LoalmCOrcqibyvA7xwhf3eGDdQURezeH5SIS2RBcU8BFfOFQdxvk-LAP8wF+KQXEuig0U0QLYX8BWYk6QyS4BDORbQBgw5r6YrNYyvFJLRXFWJQsWV+h5UlR5XyoqgrhXH2DRKqVka9C1FWBagg5hCiiCdeYFZYsbQFtgC6wqOKQ1yAAES4qIOYatSziVyAACxLLjbICtAqhU1oxH2943jG0ptgJKograVDmQwZg3N+CwJAphcw4toBIXzvLUISt9ahagFrSGodIhm2gDbSoJleBRDgmrSgSAvsnxGOrYxFQlLnH6DkNQOglt21KudMghNPbt19oxAOsCe7iripHVK1tSyRBqu-N+2amrtU+Fg7tA1RrO3VoAIwAAZsPAZOkVSWk74hYMPLWNA-gYHRX+dKSI-qMUwIWOu4+chs4OCjVoHQGaDAqDpXYawph6X2BUCu6FKy5DCa6CshwTg3A-h8H4AIU4kKhUiNEKd0n3CgE3IKzwGJcEIioS7YwXTuwWFQ9kIx8I4BKdAIw5hw4SStKo1MSIby4VGPdfgT1cUVBOb6DR9FaBA0iGxaR0NpqOrePnQscTC6jFFToEgTQb7WXPA5TGkQTxKAJdQsiPVYhfKOXTXKjqbZnQIDQG9Al85gtF0UEAA)

## Usage Examples

Below are examples demonstrating various TOML string configurations and how they translate to TypeScript types.

### Simple TOML Example

```typescript
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
