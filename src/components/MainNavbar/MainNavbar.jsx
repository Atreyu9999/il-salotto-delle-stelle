import React from "react";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function App() {
  return (
    <main className="dark text-foreground bg-background">
      <Navbar>
        <NavbarContent
          className="flex sm:flex-col sm:items-center gap-4"
          justify="end"
        >
          <NavbarBrand className="flex">
            <Image
              src="/imgs/logo_black.jpg"
              alt="logo"
              width={80}
              height={80}
            />
            <p className="font-bold text-inherit hidden sm:flex">
              Il salotto delle stelle
            </p>
          </NavbarBrand>
          <NavbarItem className="sm:text-center">
            <Link color="foreground" href="#Trattamenti">
              Trattamenti
            </Link>
          </NavbarItem>
          <NavbarItem className="sm:text-center">
            <Link href="#Mappa" color="foreground">
              Mappa
            </Link>
          </NavbarItem>
          <NavbarItem className="sm:text-center">
            <Link color="foreground" href="#Orari">
              Orari
            </Link>
          </NavbarItem>
          <NavbarItem className="sm:text-center">
            <Link color="foreground" href="#Contatti">
              Social
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </main>
  );
}
