import Header from "@/app/(other)/components/Header";
import { ReactNode } from "react";

export default function OtherPageLayout({ children }: { children: ReactNode }) {
  return (
    <section className="w-full h-full p-6 flex flex-col gap-6">
      <Header />
      {children}
    </section>
  )
}
