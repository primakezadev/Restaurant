"use client"

import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import { useState } from "react";

const links =
[
    {id: 1, title: "Homepage", url: "/"},
    { id: 2, title: "Menu", url:"/menu"  },
    {id: 3, title: "Working Hours", url:"/"},
    {id: 4, title: "Contact", url:"/"}   
]
const Menu = () => {
  const [open, setOpen] = useState(false);
  console.log("open state:", open);

  return (
    <div>
      <Image
        src="/assets/logo.jpg"
        alt="Logo"
        width={35}
        height={20}
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      />
      <div>
        {links.map(item=>(
            <Link href={item.url} key={item.id}>
                {item.title}
            </Link>
        ))}
      </div>
      
    </div>

  );
};

export default Menu;
