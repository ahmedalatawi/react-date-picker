# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Breaking Changes

- Consumers must explicitly import the package stylesheet:

```ts
import "@atawi/react-date-picker/style.css";
```

- The stylesheet is now exported via the package subpath `@atawi/react-date-picker/style.css`.

### Documentation

- Added "Required CSS Import" guidance to API, Getting Started, Installation, Examples, and README.

### Fixed

- Fixed declaration packaging so `dist/index.d.ts` includes the public named exports such as `DateTimePicker` and `TimePicker`.
