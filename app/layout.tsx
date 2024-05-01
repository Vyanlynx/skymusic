'use client'
import { Quicksand } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import dynamic from 'next/dynamic'
const MenuBar = dynamic(() => import("@/components/blok/sideMenuBar/MenuBar"))
const HeaderWrapper = dynamic(() => import("@/components/blok/Header/HeaderWrapper"))
const Footer = dynamic(() => import("@/components/blok/Footer/Footer"))

import BootstrapClient from "@/utils/BootstrapClient";
import StyledComponentsRegistry from "./registry";
import { Provider } from "react-redux";
import store from "@/redux/store";

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
