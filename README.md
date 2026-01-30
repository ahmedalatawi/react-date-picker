# React Date Picker

A beautiful, customizable date and time picker component for React with comprehensive built-in styling, multiple themes and localization support.

![npm version](https://img.shields.io/npm/v/@ahmedalatawi/react-date-picker)
![license](https://img.shields.io/npm/l/@ahmedalatawi/react-date-picker)
![bundle size](https://img.shields.io/bundlephobia/minzip/@ahmedalatawi/react-date-picker)

## Features

- 📅 Multiple selection modes:
  - Single date selection
  - Date range selection
  - Week range selection
- 🕒 Time picker with 12/24-hour format support
- 🌍 Internationalization support with date-fns locales
- 🎨 Beautiful built-in styling that works out of the box
- 🎯 Fully customizable styling with CSS classes
- 📱 Responsive and mobile-friendly design
- ♿ Accessibility-friendly with full keyboard navigation
- 🔧 TypeScript support
- 📝 Date notes and annotations support
- ✨ Confirmation mode with OK button
- 🎯 Standalone time picker component
- 📦 Tree-shakeable, lightweight, and works without any dependencies on CSS frameworks

## Installation

```bash
npm install @atawi/react-date-picker
```

## Setup

The library works out of the box with comprehensive built-in styles. Simply import the component and start using it:

```tsx
import { DateTimePicker } from "@atawi/react-date-picker";

function App() {
  const [date, setDate] = useState(new Date());

  return <DateTimePicker value={date} onChange={setDate} showTime />;
}
```

The library includes comprehensive built-in styles that provide:

- Beautiful hover states and interactions
- Modern blue selection colors
- Dark mode support
- Fully responsive design
- Smooth animations and transitions
- Professional appearance suitable for any application

## Basic Usage

```tsx
import { DateTimePicker } from "@atawi/react-date-picker";

function App() {
  const [date, setDate] = useState(new Date());

  return <DateTimePicker value={date} onChange={setDate} showTime />;
}
```

## Examples

### Single Date Selection

```tsx
// Basic date picker
<DateTimePicker
  value={date}
  onChange={setDate}
  mode="single"
  showTime={false}
/>

// With time selection
<DateTimePicker
  value={date}
  onChange={setDate}
  mode="single"
  showTime
  use24Hour={false}
/>
```

### Date Range Selection

```tsx
const [dateRange, setDateRange] = useState<[Date, Date]>([
  new Date(),
  addDays(new Date(), 5),
]);

<DateTimePicker
  value={dateRange}
  onChange={setDateRange}
  mode="range"
  showTime={false}
/>;
```

### Week Range Selection

```tsx
const [weekRange, setWeekRange] = useState<[Date, Date]>([
  startOfWeek(new Date()),
  endOfWeek(new Date()),
]);

<DateTimePicker
  value={weekRange}
  onChange={setWeekRange}
  mode="week"
  showTime={false}
/>;
```

### With Date Notes

```tsx
const notes = [
  {
    date: new Date(),
    note: "Today's special event: Team meeting at 2 PM",
  },
  {
    startDate: addDays(new Date(), 3),
    endDate: addDays(new Date(), 5),
    note: "Annual conference in New York",
  },
];

<DateTimePicker value={date} onChange={setDate} mode="single" notes={notes} />;
```

### Dark Mode

```tsx
<DateTimePicker
  value={date}
  onChange={setDate}
  mode="single"
  showTime
  darkMode={true}
/>
```

### With Confirmation Button

```tsx
const [selectedDate, setSelectedDate] = useState(new Date());
const [isOpen, setIsOpen] = useState(false);

<DateTimePicker
  value={selectedDate}
  onChange={setSelectedDate}
  mode="single"
  showTime
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  footer={
    <div
      style={{
        marginTop: "1rem",
        paddingTop: "1rem",
        borderTop: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <ConfirmButton
        onConfirm={() => {
          // Handle confirmation
          setIsOpen(false);
        }}
      />
    </div>
  }
/>;
```

### Standalone Time Picker

```tsx
import { TimePicker } from "@atawi/react-date-picker";

const [time, setTime] = useState(new Date());

<TimePicker value={time} onChange={setTime} use24Hour={false} />;
```

### Custom Styling

You can customize the appearance using CSS classes:

```tsx
const customStyles = {
  containerClassName: "my-date-picker",
  triggerClassName: "my-trigger-button",
  calendarClassName: "my-calendar",
  dayClassName: "my-day-button",
  selectedDayClassName: "my-selected-day",
};

<DateTimePicker value={date} onChange={setDate} styles={customStyles} />;
```

Then style with CSS:

```css
.my-date-picker {
  /* Custom container styles */
}

.my-trigger-button {
  background: #f0f0f0;
  border: 2px solid #ccc;
  border-radius: 8px;
}

.my-selected-day {
  background: #ff6b6b;
  color: white;
}
```

## Props API

### DateTimePicker Props

| Prop            | Type                                   | Default      | Description                      |
| --------------- | -------------------------------------- | ------------ | -------------------------------- |
| `value`         | `Date \| [Date, Date]`                 | `new Date()` | Selected date or date range      |
| `onChange`      | `(date: Date \| [Date, Date]) => void` | Required     | Callback when date changes       |
| `mode`          | `'single' \| 'range' \| 'week'`        | `'single'`   | Selection mode                   |
| `showTime`      | `boolean`                              | `true`       | Show time picker                 |
| `use24Hour`     | `boolean`                              | `false`      | Use 24-hour format               |
| `disabled`      | `boolean`                              | `false`      | Disable the picker               |
| `disabledDates` | `Date[]`                               | `[]`         | Array of disabled dates          |
| `locale`        | `Locale`                               | `undefined`  | date-fns locale object           |
| `notes`         | `DateNoteType[]`                       | `[]`         | Array of date notes              |
| `darkMode`      | `boolean`                              | `false`      | Enable dark mode styling         |
| `isOpen`        | `boolean`                              | `undefined`  | Control open state               |
| `onOpenChange`  | `(isOpen: boolean) => void`            | `undefined`  | Callback when open state changes |
| `footer`        | `React.ReactNode`                      | `undefined`  | Custom footer content            |
| `styles`        | `StyleProps`                           | `{}`         | Custom style classes             |

### TimePicker Props

| Prop        | Type                   | Default  | Description                |
| ----------- | ---------------------- | -------- | -------------------------- |
| `value`     | `Date`                 | Required | Selected time              |
| `onChange`  | `(date: Date) => void` | Required | Callback when time changes |
| `use24Hour` | `boolean`              | `false`  | Use 24-hour format         |
| `disabled`  | `boolean`              | `false`  | Disable the picker         |
| `darkMode`  | `boolean`              | `false`  | Enable dark mode styling   |
| `styles`    | `StyleProps`           | `{}`     | Custom style classes       |

### Style Props

| Prop                   | Type     | Description                      |
| ---------------------- | -------- | -------------------------------- |
| `containerClassName`   | `string` | Class for the main container     |
| `triggerClassName`     | `string` | Class for the trigger button     |
| `calendarClassName`    | `string` | Class for the calendar container |
| `dayClassName`         | `string` | Class for calendar day buttons   |
| `selectedDayClassName` | `string` | Class for selected day           |
| `rangeClassName`       | `string` | Class for days in range          |
| `timePickerClassName`  | `string` | Class for time picker section    |

## Styling

The library comes with beautiful built-in styles that work out of the box. You can customize the appearance by:

1. **Using the `styles` prop** to apply custom CSS classes
2. **Using the `darkMode` prop** for automatic dark mode styling
3. **Overriding CSS classes** in your own stylesheet
4. **Using CSS custom properties** for theme customization

### Built-in Themes

The library includes several built-in visual themes:

- Default modern theme with blue accents
- Dark mode support (automatic via media queries or manual via `darkMode` prop)
- Material Design inspired styling
- Clean, minimal appearance
- Professional business styling

## Accessibility

The component is built with accessibility in mind:

- Full keyboard navigation support
- ARIA labels and roles
- Focus management
- Screen reader friendly
- High contrast mode support

## Browser Support

- Chrome (and Chromium-based browsers) ≥ 60
- Firefox ≥ 60
- Safari ≥ 12
- Edge ≥ 79

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © [Atawi](https://github.com/ahmedalatawi)
