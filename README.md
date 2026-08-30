<div align="center">

# 📄 PDF Saarthi

### Ask your PDF. Understand it instantly.

An AI-powered PDF question-answering application that helps users understand documents by asking questions directly from their uploaded PDFs.

<br>

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Open%20PDF%20Saarthi-2563EB?style=for-the-badge)](https://pdf-saarthi.vercel.app/)
[![GitHub](https://img.shields.io/badge/Source%20Code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SameerKumar751/pdf-saarthi)

<br><br>

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=20232A)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![OpenRouter](https://img.shields.io/badge/OpenRouter-7C3AED?style=flat-square)

</div>

---

## Overview

**PDF Saarthi** is a full-stack AI application built to make information inside PDF documents easier to access and understand.

Instead of manually searching through long documents, users can upload a PDF and ask questions about its content in natural language. Saarthi processes the document and uses an AI model to generate relevant answers.

The application combines a React-based frontend with a Node.js/Express backend, PDF text extraction, and AI-powered question answering.

---

## ✦ Features

- 📄 Upload PDF documents directly from the interface
- 💬 Ask questions about the uploaded document
- 🤖 AI-generated answers based on PDF content
- 🧠 Natural-language interaction with documents
- 🛡️ PDF-only file validation with a 10 MB upload limit
- 🌙 Light and dark theme support
- 📱 Responsive design for desktop and mobile
- 🔐 API credentials managed through environment variables

---

## How It Works

```text
             USER
               │
               ▼
        ┌──────────────┐
        │  Upload PDF  │
        └──────┬───────┘
               │
               ▼
        ┌────────────────┐
        │ PDF Processing │
        │   pdf-parse    │
        └──────┬─────────┘
               │
               ▼
        ┌──────────────┐
        │ Ask Question │
        └──────┬───────┘
               │
               ▼
        ┌────────────────┐
        │  AI Processing │
        │   OpenRouter   │
        └──────┬─────────┘
               │
               ▼
        ┌──────────────┐
        │    Answer    │
        └──────────────┘
```
## 🛠️ Tech Stack

### Frontend

* React — Component-based user interface
* Vite — Development server and build tooling
* CSS — Responsive styling, themes and animations

### Backend

* Node.js — JavaScript runtime
* Express.js — REST API and server
* Multer — PDF file upload handling
* pdf-parse — PDF text extraction
* CORS — Cross-origin communication
* dotenv — Environment configuration

### AI

* OpenRouter API — AI model integration
* NVIDIA Nemotron — Model used for question answering

## 🌐 Deployment

The application is deployed as a full-stack project with the frontend and backend hosted separately.

* Frontend: Vercel
* Backend: Render

<div align="center">
<a href="https://pdf-saarthi.vercel.app/">
<img src="https://img.shields.io/badge/🚀%20Open%20PDF%20Saarthi-2563EB?style=for-the-badge" alt="Open PDF Saarthi">
</a>
</div>

## 🎓 Project

PDF Saarthi was developed as the final project for MERN Stack Training.

The project brings together frontend development, REST APIs, file handling, PDF processing, and AI integration into a complete full-stack application.
<div align="center">
Developer: Sameer Kumar
<br>
</div>

