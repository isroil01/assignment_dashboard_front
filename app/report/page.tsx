"use client";

import React, { useState } from "react";
import "../../style/report.css";
import CreatePost from "@/components/report/create-post";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useGetReports } from "@/hook/report/useGetReports";
import { useCreatePost } from "@/hook/report/useCreatePost";

const ReportsPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();
  const { data, isLoading, error, isError } = useGetReports();
  const { createPost } = useCreatePost();

  const handleAddReport = (newPost: {
    title: string;
    resourceUid: string;
    dateTime: string;
    content: string;
  }) => {
    createPost(newPost);
    setShowModal(false);
  };

  if (isLoading)
    return <p className="reports-loading">{t("reports.status.loading")}</p>;

  if (isError)
    return (
      <p className="reports-error">
        {t("reports.status.error")}:{" "}
        {error instanceof Error ? error.message : "Unknown"}
      </p>
    );

  if (!data || data.length === 0)
    return <p className="reports-no-data">{t("reports.status.noData")}</p>;

  return (
    <div className="reports-page">
      <h2>
        {t("reports.title")}
        <button
          onClick={() => setShowModal(true)}
          className="new-report-button"
        >
          <Plus /> {t("reports.newReport")}
        </button>
      </h2>
      <div className="reports-list">
        {data.map((report) => (
          <div key={report.id} className="report-card">
            <div className="report-header">
              <h3>{report.title}</h3>
            </div>
            <p className="report-company">{report.resourceUid}</p>
            <p className="report-content">{report.content}</p>
            <span className="report-month">{report.dateTime}</span>
          </div>
        ))}
      </div>
      {showModal && <CreatePost onAdd={handleAddReport} close={()=>setShowModal(false)} />}
    </div>
  );
};

export default ReportsPage;
