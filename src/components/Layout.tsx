import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col dark:bg-neutral-900 bg-neutral-100">
      <Header />
      <main className="container mx-auto px-4 lg:px-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
