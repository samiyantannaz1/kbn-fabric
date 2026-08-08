import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import OffcanvasMenu from "@/components/OffcanvasMenu/OffcanvasMenu";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <OffcanvasMenu />
      <main>
  
          {children}

    
      </main>
<Footer/>
 <ScrollToTop />
    </>
  );
}

export default MainLayout;