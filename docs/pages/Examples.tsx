import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { DateTimePicker } from "../../src/components/DateTimePicker/DateTimePicker";
import { TimePicker } from "../../src/components/TimePicker/TimePicker";
import { enUS } from "date-fns/locale";
import { addDays, startOfWeek, endOfWeek } from "date-fns";

export const Examples: React.FC = () => {
  const [singleDate, setSingleDate] = useState(new Date());
  const [dateRange, setDateRange] = useState<[Date, Date]>([
    new Date(),
    addDays(new Date(), 5),
  ]);
  const [weekRange, setWeekRange] = useState<[Date, Date]>([
    startOfWeek(new Date()),
    endOfWeek(new Date()),
  ]);

  return (
    <div className="prose dark:prose-invert">
      <h1>Examples</h1>

      <h2>Single Date Selection</h2>
      <div className="not-prose mb-4">
        <DateTimePicker
          value={singleDate}
          onChange={(date) => setSingleDate(date as Date)}
          mode="single"
          showTime
          locale={enUS}
        />
      </div>
      <SyntaxHighlighter language="tsx" style={oneDark}>
        {`const [date, setDate] = useState(new Date());

<DateTimePicker
  value={date}
  onChange={setDate}
  mode="single"
  showTime
  locale={enUS}
/>`}
      </SyntaxHighlighter>

      <h2>Date Range Selection</h2>
      <div className="not-prose mb-4">
        <DateTimePicker
          value={dateRange}
          onChange={(dates) => setDateRange(dates as [Date, Date])}
          mode="range"
          showTime={false}
          locale={enUS}
        />
      </div>
      <SyntaxHighlighter language="tsx" style={oneDark}>
        {`const [dateRange, setDateRange] = useState<[Date, Date]>([
  new Date(),
  addDays(new Date(), 5)
]);

<DateTimePicker
  value={dateRange}
  onChange={setDateRange}
  mode="range"
  showTime={false}
  locale={enUS}
/>`}
      </SyntaxHighlighter>

      <h2>Week Range Selection</h2>
      <div className="not-prose mb-4">
        <DateTimePicker
          value={weekRange}
          onChange={(dates) => setWeekRange(dates as [Date, Date])}
          mode="week"
          showTime={false}
          locale={enUS}
        />
      </div>
      <SyntaxHighlighter language="tsx" style={oneDark}>
        {`const [weekRange, setWeekRange] = useState<[Date, Date]>([
  startOfWeek(new Date()),
  endOfWeek(new Date())
]);

<DateTimePicker
  value={weekRange}
  onChange={setWeekRange}
  mode="week"
  showTime={false}
  locale={enUS}
/>`}
      </SyntaxHighlighter>

      <h2>With Date Notes</h2>
      <div className="not-prose mb-4">
        <DateTimePicker
          value={singleDate}
          onChange={(date) => setSingleDate(date as Date)}
          mode="single"
          showTime={false}
          locale={enUS}
          notes={[
            {
              date: new Date(),
              note: "Today's special event",
            },
            {
              startDate: addDays(new Date(), 3),
              endDate: addDays(new Date(), 5),
              note: "Conference",
            },
          ]}
        />
      </div>
      <SyntaxHighlighter language="tsx" style={oneDark}>
        {`const notes = [
  {
    date: new Date(),
    note: "Today's special event"
  },
  {
    startDate: addDays(new Date(), 3),
    endDate: addDays(new Date(), 5),
    note: "Conference"
  }
];

<DateTimePicker
  value={date}
  onChange={setDate}
  mode="single"
  showTime={false}
  locale={enUS}
  notes={notes}
/>`}
      </SyntaxHighlighter>

      <h2>With Confirmation</h2>
      <div className="not-prose mb-4">
        <DateTimePicker
          value={singleDate}
          onChange={(date) => setSingleDate(date as Date)}
          mode="single"
          showTime
          locale={enUS}
          footer={
            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => {}}
                className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
              >
                OK
              </button>
            </div>
          }
        />
      </div>
      <SyntaxHighlighter language="tsx" style={oneDark}>
        {`<DateTimePicker
  value={date}
  onChange={setDate}
  mode="single"
  showTime
  locale={enUS}
  footer={
    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
      <button
        onClick={() => {
          // Handle confirmation
          setIsOpen(false);
        }}
        className="px-4 py-2 bg-indigo-500 text-white rounded-lg"
      >
        OK
      </button>
    </div>
  }
/>`}
      </SyntaxHighlighter>

      <h2>Standalone Time Picker</h2>
      <div className="not-prose mb-4">
        <div className="flex items-center gap-4">
          <TimePicker
            value={singleDate}
            onChange={(newDate) => setSingleDate(newDate)}
            use24Hour={false}
          />
          <TimePicker
            value={singleDate}
            onChange={(newDate) => setSingleDate(newDate)}
            use24Hour={true}
          />
        </div>
      </div>
      <SyntaxHighlighter language="tsx" style={oneDark}>
        {`import { TimePicker } from '@atawi/react-date-picker';

const [time, setTime] = useState(new Date());

// 12-hour format
<TimePicker
  value={time}
  onChange={setTime}
  use24Hour={false}
/>

// 24-hour format
<TimePicker
  value={time}
  onChange={setTime}
  use24Hour={true}
/>`}
      </SyntaxHighlighter>

      <h2>Date Only (No Time)</h2>
      <div className="not-prose mb-4">
        <DateTimePicker
          value={singleDate}
          onChange={(date) => setSingleDate(date as Date)}
          mode="single"
          showTime={false}
          locale={enUS}
        />
      </div>
      <SyntaxHighlighter language="tsx" style={oneDark}>
        {`<DateTimePicker
  value={date}
  onChange={setDate}
  mode="single"
  showTime={false}
  locale={enUS}
/>`}
      </SyntaxHighlighter>

      <h2>Dark Mode</h2>
      <div className="not-prose mb-4 bg-gray-900 p-4 rounded-lg">
        <DateTimePicker
          value={singleDate}
          onChange={(date) => setSingleDate(date as Date)}
          mode="single"
          showTime
          darkMode={true}
          locale={enUS}
        />
      </div>
      <SyntaxHighlighter language="tsx" style={oneDark}>
        {`<DateTimePicker
  value={date}
  onChange={setDate}
  mode="single"
  showTime
  darkMode={true}
  locale={enUS}
/>`}
      </SyntaxHighlighter>
    </div>
  );
};
