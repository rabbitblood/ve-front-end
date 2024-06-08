import { HTMLAttributes } from "react";
import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import StoreProvider from "@/components/redux/StoreProvider";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  noFooter?: boolean;
}

export default function BasicLayout({ children, noFooter = false }: Props) {
  return (
    <>
      <StoreProvider>
        <Header />
      </StoreProvider>
      <main>{children}</main>
      {noFooter ? (
        ""
      ) : (
        <StoreProvider>
          <Footer />
        </StoreProvider>
      )}
    </>
  );
}
