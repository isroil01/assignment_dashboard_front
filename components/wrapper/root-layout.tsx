"use client";

import React, { useState } from "react";
import Sidebar from "../navigation/side-bar";
import TopBar from "../navigation/top-bar";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  const onToggle = () => {
    setIsOpen(!isOpen);
  };
  const path = usePathname();
  const isAuthPage = path.startsWith("/auth");

  return (
    <div className="dashboard-container">
      {!isAuthPage && <Sidebar isOpen={isOpen} />}
      <div
        className={`main-content ${isOpen ? "sidebar-open" : "sidebar-closed"}`}
      >
        {!isAuthPage && <TopBar onToggle={onToggle} />}
        <main className="dashboard-content">{children}</main>
      </div>
    </div>
  );
}
