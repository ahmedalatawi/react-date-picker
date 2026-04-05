import type { FC } from "react";
import { Link } from "react-router-dom";
import { CodeBlock } from "../components/CodeBlock";

export const GettingStarted: FC = () => {
  return (
    <div className="prose dark:prose-invert">
      <h1>Getting Started</h1>

      <h2>Installation</h2>
      <CodeBlock language="bash">
        npm install @atawi/react-date-picker
      </CodeBlock>

      <h2>Style Import Required</h2>
      <p>
        Import the package stylesheet once in your app entry so the components
        render with their default styles:
      </p>
      <CodeBlock language="tsx">
        {`import '@atawi/react-date-picker/style.css';`}
      </CodeBlock>

      <h2>Basic Usage</h2>
      <CodeBlock language="tsx">
        {`import '@atawi/react-date-picker/style.css';
import { DateTimePicker } from '@atawi/react-date-picker';

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <DateTimePicker
      value={date}
      onChange={setDate}
      showTime
    />
  );
}`}
      </CodeBlock>

      <h2>Custom Styling</h2>
      <p>
        The component is fully customizable using CSS classes. You can override
        any part of the component's appearance:
      </p>
      <CodeBlock language="tsx">
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
      </CodeBlock>

      <p>Then add your custom CSS:</p>
      <CodeBlock language="css">
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
      </CodeBlock>

      <h2>Dark Mode</h2>
      <p>
        Enable dark mode styling with the <code>darkMode</code> prop:
      </p>
      <CodeBlock language="tsx">
        {`<DateTimePicker
  value={date}
  onChange={setDate}
  darkMode={true}
/>`}
      </CodeBlock>

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
