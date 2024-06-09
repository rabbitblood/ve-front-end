import { HTMLAttributes } from "react";
import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  noFooter?: boolean;
}

export default function BasicLayout({ children, noFooter = false }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {noFooter ? "" : <Footer />}
    </>
  );
}
