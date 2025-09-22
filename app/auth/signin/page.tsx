"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../style/auth.css";
import { useLogin } from "@/hook/useLogin";

export default function SignIn() {
  const { t } = useTranslation(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isPending, login, isError, error } = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">{t("signin.title")}</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-item">
            <label htmlFor="email" className="auth-label">
              {t("signin.email")}
            </label>
            <input
              type="email"
              id="email"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("signin.emailPlaceholder")}
              required
            />
          </div>

          <div className="auth-item">
            <label htmlFor="password" className="auth-label">
              {t("signin.password")}
            </label>
            <input
              type="password"
              id="password"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t("signin.passwordPlaceholder")}
              required
            />
          </div>

          {/* Error message */}
          {isError && (
            <p className="auth-error">
              {error?.message || t("signin.status.error")}
            </p>
          )}

          <button
            disabled={isPending}
            type="submit"
            className={`auth-button ${isPending ? "loading" : ""}`}
          >
            {isPending ? t("signin.status.loading") : t("signin.button")}
          </button>
        </form>

        <p className="auth-footer">
          {t("signin.footer")}{" "}
          <a href="/auth/signup">{t("signin.signupLink")}</a>
        </p>
      </div>
    </div>
  );
}
