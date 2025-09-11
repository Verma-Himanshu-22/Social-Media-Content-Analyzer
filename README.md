# 📊 Social Media Content Analyzer

 [![Version](https://img.shields.io/badge/version-1.0.0-yellow)](package.json)  

---

## 📌 Overview

The Social Media Content Analyzer is a full-stack web application designed to empower content creators, marketers, and social media managers with AI-driven insights. Users can upload their content as a PDF or image file, and the application's intelligent backend provides a detailed analysis to help optimize their social media strategy :

- ✅ Sentiment (positive/negative/neutral)
- ✅ Readability Metrics (word count, sentence count, complexity)
- 🚀 AI-Generated Engagement Suggestions
This tool helps content creators, marketers, and businesses **evaluate content quality** and optimize their social media strategy.

---

## 🏗️ Project Structure

This project follows a monorepo structure, with the frontend and backend code organized in separate directories.

![Project Structure :](/assets/images/Screenshot 2025-09-11 083301.png)

---

## ⚡ Tech Stack

- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Node.js + Express
- **AI/ML API:** Google Generative AI / NLP APIs
- **Deployment:** Vercel (frontend) + Render/Heroku (backend)

---

## 🚀 Getting Started

### Clone the Repository

```
git clone https://github.com/your-username/social-media-content-analyzer.git
cd social-media-content-analyzer

```

## Backend Setup :

```
cd server
npm install
npm run dev

```

### Create a .env file inside /server:

```
PORT=5001
FRONTEND_URL=http://localhost:5173
GEMINI_API_KEY=your_api_key_here

```

## Frontend Setup :

```
cd client
npm install
npm run dev

```
### Create a .env file inside /client:

```
VITE_API_URL=url_of_your_hosted_backend or localhost_url

```

## 📸 Screenshots :

- (/assets/images/Screenshot 2025-09-11 084645.png)
- (/assets/images/Screenshot 2025-09-11 084656.png)
- (/assets/images/Screenshot 2025-09-11 084705.png)

## 🤝 Contributing :

- Fork the repo
- Create a new branch (feature/your-feature)
- Commit your changes
- Push and create a PR

## 📜 License

- Copyright © 2025 Himanshu Verma. 


- You are free to use, modify, and distribute this software in accordance with the terms of the MIT License.
