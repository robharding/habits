import { Toggle } from "@/components/ui/toggle";
import { Bold } from "lucide-react";

export default function Home() {
  return (
    <div className="mt-10">
      <h1>Dasboard</h1>
      <Toggle variant="outline" aria-label="Toggle italic">
        <Bold className="h-4 w-4" />
      </Toggle>
    </div>
  );
}
