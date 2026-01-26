import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const API: React.FC = () => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>API Reference</h1>

      <h2>Components</h2>

      <h3>DateTimePicker</h3>
      <p>The main component for date and time selection.</p>

      <div className="not-prose">
        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800/50">
                <th className="border-b border-gray-200 dark:border-gray-800 px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">Prop</th>
                <th className="border-b border-gray-200 dark:border-gray-800 px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">Type</th>
                <th className="border-b border-gray-200 dark:border-gray-800 px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">Default</th>
                <th className="border-b border-gray-200 dark:border-gray-800 px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">value</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">Date | [Date, Date]</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">new Date()</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Selected date or date range</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">onChange</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">(date: Date | [Date, Date]) =&gt; void</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Required</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Callback when date changes</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">mode</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">'single' | 'range' | 'week'</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">'single'</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Selection mode</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">showTime</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">true</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Show time picker</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">use24Hour</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Use 24-hour format</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">disabled</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Disable the picker</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">disabledDates</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">Date[]</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">[]</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Array of disabled dates</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">locale</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">Locale</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">undefined</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">date-fns locale object</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">notes</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">DateNoteType[]</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">[]</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Array of date notes and annotations</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">onDateHover</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">(date: Date | null) =&gt; void</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">undefined</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Callback when hovering over dates</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">notes</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">DateNoteType[]</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">[]</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Array of date notes</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">isOpen</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">undefined</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Control open state</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">onOpenChange</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">(isOpen: boolean) =&gt; void</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">undefined</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Callback when open state changes</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">footer</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">ReactNode</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">undefined</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Custom footer content</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">className</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">undefined</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Additional CSS classes</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">styles</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">StyleProps</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{}</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Custom style classes</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">darkMode</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Enable dark mode styling</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3>TimePicker</h3>
      <p>Standalone time picker component.</p>

      <div className="not-prose">
        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800/50">
                <th className="border-b border-gray-200 dark:border-gray-800 px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">Prop</th>
                <th className="border-b border-gray-200 dark:border-gray-800 px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">Type</th>
                <th className="border-b border-gray-200 dark:border-gray-800 px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">Default</th>
                <th className="border-b border-gray-200 dark:border-gray-800 px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">value</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">Date</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Required</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Selected time</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">onChange</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">(date: Date) =&gt; void</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Required</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Callback when time changes</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">use24Hour</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Use 24-hour format</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">disabled</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Disable the picker</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">locale</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">Locale</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">undefined</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">date-fns locale object</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">className</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">''</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Additional CSS classes</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">styles</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">TimePickerStyleProps</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{}</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Custom style classes</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-mono text-sm text-indigo-600 dark:text-indigo-400">darkMode</td>
                <td className="px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Enable dark mode styling</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3>Types</h3>

      <h4>DateNoteType</h4>
      <p>Type for adding notes to specific dates or date ranges.</p>

      <SyntaxHighlighter language="typescript" style={oneDark}>
{`type DateNote = {
  date: Date;
  note: string;
};

type DateRangeNote = {
  startDate: Date;
  endDate: Date;
  note: string;
};

type DateNoteType = DateNote | DateRangeNote;`}
      </SyntaxHighlighter>

      <h4>StyleProps</h4>
      <p>Type for customizing component styles.</p>

      <SyntaxHighlighter language="typescript" style={oneDark}>
{`interface StyleProps {
  containerClassName?: string;
  triggerClassName?: string;
  calendarClassName?: string;
  dayClassName?: string;
  selectedDayClassName?: string;
  rangeClassName?: string;
  timePickerClassName?: string;
  showTooltips?: boolean;
}`}
      </SyntaxHighlighter>

      <h4>TimePickerStyleProps</h4>
      <p>Type for customizing TimePicker styles.</p>

      <SyntaxHighlighter language="typescript" style={oneDark}>
{`interface TimePickerStyleProps {
  containerClassName?: string;
  triggerClassName?: string;
  popoverClassName?: string;
}`}
      </SyntaxHighlighter>

      <h3>Hooks</h3>

      <h4>useA11y</h4>
      <p>Hook for handling accessibility features.</p>

      <SyntaxHighlighter language="typescript" style={oneDark}>
{`function useA11y(
  isOpen: boolean,
  onClose: () => void,
  triggerRef: React.RefObject<HTMLElement>,
  contentRef: React.RefObject<HTMLElement>
): {
  role: string;
  'aria-modal': boolean;
  'aria-label': string;
}`}
      </SyntaxHighlighter>

      <h4>useKeyboardNavigation</h4>
      <p>Hook for handling keyboard navigation in the calendar.</p>

      <SyntaxHighlighter language="typescript" style={oneDark}>
{`function useKeyboardNavigation(
  currentDate: Date,
  onDateSelect: (date: Date) => void,
  onMonthChange: (date: Date) => void
): (event: React.KeyboardEvent) => void`}
      </SyntaxHighlighter>
    </div>
  );
};