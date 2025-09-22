"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../style/auth.css";
import { useSighUp } from "@/hook/useSignUp";

export default function SignUp() {
  const { t } = useTranslation();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp, isError, isPending, error } = useSighUp();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signUp({ username, email, password });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">{t("signup.title")}</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-item">
            <label htmlFor="username" className="auth-label">
              {t("signup.username")}
            </label>
            <input
              type="text"
              id="username"
              className="auth-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={t("signup.usernamePlaceholder")}
              required
            />
          </div>

          <div className="auth-item">
            <label htmlFor="email" className="auth-label">
              {t("signup.email")}
            </label>
            <input
              type="email"
              id="email"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("signup.emailPlaceholder")}
              required
            />
          </div>

          <div className="auth-item">
            <label htmlFor="password" className="auth-label">
              {t("signup.password")}
            </label>
            <input
              type="password"
              id="password"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t("signup.passwordPlaceholder")}
              required
            />
          </div>

          {/* Error message */}
          {isError && (
            <p className="auth-error">
              {error?.message || t("signup.status.error")}
            </p>
          )}

          <button
            type="submit"
            className={`auth-button ${isPending ? "loading" : ""}`}
            disabled={isPending}
          >
            {isPending ? t("signup.status.loading") : t("signup.button")}
          </button>
        </form>

        <p className="auth-footer">
          {t("signup.footer")}{" "}
          <a href="/auth/signin">{t("signup.signinLink")}</a>
        </p>
      </div>
    </div>
  );
}
