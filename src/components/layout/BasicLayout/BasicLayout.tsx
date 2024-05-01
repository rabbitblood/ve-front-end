import { PropsWithChildren } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function BasicLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
