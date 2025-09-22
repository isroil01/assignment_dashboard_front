"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "../../style/setting.css";
import { useGetUserData } from "@/hook/useGetUserData";

export default function Settings() {
  const { t, i18n } = useTranslation();
  const { data: settings, isLoading, isError, error } = useGetUserData();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target.id === "language") {
      i18n.changeLanguage(e.target.value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saved settings:", settings);
  };

  if (isLoading)
    return <p className="settings-loading">{t("settings.status.loading")}</p>;

  if (isError)
    return (
      <p className="settings-error">
        {t("settings.status.error")}:{" "}
        {error instanceof Error ? error.message : "Unknown"}
      </p>
    );

  if (!settings)
    return <p className="settings-no-data">{t("settings.status.noData")}</p>;

  return (
    <div className="settings-container">
      <h2 className="settings-title">{t("settings.title")}</h2>

      <div className="settings-card">
        <form className="settings-form" onSubmit={handleSubmit}>
          {/* Username */}
          <div className="settings-item">
            <label htmlFor="username" className="settings-label">
              {t("settings.username")}
            </label>
            <input
              type="text"
              id="username"
              className="settings-input"
              value={settings.username}
              disabled
            />
          </div>

          {/* Email */}
          <div className="settings-item">
            <label htmlFor="email" className="settings-label">
              {t("settings.email")}
            </label>
            <input
              type="email"
              id="email"
              className="settings-input"
              value={settings.email}
              disabled
            />
          </div>

          {/* Password */}
          <div className="settings-item">
            <label htmlFor="password" className="settings-label">
              {t("settings.password")}
            </label>
            <input
              type="password"
              id="password"
              className="settings-input"
              placeholder={t("settings.passwordPlaceholder") || ""}
              disabled
            />
          </div>

          {/* Notifications */}
          <div className="settings-item">
            <label htmlFor="notifications" className="settings-label">
              {t("settings.notifications.label")}
            </label>
            <select id="notifications" className="settings-select" disabled>
              <option value="all">{t("settings.notifications.all")}</option>
              <option value="important">
                {t("settings.notifications.important")}
              </option>
              <option value="none">{t("settings.notifications.none")}</option>
            </select>
          </div>

          {/* Language */}
          <div className="settings-item">
            <label htmlFor="language" className="settings-label">
              {t("settings.language.label")}
            </label>
            <select
              id="language"
              className="settings-select"
              onChange={handleChange}
            >
              <option value="en">{t("settings.language.en")}</option>
              <option value="ko">{t("settings.language.ko")}</option>
            </select>
          </div>

          {/* Theme */}
          <div className="settings-item">
            <label htmlFor="theme" className="settings-label">
              {t("settings.theme.label")}
            </label>
            <select id="theme" className="settings-select" disabled>
              <option value="light">{t("settings.theme.light")}</option>
              <option value="dark">{t("settings.theme.dark")}</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}
