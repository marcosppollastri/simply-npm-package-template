<!-- This is a sample README.md with the current info about the usage of the template. Modify it accordly to fit the needs of your library -->

# Simply NPM Package Template

A template for creating NPM packages with TypeScript, Jest, and ESLint.

This template is used by Simply Express Generator to generate barebones TypeScript libraries.

## Features

- TypeScript for static typing
- Jest for testing
- ESLint for linting
- Convenient npm scripts for building, testing, and linting

## Structure

The project follows this basic structure:

```bash
├── src/ # Source files
│ ├── helloWorld.ts # Sample function
│ └── index.ts # Entry point exporting all public APIs
├── test/ # Test files
│ ├── helloWorld.test.ts # Test for the sample function
│ └── tsconfig.json # TypeScript configuration for Jest
├── package.json # Project metadata and dependencies
├── tsconfig.json # TypeScript compiler configuration
└── README.md
```

## Usage

Once you generate a project with this template, you can use these commands:

- `npm run build`: Compile TypeScript files into JavaScript
- `npm run test`: Run tests with Jest
- `npm run test:cov`: Run tests and generate a coverage report
- `npm run lint`: Lint the project with ESLint
- `npm run lint:fix`: Lint the project and automatically fix problems

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](<link to issues page>).