"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./style.css";

interface Post {
  title: string;
  resourceUid: string;
  dateTime: string;
  content: string;
}

interface CreatePostProps {
  onAdd: (post: Post) => void;
  close: () => void;
}

export default function CreatePost({ onAdd, close }: CreatePostProps) {
  const { t } = useTranslation();
  const [post, setPost] = useState<Post>({
    title: "",
    resourceUid: "",
    dateTime: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Show alert if any field is empty
    if (!post.title || !post.resourceUid || !post.dateTime || !post.content) {
      alert(t("createPost.status.emptyFields"));
      return;
    }

    onAdd(post);
    alert(t("createPost.status.success"));
    setPost({ title: "", resourceUid: "", dateTime: "", content: "" });
  };

  return (
    <div className="create-post-modal" onClick={close}>
      <div
        className="create-post-container"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="create-post-title">{t("createPost.title")}</h2>
        <form className="create-post-form" onSubmit={handleSubmit}>
          <div className="create-post-item">
            <label htmlFor="title" className="create-post-label">
              {t("createPost.fields.title.label")}
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="create-post-input"
              value={post.title}
              onChange={handleChange}
              placeholder={t("createPost.fields.title.placeholder")}
            />
          </div>

          <div className="create-post-item">
            <label htmlFor="resourceUid" className="create-post-label">
              {t("createPost.fields.resourceUid.label")}
            </label>
            <input
              type="text"
              id="resourceUid"
              name="resourceUid"
              className="create-post-input"
              value={post.resourceUid}
              onChange={handleChange}
              placeholder={t("createPost.fields.resourceUid.placeholder")}
            />
          </div>

          <div className="create-post-item">
            <label htmlFor="dateTime" className="create-post-label">
              {t("createPost.fields.dateTime.label")}
            </label>
            <input
              type="month"
              id="dateTime"
              name="dateTime"
              className="create-post-input"
              value={post.dateTime}
              onChange={handleChange}
            />
          </div>

          <div className="create-post-item">
            <label htmlFor="content" className="create-post-label">
              {t("createPost.fields.content.label")}
            </label>
            <textarea
              id="content"
              name="content"
              className="create-post-textarea"
              value={post.content}
              onChange={handleChange}
              placeholder={t("createPost.fields.content.placeholder")}
              rows={5}
            />
          </div>

          <button type="submit" className="create-post-button">
            {t("createPost.button")}
          </button>
        </form>
      </div>
    </div>
  );
}
