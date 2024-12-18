// layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
// import Navbar from "../components/Navbar";
import { CartProvider } from "./context/CartContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import MobNavbar from "../components/MobNavbar";
import FeedbackSection from "../components/FeedbackSection";
import Footer from "../components/Footer";
import { FavouriteProvider } from "./context/FavouriteContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Glam Glow",
  description: "Generated by create next app",
};

export default function RootLayout({children} : {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
         <FavouriteProvider>
         <header>
            <Header/>
          </header>
          <nav>
            {/* <MobNavbar/> */}
          </nav>
          {/* Main content */}
          {children}
          {/* Feedback section  */}

          <div>
        <FeedbackSection/>
      </div>

          {/* Footer Section */}
          <footer>
            <Footer/>
          </footer>
         </FavouriteProvider>
        </CartProvider>
      </body>
    </html>
  );
}


// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// import { CartProvider } from "./context/CartContext";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import MobNavbar from "./components/MobNavbar";
// import Footer from "./components/Footer";


// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Glam Glow",
//   description: "Generated by create next app",
// };

// export default function RootLayout({children} : {children: React.ReactNode}) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//      {/* Header  */}
//      <header>
//         <Header/>
//      </header>
//       {/* Navigation  */}
//       <nav>
//          <Navbar/>
//       </nav>
//       <nav>
//         <MobNavbar/>
//       </nav>
//         {/* Main content  */}
//         <CartProvider>
//         {children}
//         </CartProvider>
//         {/* Footer Section  */}
//       <footer>
//         <Footer/>
//       </footer>
//       </body>
//     </html>
//   );
// }