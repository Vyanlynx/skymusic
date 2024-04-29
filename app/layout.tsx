'use client'
// import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import MenuBar from "@/components/blok/sideMenuBar/MenuBar";
import HeaderWrapper from "@/components/blok/Header/HeaderWrapper";
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
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          <StyledComponentsRegistry>
            <header><HeaderWrapper /></header>
            <div className="d-flex">
              <aside className="menubar"><MenuBar /></aside>
              <section className="layoutChild">{children}</section>
              <footer></footer>
            </div>
            <BootstrapClient />
          </StyledComponentsRegistry>
        </Provider>
      </body>

    </html>
  );
}
