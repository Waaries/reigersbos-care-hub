import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Mededelingen from "./Mededelingen";
import FloatingSideButtons from "./FloatingSideButtons";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-[112px] lg:pt-[150px]">
        {children}
        <Mededelingen />
      </main>
      <Footer />
      <FloatingSideButtons />
    </div>
  );
};

export default Layout;
