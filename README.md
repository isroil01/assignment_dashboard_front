# Carbon Emissions Dashboard

This is a **web-based Carbon Emissions Dashboard** built as a frontend developer assignment for HanaLoop. It allows executives and managers to visualize greenhouse gas emissions of companies and their affiliates, helping them plan for carbon taxes and sustainability initiatives.

---

## 📝 Project Overview

The dashboard includes:

- **Navigation Drawer** for easy access to different pages.
- **Dashboard Page** showing overview stats and emissions data using charts.
- **Companies Page** displaying all companies with key metrics.
- **Reports Page** to create and view monthly reports linked to companies.
- **Profile Page** to show user info.
- **Settings Page** to change language (English/Korean).
- **Loading and Error States** for realistic API behavior.

The app is **frontend-focused**, using modern React and Next.js best practices with TypeScript.

---

## ⚙️ Tech Stack & Libraries

- **Next.js 14+ + React 18 + TypeScript**: Framework and language for building a modern, type-safe frontend.
- **Axios**: For HTTP requests to the mock API.
- **React Query (`useQuery`)**: For fetching, caching, and managing server state efficiently. This avoids unnecessary re-fetches and improves performance.
- **i18next (`react-i18next`)**: For multi-language support (English & Korean).
- **Recharts**: For rendering interactive and responsive charts for emissions data.
- **CSS**: Modular and maintainable styling for a clean design.
- **Lucide React**: For lightweight icons.

**Why these were chosen:**

- `useQuery` + Axios provides **clean data fetching with caching, loading, and error states** out-of-the-box.
- Recharts makes **visualizing emissions trends simple and interactive**.
- i18n allows **multi-language support** for international users.
- CSS keeps styling **simple, customizable, and performant**.

---

## 💾 Data Model

The frontend uses the following types:

**Company**
```ts
type Company = {
  id: string;
  name: string;
  country: string;
  emissions: GhgEmission[];
};
GhgEmission

ts
Copy code
type GhgEmission = {
  yearMonth: string;
  source: string;
  emissions: number;
};
Post

ts
Copy code
type Post = {
  id: string;
  title: string;
  resourceUid: string; // Company.id
  dateTime: string;
  content: string;
};
🖥 Pages Overview
Dashboard Page:
Shows overview cards with stats like total countries, total companies, highest emitter, and top emitting industry. Includes charts showing emissions trends.

Companies Page:
Lists all companies with key metrics such as country, total emissions, average monthly emissions, and latest report. Easy navigation to reports per company.

Reports Page:
Allows creating new reports and viewing existing reports linked to companies and months. Includes loading, error, and empty states.

Profile Page:
Displays user information (mocked for this assignment).

Settings Page:
Allows changing the language between English and Korean.

🚀 How to Run Locally
Clone the repository

bash
Copy code
git clone https://github.com/isroil01/assignment_dashboard_front.git
cd assignment_dashboard_front
Install dependencies

bash
Copy code
npm install
Run the development server

bash
Copy code
npm run dev
Open http://localhost:3000 in your browser.

🧩 Features & Assumptions
Dashboard shows overview stats: total countries, total companies, highest emitter, top industry emitter.

Companies page lists all companies with emissions and latest reports.

Posts are linked to a company by resourceUid and month.

API simulates network latency (200–800ms) and occasional failures (15%) for realistic testing.

Multi-language support for English and Korean.

Focus is entirely on frontend implementation; backend is mocked for testing purposes.

Responsive design prioritizes usability for managers and executives.

📐 Architecture Overview
Pages: Dashboard, Companies, Reports, Profile, Settings using Next.js App Router.

Components: Modular React components like OverviewCard, EmissionChart, CreatePost, CompanyCard.

Hooks: Custom hooks (useGetReports, useGetDashboard, useGetCompanies) using useQuery for fetching data.

State Management: Local component state + React Query for server data.

Error Handling: Loading, error, and empty states implemented for all data fetching.

Design: Clean and modern with focus on usability and clarity.

⚖️ Trade-offs & Notes
No heavy UI libraries (e.g., MUI) were used to show custom component implementation skills.

CSS-based styling instead of Tailwind to demonstrate control over design.

Limited dataset for demonstration purposes.

Mock API allows testing latency, error handling, and rollback behavior.

⏱ Time to Complete
Focused Time: ~4 hours

Tools Used: VSCode, Node.js, Next.js, Git, GitHub, ChatGpt

## and i have included .env file on purpose because it will be easy to test and there is nothing importnat inside .env 
