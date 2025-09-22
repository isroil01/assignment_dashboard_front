"use client";

import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import "../../style/company.css";
import { useTranslation } from "react-i18next";
import { useGetDashboardCompany } from "../../hook/dashboard/useGetDashboardCompany";

const CompaniesPage: React.FC = () => {
  const { t } = useTranslation();
  const { data, isLoading, isError, error } = useGetDashboardCompany();

  if (isLoading)
    return <p className="companies-loading">{t("companies.status.loading")}</p>;

  if (isError)
    return (
      <p className="companies-error">
        {t("companies.status.error")}:{" "}
        {error instanceof Error ? error.message : "Unknown"}
      </p>
    );

  if (!data || data.length === 0)
    return <p className="companies-no-data">{t("companies.status.noData")}</p>;

  return (
    <div className="companies-page">
      <h2>{t("companies.overviewTitle")}</h2>
      <table className="companies-table">
        <thead>
          <tr>
            <th>{t("companies.table.company")}</th>
            <th>{t("companies.table.country")}</th>
            <th>{t("companies.table.totalEmissions")}</th>
            <th>{t("companies.table.avgMonthly")}</th>
            <th>{t("companies.table.latestReport")}</th>
            <th>{t("companies.table.trend")}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((company) => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>{company.country}</td>
              <td>{company.totalEmissions}</td>
              <td>{company.avgMonthly}</td>
              <td>{company.latestReport}</td>
              <td style={{ width: 150, height: 50 }}>
                <ResponsiveContainer width="100%" height={50}>
                  <LineChart data={company.emissions}>
                    <Line
                      type="monotone"
                      dataKey="emissions"
                      stroke="#1976d2"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompaniesPage;
