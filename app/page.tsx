import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-3xl font-medium text-sky-600">
      Hello lms
      <Button variant="outline">Click me</Button>
    </div>
  );
}
