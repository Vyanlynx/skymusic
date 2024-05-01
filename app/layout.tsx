'use client'
import { Quicksand } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import MenuBar from "@/components/blok/sideMenuBar/MenuBar";
import HeaderWrapper from "@/components/blok/Header/HeaderWrapper";
import BootstrapClient from "@/utils/BootstrapClient";
import StyledComponentsRegistry from "./registry";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Footer from "@/components/blok/Footer/Footer";

const inter = Quicksand({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>SkyMusic</title>
        <link rel="icon" href="/next.svg" sizes="any" />
      </head>
      <body>
        <Provider store={store}>
          <StyledComponentsRegistry>
            <header>
              <HeaderWrapper />
            </header>
            <div className="d-flex">
                <MenuBar />
              <main className="layoutChild">
                {children}
              </main>
            </div>
            <footer>
              <Footer />
            </footer>
            <BootstrapClient />
          </StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
}
