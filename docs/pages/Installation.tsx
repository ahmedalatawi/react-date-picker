import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Installation: React.FC = () => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Installation & Setup</h1>

      <h2>Package Installation</h2>
      <p>Install the package and its peer dependencies:</p>
      <SyntaxHighlighter language="bash" style={oneDark}>
        npm install @atawi/react-date-picker date-fns
      </SyntaxHighlighter>

      <h2>Setup Options</h2>

      <h3>Works Out of the Box</h3>
      <p>
        This library works perfectly without any CSS framework dependencies. It
        includes comprehensive built-in styles:
      </p>
      <SyntaxHighlighter language="typescript" style={oneDark}>
        {`import { DateTimePicker } from '@atawi/react-date-picker';
// No additional CSS imports needed - all styles are included

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
      </SyntaxHighlighter>

      <p>The built-in styles include:</p>
      <ul>
        <li>Modern blue selection colors for clear visual feedback</li>
        <li>Smooth hover states and transitions</li>
        <li>Dark mode support via CSS media queries</li>
        <li>Responsive design for all screen sizes</li>
        <li>Smooth animations and transitions</li>
        <li>Accessibility-friendly focus states</li>
        <li>Professional appearance suitable for any application</li>
      </ul>

      <h2>TypeScript Setup</h2>
      <p>
        The library includes full TypeScript support. No additional setup is
        required.
      </p>

      <h2>Framework Integration</h2>

      <h3>Next.js</h3>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {`// next.config.js
module.exports = {
  transpilePackages: ['@atawi/react-date-picker'],
}`}
      </SyntaxHighlighter>

      <h3>Vite</h3>
      <p>No additional configuration needed. Works out of the box.</p>

      <h3>Create React App</h3>
      <p>Works without additional configuration.</p>

      <h2>Peer Dependencies</h2>
      <p>The library requires the following peer dependencies:</p>
      <ul>
        <li>
          <code>react</code> ^16.8.0 || ^17.0.0 || ^18.0.0
        </li>
        <li>
          <code>react-dom</code> ^16.8.0 || ^17.0.0 || ^18.0.0
        </li>
        <li>
          <code>date-fns</code> ^3.0.0
        </li>
      </ul>

      <h2>Browser Support</h2>
      <ul>
        <li>Chrome (and Chromium-based browsers) ≥ 60</li>
        <li>Firefox ≥ 60</li>
        <li>Safari ≥ 12</li>
        <li>Edge ≥ 79</li>
      </ul>

      <h2>Bundle Size</h2>
      <p>
        The library is tree-shakeable and lightweight. Only import what you
        need:
      </p>
      <SyntaxHighlighter language="typescript" style={oneDark}>
        {`// Import only what you need
import { DateTimePicker } from '@atawi/react-date-picker';

// Or import specific components
import { TimePicker, Calendar } from '@atawi/react-date-picker';`}
      </SyntaxHighlighter>
    </div>
  );
};
