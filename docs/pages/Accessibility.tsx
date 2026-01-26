import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { DateTimePicker } from "../../src/components/DateTimePicker/DateTimePicker";

export const Accessibility: React.FC = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="prose dark:prose-invert">
      <h1>Accessibility</h1>
      <p>
        The Date Time Picker is built with accessibility in mind, following WCAG
        guidelines and best practices to ensure a great experience for all
        users.
      </p>

      <h2>Keyboard Navigation</h2>
      <div className="not-prose mb-4">
        <DateTimePicker
          value={date}
          onChange={(newDate) => setDate(newDate as Date)}
          mode="single"
          showTime
        />
      </div>
      <p>The component supports full keyboard navigation:</p>
      <ul>
        <li>
          <kbd>Tab</kbd> - Move focus through interactive elements
        </li>
        <li>
          <kbd>Space</kbd> / <kbd>Enter</kbd> - Select focused date or activate
          button
        </li>
        <li>
          <kbd>Escape</kbd> - Close the picker
        </li>
        <li>
          <kbd>Arrow Keys</kbd> - Navigate between days
        </li>
        <li>
          <kbd>Page Up</kbd> - Previous month
        </li>
        <li>
          <kbd>Page Down</kbd> - Next month
        </li>
        <li>
          <kbd>Shift + Page Up</kbd> - Previous year
        </li>
        <li>
          <kbd>Shift + Page Down</kbd> - Next year
        </li>
        <li>
          <kbd>Home</kbd> - First day of the month
        </li>
        <li>
          <kbd>End</kbd> - Last day of the month
        </li>
      </ul>

      <h2>ARIA Attributes</h2>
      <p>
        The component uses appropriate ARIA attributes to ensure screen reader
        compatibility:
      </p>
      <SyntaxHighlighter language="html" style={oneDark}>
        {`<!-- Trigger button -->
<button
  aria-haspopup="dialog"
  aria-expanded="false"
  aria-label="Choose date and time"
>
  March 15, 2024
</button>

<!-- Calendar dialog -->
<div
  role="dialog"
  aria-modal="true"
  aria-label="Date and time picker"
>
  <!-- Calendar grid -->
  <div role="grid">
    <div role="row">
      <div role="columnheader">Sun</div>
      <!-- ... other days ... -->
    </div>
    <!-- Calendar days -->
    <div role="row">
      <button
        role="gridcell"
        aria-selected="false"
        aria-label="March 15, 2024"
      >
        15
      </button>
      <!-- ... other days ... -->
    </div>
  </div>
</div>`}
      </SyntaxHighlighter>

      <h2>Focus Management</h2>
      <p>
        The component implements proper focus management to ensure a smooth
        keyboard navigation experience:
      </p>
      <ul>
        <li>Focus is trapped within the picker when open</li>
        <li>Focus returns to the trigger button when closing</li>
        <li>First focusable element receives focus when opening</li>
        <li>Focus is visible and clearly indicated</li>
      </ul>

      <h2>Screen Reader Support</h2>
      <p>
        The component provides clear and descriptive announcements for screen
        readers:
      </p>
      <ul>
        <li>Date format follows locale-specific patterns</li>
        <li>Selected state is clearly announced</li>
        <li>Range selection announces start and end dates</li>
        <li>Time selection announces current value and format</li>
        <li>Error states and validation messages are properly announced</li>
      </ul>

      <h2>High Contrast Support</h2>
      <p>The component is designed to work well in high contrast mode:</p>
      <ul>
        <li>All interactive elements have sufficient color contrast</li>
        <li>Focus indicators remain visible in high contrast mode</li>
        <li>Selected states use both color and shape for indication</li>
        <li>Range selection is visible without relying on color alone</li>
      </ul>

      <h2>Implementation Example</h2>
      <p>
        The component uses the <code>useA11y</code> hook to handle accessibility
        features:
      </p>
      <SyntaxHighlighter language="typescript" style={oneDark}>
        {`import { useA11y } from '@atawi/react-date-picker';

function MyDatePicker() {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const a11yProps = useA11y(
    isOpen,
    () => setIsOpen(false),
    triggerRef,
    contentRef
  );

  return (
    <div>
      <button ref={triggerRef} {...a11yProps}>
        Select Date
      </button>
      {isOpen && (
        <div ref={contentRef} {...a11yProps}>
          {/* Calendar content */}
        </div>
      )}
    </div>
  );
}`}
      </SyntaxHighlighter>

      <h2>Best Practices</h2>
      <p>
        When using the Date Time Picker, follow these accessibility best
        practices:
      </p>
      <ul>
        <li>Always provide a clear label for the picker</li>
        <li>Use appropriate color contrast ratios (minimum 4.5:1)</li>
        <li>Ensure the component can be used without a mouse</li>
        <li>Test with screen readers and keyboard navigation</li>
        <li>Provide clear error messages and validation feedback</li>
        <li>Consider users who may have disabled JavaScript</li>
      </ul>

      <h2>Testing</h2>
      <p>The component's accessibility features are thoroughly tested:</p>
      <ul>
        <li>Automated testing with Jest and Testing Library</li>
        <li>Manual testing with screen readers (NVDA, VoiceOver)</li>
        <li>Keyboard navigation testing</li>
        <li>High contrast mode testing</li>
        <li>Color contrast verification</li>
      </ul>

      <h2>Resources</h2>
      <ul>
        <li>
          <a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/">
            ARIA Dialog Pattern
          </a>
        </li>
        <li>
          <a href="https://www.w3.org/WAI/ARIA/apg/patterns/grid/">
            ARIA Grid Pattern
          </a>
        </li>
        <li>
          <a href="https://www.w3.org/WAI/WCAG21/quickref/">
            WCAG 2.1 Quick Reference
          </a>
        </li>
      </ul>
    </div>
  );
};
