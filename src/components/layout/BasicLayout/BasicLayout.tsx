import { PropsWithChildren, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useLocation } from "react-router-dom";

export default function BasicLayout({ children }: PropsWithChildren) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
