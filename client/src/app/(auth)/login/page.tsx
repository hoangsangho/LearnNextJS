"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Login() {
  const [email] = useState("hoangsangho@gmail.com");
  console.log("Login page");
  return (
    <div>
      <div className="w-[100px] h-[100px] bg-amber-100">Login page</div>
      <Link href={"/"}>Back to homepage</Link>
      <p>{email}</p>
    </div>
  );
}
