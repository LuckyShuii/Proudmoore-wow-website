# 🌊 Proudmoore WoW Website

Refactor of the official [Proudmoore.gg](https://proudmoore.gg/) website, originally built with WordPress.  
🎯 Goal: migrate to **Vue.js** for a fully functional **MVP** as quickly as possible, with all the current live content.

Afterwards, progressively add new features with:

- **Node.js/Express** backend
- Postgres Database
- Docker & Nginx for deployment
- CI

---

## 🚀 Technologies Used

| Frontend                                                                                                              | Backend                                                                                                        | Tools & Deployment                                                                                    |
| --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| ![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)              | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)       | ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) |
| ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) | ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) | ![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)    |
| ![PrimeVue](https://img.shields.io/badge/PrimeVue-4CAF50?style=for-the-badge&logo=primefaces&logoColor=white)         |                                                                                                                |                                                                                                       |

---

## 📌 Roadmap

- [ ] Migrate current content to Vue.js (WIP)
- [ ] Add a Node.js/Express backend
- [ ] Implement a database
- [ ] Containerize with Docker & Nginx reverse proxy
- [ ] Develop new features

---

## 📂 Planned Structure

```bash
Proudmoore-wow-website/
├── frontend/        # Vue.js + TailwindCSS + PrimeVue
├── backend/         # Node.js + Express (REST API)
├── nginx/           # Reverse proxy configuration
├── docker-compose.yml
└── README.md
```

## 🛠 Getting Started

```bash
# 1️⃣ Clone the repository
git clone https://github.com/your-username/Proudmoore-wow-website.git

# 2️⃣ Install frontend dependencies
cd frontend
npm install

# 3️⃣ Start the Vue.js development server
npm run dev
```
