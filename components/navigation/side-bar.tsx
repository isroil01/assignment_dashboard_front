"use client";

import {
  LayoutDashboard,
  FileText,
  Settings,
  Power,
  Building2,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import "./style.css";
import { useTranslation } from "react-i18next";
import { useLogout } from "@/hook/useLogout";

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const { t } = useTranslation();
  const path = usePathname();
  const router = useRouter();
  const { logout } = useLogout();

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: t("sidebar.dashboard"),
      link: "/dashboard",
    },
    { icon: Building2, label: t("sidebar.companies"), link: "/company" },
    { icon: FileText, label: t("sidebar.reports"), link: "/report" },
    { icon: User, label: t("sidebar.profile"), link: "/profile" },
    { icon: Settings, label: t("sidebar.settings"), link: "/setting" },
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-content">
        <div className="sidebar-logo">
          <Image
            width={420}
            height={70}
            alt="logo"
            src={isOpen ? `/car.png` : "/mini.png"}
          />
        </div>
        <div className="sidebar-menu">
          {menuItems.map((item, index) => (
            <Link
              href={`${item.link}`}
              key={index}
              className={`sidebar-item ${item.link == path ? "active" : ""}`}
            >
              <item.icon size={20} />
              {isOpen && <span className="sidebar-label">{item.label}</span>}
            </Link>
          ))}
        </div>
        <div className="sidebar-footer">
          <div className="sidebar-item" onClick={handleLogout}>
            <Power size={20} />
            {isOpen && (
              <span className="sidebar-label">{t("sidebar.logout")}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
