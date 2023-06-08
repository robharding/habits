"use client";

import { X, CheckCheck } from "lucide-react";
import { Toggle } from "./ui/toggle";
import { useState } from "react";

export default function HabitToggle() {
  const [toggled, setToggled] = useState(false);

  return (
    <Toggle
      variant="outline"
      aria-label="Toggle italic"
      onClick={() => setToggled((prev) => !prev)}
      size="lg"
    >
      {!toggled ? (
        <X className="h-6 w-6" />
      ) : (
        <CheckCheck className="h-6 w-6" strokeWidth={3} />
      )}
    </Toggle>
  );
}
