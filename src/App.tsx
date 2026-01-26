import React, { useState } from "react";
import { DateTimePicker } from "./components/DateTimePicker/DateTimePicker";
import { addDays, subDays } from "date-fns";
import { enUS, es, fr, de, ja, ar, zhCN, ru } from "date-fns/locale";
import { HotelBookingExample } from "./components/examples/HotelBookingExample";
import { NotesExample } from "./components/examples/NotesExample";
import { RangeNotesExample } from "./components/examples/RangeNotesExample";
import { MaterialExample } from "./components/examples/MaterialExample";
import { CleanRangeExample } from "./components/examples/CleanRangeExample";
import { ConfirmationExample } from "./components/examples/ConfirmationExample";
import { TimePickerExample } from "./components/examples/TimePickerExample";
import { WeekRangeExample } from "./components/examples/WeekRangeExample";

function App() {
  const [singleDate, setSingleDate] = useState<Date>(new Date());
  const [dateRange, setDateRange] = useState<[Date, Date]>([
    new Date(),
    addDays(new Date(), 5),
  ]);
  const [hotelRange, setHotelRange] = useState<[Date, Date]>([
    new Date(),
    addDays(new Date(), 3),
  ]);
  const [simpleRange, setSimpleRange] = useState<[Date, Date]>([
    new Date(),
    addDays(new Date(), 7),
  ]);
  const [smallDate, setSmallDate] = useState<Date>(new Date());
  const [compactDate, setCompactDate] = useState<Date>(new Date());
  const [largeDate, setLargeDate] = useState<Date>(new Date());

  // Small Theme
  const smallTheme = {
    containerClassName: "small-picker",
    triggerClassName: "small-trigger",
    calendarClassName: "small-calendar",
    dayClassName: "small-day",
    selectedDayClassName: "small-selected",
    timePickerClassName: "small-time",
  };

  // Modern Theme (Default)
  const modernTheme = {
    containerClassName: "modern-picker",
    triggerClassName: "modern-trigger",
    calendarClassName: "modern-calendar",
    dayClassName: "modern-day",
    selectedDayClassName: "modern-selected",
    rangeClassName: "modern-range",
    timePickerClassName: "modern-time",
  };

  // Simple Range Theme
  const simpleRangeTheme = {
    containerClassName: "simple-range-picker",
    triggerClassName: "simple-trigger",
    calendarClassName: "simple-calendar",
    dayClassName: "simple-day",
    selectedDayClassName: "simple-selected",
    rangeClassName: "simple-range",
    timePickerClassName: "simple-time",
  };

  // Compact Theme
  const compactTheme = {
    containerClassName: "compact-picker",
    triggerClassName: "compact-trigger",
    calendarClassName: "compact-calendar",
    dayClassName: "compact-day",
    selectedDayClassName: "compact-selected",
    timePickerClassName: "compact-time",
  };

  // Large Theme
  const largeTheme = {
    containerClassName: "large-picker",
    triggerClassName: "large-trigger",
    calendarClassName: "large-calendar",
    dayClassName: "large-day",
    selectedDayClassName: "large-selected",
    timePickerClassName: "large-time",
  };

  // Gradient Theme
  const gradientTheme = {
    containerClassName: "gradient-picker",
    triggerClassName: "gradient-trigger",
    calendarClassName: "gradient-calendar",
    dayClassName: "gradient-day",
    selectedDayClassName: "gradient-selected",
    rangeClassName: "gradient-range",
    timePickerClassName: "gradient-time",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        <header style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#1f2937",
              marginBottom: "1rem",
            }}
          >
            Date Time Picker Showcase
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#6b7280" }}>
            A customizable date & time picker with multiple themes and sizes
          </p>
        </header>

        {/* Notes Examples */}
        <section
          style={{
            background: "white",
            borderRadius: "1rem",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e5e7eb",
            padding: "2rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#1f2937",
              marginBottom: "1.5rem",
            }}
          >
            Date Notes
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                Single Date Notes
              </label>
              <NotesExample />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                Date Range Notes
              </label>
              <RangeNotesExample />
            </div>
          </div>
        </section>

        {/* Size Variations */}
        <section
          style={{
            background: "white",
            borderRadius: "1rem",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e5e7eb",
            padding: "2rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#1f2937",
              marginBottom: "1.5rem",
            }}
          >
            Size Variations
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                Small
              </label>
              <DateTimePicker
                value={smallDate}
                onChange={(date) => setSmallDate(date as Date)}
                mode="single"
                showTime
                locale={enUS}
                styles={smallTheme}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                Compact
              </label>
              <DateTimePicker
                value={compactDate}
                onChange={(date) => setCompactDate(date as Date)}
                mode="single"
                showTime
                locale={enUS}
                styles={compactTheme}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                Default
              </label>
              <DateTimePicker
                value={singleDate}
                onChange={(date) => setSingleDate(date as Date)}
                mode="single"
                showTime
                locale={enUS}
                styles={modernTheme}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                Large
              </label>
              <DateTimePicker
                value={largeDate}
                onChange={(date) => setLargeDate(date as Date)}
                mode="single"
                showTime
                locale={enUS}
                styles={largeTheme}
              />
            </div>
          </div>
        </section>

        {/* Theme Variations */}
        <section
          style={{
            background: "white",
            borderRadius: "1rem",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e5e7eb",
            padding: "2rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#1f2937",
              marginBottom: "1.5rem",
            }}
          >
            Theme Variations
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                Gradient Theme
              </label>
              <DateTimePicker
                value={dateRange}
                onChange={(dates) => setDateRange(dates as [Date, Date])}
                mode="range"
                showTime={false}
                locale={fr}
                styles={gradientTheme}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                Hotel Booking Theme
              </label>
              <HotelBookingExample />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                Material Theme
              </label>
              <MaterialExample />
            </div>
          </div>
        </section>

        {/* Dark Mode Examples */}
        <section
          style={{
            background: "#1f2937",
            borderRadius: "1rem",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            border: "1px solid #374151",
            padding: "2rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "white",
              marginBottom: "1.5rem",
            }}
          >
            Dark Mode Examples
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#d1d5db",
                }}
              >
                Dark Mode Single
              </label>
              <DateTimePicker
                value={singleDate}
                onChange={(date) => setSingleDate(date as Date)}
                mode="single"
                showTime
                darkMode={true}
                locale={enUS}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#d1d5db",
                }}
              >
                Dark Mode Range
              </label>
              <DateTimePicker
                value={dateRange}
                onChange={(dates) => setDateRange(dates as [Date, Date])}
                mode="range"
                showTime={false}
                darkMode={true}
                locale={enUS}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#d1d5db",
                }}
              >
                Dark Mode with CSS
              </label>
              <DateTimePicker
                value={singleDate}
                onChange={(date) => setSingleDate(date as Date)}
                mode="single"
                showTime
                darkMode={true}
                locale={enUS}
              />
            </div>
          </div>
        </section>

        {/* Additional Examples */}
        <section
          style={{
            background: "white",
            borderRadius: "1rem",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e5e7eb",
            padding: "2rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#1f2937",
              marginBottom: "1.5rem",
            }}
          >
            Additional Examples
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                Clean Range Selection
              </label>
              <CleanRangeExample />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                With Confirmation
              </label>
              <ConfirmationExample />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                Time Only
              </label>
              <TimePickerExample />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                Week Range
              </label>
              <WeekRangeExample />
            </div>
          </div>
        </section>

        {/* Localization Examples */}
        <section
          style={{
            background: "white",
            borderRadius: "1rem",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e5e7eb",
            padding: "2rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#1f2937",
              marginBottom: "1.5rem",
            }}
          >
            Localization Examples
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                Japanese (ja)
              </label>
              <DateTimePicker
                value={singleDate}
                onChange={(date) => setSingleDate(date as Date)}
                mode="single"
                showTime
                locale={ja}
                styles={modernTheme}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                German (de)
              </label>
              <DateTimePicker
                value={singleDate}
                onChange={(date) => setSingleDate(date as Date)}
                mode="single"
                showTime
                locale={de}
                styles={modernTheme}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                Chinese (zh)
              </label>
              <DateTimePicker
                value={singleDate}
                onChange={(date) => setSingleDate(date as Date)}
                mode="single"
                showTime
                locale={zhCN}
                styles={modernTheme}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                Arabic (ar)
              </label>
              <DateTimePicker
                value={singleDate}
                onChange={(date) => setSingleDate(date as Date)}
                mode="single"
                showTime
                locale={ar}
                styles={modernTheme}
              />
            </div>
          </div>
        </section>

        <footer
          style={{
            textAlign: "center",
            padding: "2rem 0",
            fontSize: "0.875rem",
            color: "#6b7280",
          }}
        >
          <p>Supports multiple locales, themes, and custom styling options</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
