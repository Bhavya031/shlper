"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Avatar,
} from "@nextui-org/react";

export default function Profile({ children }) {
  return (
    <Dropdown className="questrial-regular dark text-foreground bg-background">
      <DropdownTrigger>
        <Avatar src={children}  alt="Logo"/>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">Profile</DropdownItem>
        <DropdownItem href="/api/auth/signout" color="danger">
            Log Out
          </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
