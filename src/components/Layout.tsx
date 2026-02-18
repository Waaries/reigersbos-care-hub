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
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
        <Mededelingen />
      </main>
      <Footer />
      <FloatingSideButtons />
    </div>
  );
};

export default Layout;
