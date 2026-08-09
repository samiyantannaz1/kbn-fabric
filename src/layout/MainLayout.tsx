// import Footer from "@/components/Footer/Footer";
// import Navbar from "@/components/Navbar/Navbar";
// import OffcanvasMenu from "@/components/OffcanvasMenu/OffcanvasMenu";
// import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
// function MainLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <>
//       <Navbar />
//       <OffcanvasMenu />
//       <main>
  
//           {children}

    
//       </main>
// <Footer/>
//  <ScrollToTop />
//     </>
//   );
// }

// export default MainLayout;


import { Outlet } from "react-router-dom";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import OffcanvasMenu from "@/components/OffcanvasMenu/OffcanvasMenu";
function MainLayout() {
  return (
    <>
      <Navbar />
      <OffcanvasMenu />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;