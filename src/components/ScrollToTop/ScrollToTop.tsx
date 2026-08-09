


// import { useEffect, useState } from "react";
// import { ArrowUp } from "lucide-react";
// import { useLocation } from "react-router-dom";

// function ScrollToTop() {
//   const [visible, setVisible] = useState(false);

//   const { pathname } = useLocation();

//   // =========================
//   // Reset scroll on route change
//   // =========================

//   useEffect(() => {
//     // اجرای بعد از تغییر Route و رندر صفحه جدید
//     requestAnimationFrame(() => {
//       window.scrollTo(0, 0);
//     });
//   }, [pathname]);

//   // =========================
//   // Show / Hide button
//   // =========================

//   useEffect(() => {
//     const handleScroll = () => {
//       setVisible(window.scrollY > 400);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // =========================
//   // Manual scroll to top
//   // =========================

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <button
//       onClick={scrollToTop}
//       className={`
//         fixed
//         bottom-6
//         right-6
//         z-40
//         flex
//         h-12
//         w-12
//         items-center
//         justify-center
//         rounded-full
//         bg-[#C08A5B]
//         text-white
//         shadow-lg
//         transition-all
//         duration-300
//         hover:-translate-y-1
//         hover:bg-[#A97449]
//         ${
//           visible
//             ? "translate-y-0 opacity-100"
//             : "pointer-events-none translate-y-5 opacity-0"
//         }
//       `}
//       aria-label="Scroll to top"
//     >
//       <ArrowUp size={22} />
//     </button>
//   );
// }

// export default ScrollToTop;




import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const { pathname } = useLocation();

  // =========================
  // Scroll to top on route change
  // =========================

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
      });
    });
  }, [pathname]);

  // =========================
  // Show / Hide Arrow
  // =========================

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================
  // Scroll to Top
  // =========================

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed
        bottom-6
        right-6
        z-40

        flex
        h-12
        w-12
        items-center
        justify-center

        rounded-full

        bg-[#C08A5B]
        text-white

        shadow-lg

        transition-all
        duration-300

        hover:-translate-y-1
        hover:bg-[#A97449]

        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
        }
      `}
      aria-label="Scroll to top"
    >
      <ArrowUp
        size={22}
        strokeWidth={2}
      />
    </button>
  );
}

export default ScrollToTop;