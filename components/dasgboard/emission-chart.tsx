"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "./style.css";
import { useGetDashboardCompany } from "@/hook/dashboard/useGetDashboardCompany";

const colors = ["#1976d2", "#2e7d32", "#f57c00", "#9c27b0", "#d32f2f"];

const EmissionsComparisonChart: React.FC = () => {
  const { t } = useTranslation();
  const {
    isLoading,
    isError,
    error,
    data: companies,
  } = useGetDashboardCompany();

  // Loading state
  if (isLoading) return <p className="chart-loading">{t("chart.status.loading")}</p>;

  // Error state
  if (isError)
    return (
      <p className="chart-error">
        {t("chart.status.error")}: {error instanceof Error ? error.message : "Unknown"}
      </p>
    );

  // No data
  if (!companies || companies.length === 0)
    return <p className="chart-no-data">{t("chart.status.noData")}</p>;

  const months = companies[0].emissions.map((e) => e.yearMonth);
  const data = months.map((month) => {
    const obj: Record<string, number | string> = { month };
    companies.forEach((c) => {
      const emission = c.emissions.find((e) => e.yearMonth === month);
      obj[c.name] = emission?.emissions ?? 0;
    });
    return obj;
  });

  return (
    <div className={"chart-container"}>
      <h3>{t("chart.companiesMonthlyEmissions")}</h3>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            label={{
              value: t("chart.month"),
              position: "insideBottom",
              offset: -5,
            }}
          />
          <YAxis
            label={{
              value: t("chart.emissions"),
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />
          <Legend />
          {companies.map((c, idx) => (
            <Line
              key={c.id}
              type="monotone"
              dataKey={c.name}
              stroke={colors[idx % colors.length]}
              name={c.name}
              activeDot={{ r: 6 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmissionsComparisonChart;
