import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { DateTimePicker } from '../../src/components/DateTimePicker/DateTimePicker';
import { addDays } from 'date-fns';

export const Themes: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [dateRange, setDateRange] = useState<[Date, Date]>([
    new Date(),
    addDays(new Date(), 5)
  ]);

  const modernTheme = {
    containerClassName: 'modern-picker',
    triggerClassName: 'modern-trigger',
    calendarClassName: 'modern-calendar',
    dayClassName: 'modern-day',
    selectedDayClassName: 'modern-selected',
    rangeClassName: 'modern-range',
    timePickerClassName: 'modern-time',
  };

  const materialTheme = {
    containerClassName: 'material-picker',
    triggerClassName: 'material-trigger',
    calendarClassName: 'material-calendar',
    dayClassName: 'material-day',
    selectedDayClassName: 'material-selected',
    timePickerClassName: 'material-time',
  };

  const gradientTheme = {
    containerClassName: 'gradient-picker',
    triggerClassName: 'gradient-trigger',
    calendarClassName: 'gradient-calendar',
    dayClassName: 'gradient-day',
    selectedDayClassName: 'gradient-selected',
    rangeClassName: 'gradient-range',
    timePickerClassName: 'gradient-time',
  };

  const hotelTheme = {
    containerClassName: 'hotel-picker',
    triggerClassName: 'hotel-trigger',
    calendarClassName: 'hotel-calendar',
    dayClassName: 'hotel-day',
    selectedDayClassName: 'hotel-selected',
    rangeClassName: 'hotel-range',
  };

  return (
    <div className="prose dark:prose-invert">
      <h1>Themes</h1>
      <p>
        The Date Time Picker comes with beautiful built-in styling and supports full customization
        through CSS classes.
      </p>

      <h2>Modern Theme (Default)</h2>
      <div className="not-prose mb-4">
        <DateTimePicker
          value={date}
          onChange={(newDate) => setDate(newDate as Date)}
          styles={modernTheme}
        />
      </div>
      <SyntaxHighlighter language="typescript" style={oneDark}>
{`const modernTheme = {
  containerClassName: 'modern-picker',
  triggerClassName: 'modern-trigger',
  calendarClassName: 'modern-calendar',
  dayClassName: 'modern-day',
  selectedDayClassName: 'modern-selected',
  rangeClassName: 'modern-range',
  timePickerClassName: 'modern-time',
};`}
      </SyntaxHighlighter>

      <h2>Material Theme</h2>
      <div className="not-prose mb-4">
        <DateTimePicker
          value={date}
          onChange={(newDate) => setDate(newDate as Date)}
          styles={materialTheme}
        />
      </div>
      <SyntaxHighlighter language="typescript" style={oneDark}>
{`const materialTheme = {
  containerClassName: 'material-picker',
  triggerClassName: 'material-trigger',
  calendarClassName: 'material-calendar',
  dayClassName: 'material-day',
  selectedDayClassName: 'material-selected',
  timePickerClassName: 'material-time',
};`}
      </SyntaxHighlighter>

      <h2>Gradient Theme</h2>
      <div className="not-prose mb-4">
        <DateTimePicker
          value={dateRange}
          onChange={(dates) => setDateRange(dates as [Date, Date])}
          mode="range"
          showTime={false}
          styles={gradientTheme}
        />
      </div>
      <SyntaxHighlighter language="typescript" style={oneDark}>
{`const gradientTheme = {
  containerClassName: 'gradient-picker',
  triggerClassName: 'gradient-trigger',
  calendarClassName: 'gradient-calendar',
  dayClassName: 'gradient-day',
  selectedDayClassName: 'gradient-selected',
  rangeClassName: 'gradient-range',
  timePickerClassName: 'gradient-time',
};`}
      </SyntaxHighlighter>

      <h2>Hotel Booking Theme</h2>
      <div className="not-prose mb-4">
        <DateTimePicker
          value={dateRange}
          onChange={(dates) => setDateRange(dates as [Date, Date])}
          mode="range"
          showTime={false}
          styles={hotelTheme}
        />
      </div>
      <SyntaxHighlighter language="typescript" style={oneDark}>
{`const hotelTheme = {
  containerClassName: 'hotel-picker',
  triggerClassName: 'hotel-trigger',
  calendarClassName: 'hotel-calendar',
  dayClassName: 'hotel-day',
  selectedDayClassName: 'hotel-selected',
  rangeClassName: 'hotel-range',
};`}
      </SyntaxHighlighter>

      <h2>Custom Themes</h2>
      <p>
        You can create your own theme by providing custom CSS classes for each element.
        The <code>styles</code> prop accepts the following properties:
      </p>

      <ul>
        <li><code>containerClassName</code>: Main container styles</li>
        <li><code>triggerClassName</code>: Input/trigger button styles</li>
        <li><code>calendarClassName</code>: Calendar container styles</li>
        <li><code>dayClassName</code>: Calendar day button styles</li>
        <li><code>selectedDayClassName</code>: Selected day styles</li>
        <li><code>rangeClassName</code>: Date range styles</li>
        <li><code>timePickerClassName</code>: Time picker section styles</li>
        <li><code>disabledClassName</code>: Disabled date styles</li>
      </ul>

      <h3>CSS Styling</h3>
      <p>
        The library includes comprehensive built-in styles and can be easily customized with CSS classes.
        You can override any part of the component's appearance using standard CSS.
      </p>
      
      <SyntaxHighlighter language="typescript" style={oneDark}>
{`// Example: Custom theme using CSS classes
const brandTheme = {
  triggerClassName: 'my-brand-trigger',
  calendarClassName: 'my-brand-calendar',
  dayClassName: 'my-brand-day',
  selectedDayClassName: 'my-brand-selected',
  rangeClassName: 'my-brand-range',
};`}
      </SyntaxHighlighter>

      <p>Then add your custom CSS:</p>
      <SyntaxHighlighter language="css" style={oneDark}>
{`.my-brand-trigger {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  padding: 12px 16px;
  transition: all 0.2s;
}

.my-brand-trigger:hover {
  border-color: #3b82f6;
}

.my-brand-selected {
  background: #3b82f6;
  color: white;
}

.my-brand-selected:hover {
  background: #2563eb;
};`}
      </SyntaxHighlighter>

      <h3>Dark Mode Support</h3>
      <p>
        All themes support dark mode out of the box. Use the <code>darkMode</code> prop or CSS media queries
        to enable dark mode styling:
      </p>

      <SyntaxHighlighter language="typescript" style={oneDark}>
{`// Enable dark mode with prop
<DateTimePicker
  value={date}
  onChange={setDate}
  darkMode={true}
/>

// Or use CSS media queries (automatic)
@media (prefers-color-scheme: dark) {
  .date-time-picker {
    /* Dark mode styles applied automatically */
  }
}`}
      </SyntaxHighlighter>
    </div>
  );
};