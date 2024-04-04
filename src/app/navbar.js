import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Profile  from "./components/Element/Profile";
import serach from "./components/Element/searchbar";
// Authicatiion Section
import { getServerSession } from "next-auth";
import { AuthOptions, authOptions } from "./lib/nextAuth";
export default async function App() {
    const session = await getServerSession();
    console.log(session);
    return (
    <Navbar className="dark text-foreground bg-background" maxWidth ='2xl'isBordered='True' height='72px'>
      <NavbarBrand>
        <img src="/Shelper(dark theme).svg" alt="Shelper" className="h-8" />

      </NavbarBrand>
      <NavbarContent className="sm:flex gap-32px" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
          Purpose
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" aria-current="page">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
          Team
          </Link>
        </NavbarItem>
      </NavbarContent>
    <NavbarContent justify="end">

        <NavbarItem>
            {session ? (
                <Profile>{session.user.image}</Profile>
            ) : (
                <Link href="/api/auth/signin" color="foreground">Login</Link>
            )}
        </NavbarItem>
    </NavbarContent>
    <serach></serach>
    </Navbar>
  
  );
}
