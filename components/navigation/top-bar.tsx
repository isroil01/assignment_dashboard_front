"use client";

import { Search, Menu } from "lucide-react";
import "./style.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useGetUserData } from "@/hook/useGetUserData";
import { stringToMediumColor } from "@/utils/color-generator";

interface TopBarProps {
  onToggle: () => void;
}

export default function TopBar({ onToggle }: TopBarProps) {
  const { t } = useTranslation();

  const { data } = useGetUserData();

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-button" onClick={onToggle}>
          <Menu size={20} />
        </button>
        <div className="search-container">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder={t("topbar.searchPlaceholder")}
            className="search-input"
          />
        </div>
      </div>
      <div className="header-right">
        <div className="user-profile">
          <div
            className="user-avatar"
            style={{
              backgroundColor: stringToMediumColor(data?.username || "U"),
            }}
          >
            {data?.username?.slice(0, 2)}
          </div>
          <div className="user-info">
            <span className="user-name">{data?.username}</span>
            <span className="user-role">{t("topbar.userRole")}</span>{" "}
          </div>
        </div>
      </div>
    </header>
  );
}
