"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Image,
} from "@nextui-org/react";
export default function Profile({ children }) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Image src={children} className="h-8" alt="Logo"></Image>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">Profile</DropdownItem>
        <DropdownItem key="copy">Logout</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
