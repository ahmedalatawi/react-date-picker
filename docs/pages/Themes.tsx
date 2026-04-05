import type { FC } from "react";
import { useState } from "react";
import { CodeBlock } from "../components/CodeBlock";
import { DateTimePicker } from "../../src/components/DateTimePicker/DateTimePicker";
import { addDays } from "date-fns";

export const Themes: FC = () => {
  const [date, setDate] = useState(new Date());
  const [dateRange, setDateRange] = useState<[Date, Date]>([
    new Date(),
    addDays(new Date(), 5),
  ]);

  const modernTheme = {
    containerClassName: "modern-picker",
    triggerClassName: "modern-trigger",
    calendarClassName: "modern-calendar",
    dayClassName: "modern-day",
    selectedDayClassName: "modern-selected",
    rangeClassName: "modern-range",
    timePickerClassName: "modern-time",
  };

  const materialTheme = {
    containerClassName: "material-picker",
    triggerClassName: "material-trigger",
    calendarClassName: "material-calendar",
    dayClassName: "material-day",
    selectedDayClassName: "material-selected",
    timePickerClassName: "material-time",
  };

  const gradientTheme = {
    containerClassName: "gradient-picker",
    triggerClassName: "gradient-trigger",
    calendarClassName: "gradient-calendar",
    dayClassName: "gradient-day",
    selectedDayClassName: "gradient-selected",
    rangeClassName: "gradient-range",
    timePickerClassName: "gradient-time",
  };

  const hotelTheme = {
    containerClassName: "hotel-picker",
    triggerClassName: "hotel-trigger",
    calendarClassName: "hotel-calendar",
    dayClassName: "hotel-day",
    selectedDayClassName: "hotel-selected",
    rangeClassName: "hotel-range",
  };

  return (
    <div className="prose dark:prose-invert">
      <h1>Themes</h1>
      <p>
        The Date Time Picker comes with beautiful built-in styling and supports
        full customization through CSS classes.
      </p>

      <h2>Modern Theme (Default)</h2>
      <div className="not-prose mb-4">
        <DateTimePicker
          value={date}
          onChange={(newDate) => setDate(newDate as Date)}
          styles={modernTheme}
        />
      </div>
      <CodeBlock language="typescript">
        {`const modernTheme = {
  containerClassName: 'modern-picker',
  triggerClassName: 'modern-trigger',
  calendarClassName: 'modern-calendar',
  dayClassName: 'modern-day',
  selectedDayClassName: 'modern-selected',
  rangeClassName: 'modern-range',
  timePickerClassName: 'modern-time',
};`}
      </CodeBlock>

      <h2>Material Theme</h2>
      <div className="not-prose mb-4">
        <DateTimePicker
          value={date}
          onChange={(newDate) => setDate(newDate as Date)}
          styles={materialTheme}
        />
      </div>
      <CodeBlock language="typescript">
        {`const materialTheme = {
  containerClassName: 'material-picker',
  triggerClassName: 'material-trigger',
  calendarClassName: 'material-calendar',
  dayClassName: 'material-day',
  selectedDayClassName: 'material-selected',
  timePickerClassName: 'material-time',
};`}
      </CodeBlock>

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
      <CodeBlock language="typescript">
        {`const gradientTheme = {
  containerClassName: 'gradient-picker',
  triggerClassName: 'gradient-trigger',
  calendarClassName: 'gradient-calendar',
  dayClassName: 'gradient-day',
  selectedDayClassName: 'gradient-selected',
  rangeClassName: 'gradient-range',
  timePickerClassName: 'gradient-time',
};`}
      </CodeBlock>

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
      <CodeBlock language="typescript">
        {`const hotelTheme = {
  containerClassName: 'hotel-picker',
  triggerClassName: 'hotel-trigger',
  calendarClassName: 'hotel-calendar',
  dayClassName: 'hotel-day',
  selectedDayClassName: 'hotel-selected',
  rangeClassName: 'hotel-range',
};`}
      </CodeBlock>

      <h2>Custom Themes</h2>
      <p>
        You can create your own theme by providing custom CSS classes for each
        element. The <code>styles</code> prop accepts the following properties:
      </p>

      <ul>
        <li>
          <code>containerClassName</code>: Main container styles
        </li>
        <li>
          <code>triggerClassName</code>: Input/trigger button styles
        </li>
        <li>
          <code>calendarClassName</code>: Calendar container styles
        </li>
        <li>
          <code>dayClassName</code>: Calendar day button styles
        </li>
        <li>
          <code>selectedDayClassName</code>: Selected day styles
        </li>
        <li>
          <code>rangeClassName</code>: Date range styles
        </li>
        <li>
          <code>timePickerClassName</code>: Time picker section styles
        </li>
        <li>
          <code>disabledClassName</code>: Disabled date styles
        </li>
      </ul>

      <h3>CSS Styling</h3>
      <p>
        The library includes comprehensive built-in styles and can be easily
        customized with CSS classes. You can override any part of the
        component's appearance using standard CSS.
      </p>

      <CodeBlock language="typescript">
        {`// Example: Custom theme using CSS classes
const brandTheme = {
  triggerClassName: 'my-brand-trigger',
  calendarClassName: 'my-brand-calendar',
  dayClassName: 'my-brand-day',
  selectedDayClassName: 'my-brand-selected',
  rangeClassName: 'my-brand-range',
};`}
      </CodeBlock>

      <p>Then add your custom CSS:</p>
      <CodeBlock language="css">
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
      </CodeBlock>

      <h3>Dark Mode Support</h3>
      <p>
        All themes support dark mode out of the box. Use the{" "}
        <code>darkMode</code> prop or CSS media queries to enable dark mode
        styling:
      </p>

      <CodeBlock language="typescript">
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
      </CodeBlock>
    </div>
  );
};
