import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const GettingStarted: React.FC = () => {
  return (
    <div className="prose dark:prose-invert">
      <h1>Getting Started</h1>

      <h2>Installation</h2>
      <SyntaxHighlighter language="bash" style={oneDark}>
        npm install @atawi/react-date-picker date-fns
      </SyntaxHighlighter>

      <h2>No Setup Required</h2>
      <p>
        The library works out of the box with comprehensive built-in styles. No
        CSS framework dependencies required:
      </p>

      <h2>Basic Usage</h2>
      <SyntaxHighlighter language="tsx" style={oneDark}>
        {`import { DateTimePicker } from '@atawi/react-date-picker';
import { enUS } from 'date-fns/locale';

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <DateTimePicker
      value={date}
      onChange={setDate}
      locale={enUS}
      showTime
    />
  );
}`}
      </SyntaxHighlighter>

      <h2>Custom Styling</h2>
      <p>
        The component is fully customizable using CSS classes. You can override
        any part of the component's appearance:
      </p>
      <SyntaxHighlighter language="tsx" style={oneDark}>
        {`const customTheme = {
  triggerClassName: 'my-custom-trigger',
  calendarClassName: 'my-custom-calendar',
  dayClassName: 'my-custom-day',
  selectedDayClassName: 'my-custom-selected-day',
};

<DateTimePicker
  value={date}
  onChange={setDate}
  styles={customTheme}
/>`}
      </SyntaxHighlighter>

      <p>Then add your custom CSS:</p>
      <SyntaxHighlighter language="css" style={oneDark}>
        {`.my-custom-trigger {
  background: #3b82f6;
  color: white;
  border-radius: 8px;
  padding: 12px 16px;
}

.my-custom-trigger:hover {
  background: #2563eb;
}

.my-custom-selected-day {
  background: #10b981;
  color: white;
}`}
      </SyntaxHighlighter>

      <h2>Dark Mode</h2>
      <p>
        Enable dark mode styling with the <code>darkMode</code> prop:
      </p>
      <SyntaxHighlighter language="tsx" style={oneDark}>
        {`<DateTimePicker
  value={date}
  onChange={setDate}
  darkMode={true}
/>`}
      </SyntaxHighlighter>

      <h2>Next Steps</h2>
      <ul>
        <li>
          Check out the <Link to="/examples">Examples</Link> to see more usage
          patterns
        </li>
        <li>
          Learn about available props in the{" "}
          <Link to="/api">API Reference</Link>
        </li>
        <li>
          Explore different <Link to="/themes">Themes</Link>
        </li>
        <li>
          Read about <Link to="/accessibility">Accessibility</Link> features
        </li>
      </ul>
    </div>
  );
};
