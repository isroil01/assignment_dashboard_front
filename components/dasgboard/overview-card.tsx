"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Building2, Earth, Biohazard, TestTubesIcon } from "lucide-react";
import { useGetDashboard } from "@/hook/dashboard/useGetDashboard";

export default function OverviewCard() {
  const { t } = useTranslation();
  const { data, isLoading, isError } = useGetDashboard();

  if (isLoading) {
    return <p className="overview-status">{t("overview.status.loading")}</p>;
  }

  if (isError) {
    return <p className="overview-status">{t("overview.status.error")}</p>;
  }

  if (!data) {
    return <p className="overview-status">{t("overview.status.noData")}</p>;
  }

  return (
    <div className="stat-cards">
      <div className="stat-card">
        <div className="stat-content">
          <div className="stat-text">
            <h3 className="stat-title">{t("overview.totalCountries")}</h3>
            <p className="stat-value">{data.totalCountry}</p>
          </div>
          <div className="stat-icon" style={{ backgroundColor: "#E8F2FF" }}>
            <Earth size={24} />
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-content">
          <div className="stat-text">
            <h3 className="stat-title">{t("overview.totalCompanies")}</h3>
            <p className="stat-value">{data.totalCompany}</p>
          </div>
          <div className="stat-icon" style={{ backgroundColor: "#FFF4E6" }}>
            <Building2 size={24} />
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-content">
          <div className="stat-text">
            <h3 className="stat-title">
              {t("overview.highestEmittingCompany")}
            </h3>
            <p className="stat-value">{data.highestEmit}</p>
          </div>
          <div className="stat-icon" style={{ backgroundColor: "#F0FDF4" }}>
            <Biohazard size={24} />
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-content">
          <div className="stat-text">
            <h3 className="stat-title">{t("overview.topEmissionSource")}</h3>
            <p className="stat-value">{data.topEmit}</p>
          </div>
          <div className="stat-icon" style={{ backgroundColor: "#FEF2F2" }}>
            <TestTubesIcon size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
