import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DateNote } from "../DateNote";
import { DateNoteType } from "../../../types/dates";

describe("DateNote", () => {
  const sampleNotes: DateNoteType[] = [
    {
      date: new Date("2024-03-15"),
      note: "Test note for single date",
    },
    {
      startDate: new Date("2024-03-20"),
      endDate: new Date("2024-03-22"),
      note: "Test note for date range",
    },
  ];

  it("renders note for hovered date", () => {
    render(
      <DateNote notes={sampleNotes} hoveredDate={new Date("2024-03-15")} />,
    );
    expect(screen.getByText("Test note for single date")).toBeInTheDocument();
  });

  it("renders note for selected date when no hover", () => {
    render(
      <DateNote notes={sampleNotes} selectedDate={new Date("2024-03-15")} />,
    );
    expect(screen.getByText("Test note for single date")).toBeInTheDocument();
  });

  it("renders note for date range", () => {
    render(
      <DateNote
        notes={sampleNotes}
        selectedRange={[new Date("2024-03-20"), new Date("2024-03-22")]}
      />,
    );
    expect(screen.getByText("Test note for date range")).toBeInTheDocument();
  });

  it("prioritizes hover note over selected date note", () => {
    render(
      <DateNote
        notes={sampleNotes}
        hoveredDate={new Date("2024-03-15")}
        selectedDate={new Date("2024-03-20")}
      />,
    );
    expect(screen.getByText("Test note for single date")).toBeInTheDocument();
  });

  it("renders nothing when no matching note found", () => {
    const { container } = render(
      <DateNote notes={sampleNotes} hoveredDate={new Date("2024-03-16")} />,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it("renders nothing when no date provided", () => {
    const { container } = render(<DateNote notes={sampleNotes} />);
    expect(container).toBeEmptyDOMElement();
  });
});
