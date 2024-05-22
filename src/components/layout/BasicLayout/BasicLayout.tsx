import { HTMLAttributes, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/organisms/Header/Header";
import { useLocation } from "react-router-dom";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  noFooter?: boolean;
}

export default function BasicLayout({ children, noFooter = false }: Props) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      <main>{children}</main>
      {noFooter ? "" : <Footer />}
    </>
  );
}
