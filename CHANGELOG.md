# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- New `clearable` prop on `DateTimePicker` that renders a `×` button on the
  trigger to clear the selected value.
- New `placeholder` prop (default `"Select date"`) shown on the trigger when
  no value is selected.
- New `onClear` callback fired when the user clicks the clear button.
- `value` and `onChange` now accept/return `null` to represent an empty state.

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
