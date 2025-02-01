import React from "react";
import { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import DateInput from "./Component/DateInput";
import DateOutput from "./Component/DateOutput";

export default function App() {
  const queryClient = new QueryClient();

  const [dayInput, setDayInput] = useState(0);
  const [monthInput, setMonthInput] = useState(0);
  const [yearInput, setYearInput] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <main className="mx-4 my-6 flex flex-col items-center gap-12">
        <DateInput
          setDayInput={setDayInput}
          setMonthInput={setMonthInput}
          setYearInput={setYearInput}
        />
        <DateOutput
          dayInput={dayInput}
          monthInput={monthInput}
          yearInput={yearInput}
        />
      </main>
    </QueryClientProvider>
  );
}
