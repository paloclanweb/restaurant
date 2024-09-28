"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

interface ILink {
  id: number;
  title: string;
  url: string;
}
const links: ILink[] = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];
const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Image
        src={open ? "/close.png" : "/open.png"}
        alt=""
        width={20}
        height={20}
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      />
      {open ? (
        <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item: ILink) => (
            <Link href={item.url} key={item.id}>
              {item.title}
            </Link>
          ))}
          <Link href={'/login'}>Login</Link>
          
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default Menu;
