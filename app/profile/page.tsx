"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "../../style/profile.css";
import { useGetUserData } from "../../hook/useGetUserData";

export default function Profile() {
  const { t } = useTranslation();
  const { data, isLoading, error, isError } = useGetUserData();

  if (isLoading) {
    return <p className="profile-loading">{t("profile.status.loading")}</p>;
  }

  if (isError) {
    return (
      <div className="profile-error">
        <p>{t("profile.status.error")}</p>
        <p>{error instanceof Error ? error.message : "Unknown error"}</p>
      </div>
    );
  }

  if (!data) {
    return <p className="profile-empty">{t("profile.status.noData")}</p>;
  }

  return (
    <div className="profile-container">
      <h2 className="profile-title">{t("profile.title")}</h2>
      <div className="profile-card">
        <div className="profile-info">
          <div className="profile-item">
            <span className="profile-label">{t("profile.name")}</span>
            <span className="profile-value">{data.username}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">{t("profile.email")}</span>
            <span className="profile-value">{data.email}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">{t("profile.role")}</span>
            <span className="profile-value">Admin</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">{t("profile.joined")}</span>
            <span className="profile-value">{data.createdAt || "-"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
