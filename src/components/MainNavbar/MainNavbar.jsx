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
  const menuItems = ["Prezzario", "Mappa", "Contatti"];

  return (
    <main className="dark text-foreground bg-background">
      <Navbar>
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <Image src="/imgs/logo_black.jpg" width={80} height={80} />
            <p className="font-bold text-inherit">Il salotto delle stelle</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarBrand>
            <Image src="/imgs/logo_black.jpg" width={80} height={80} />
            <p className="font-bold text-inherit">Il salotto delle stelle</p>
          </NavbarBrand>
          <NavbarItem>
            <Link color="foreground" href="#Trattamenti">
              Trattamenti
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#Mappa" color="foreground">
              Mappa
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#Contatti">
              Contatti
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color="foreground"
                href={`#${item}`}
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </main>
  );
}
