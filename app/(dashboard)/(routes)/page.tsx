import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-3xl font-medium text-sky-600">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
