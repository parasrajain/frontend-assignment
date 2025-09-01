# Frontend Assignment – React + Storybook

This project is a frontend assignment built using **React**, **TypeScript**, **Tailwind CSS**, and **Storybook**.  
It demonstrates reusable UI components (`InputField`, `DataTable`, etc.) with responsive design, animations, and interactive states.

---

## ✨ Features
- ⚛️ **React + TypeScript** for type-safe UI components
- 🎨 **Tailwind CSS** for modern, responsive styling
- 📝 **Storybook** for interactive component previews
- 🌗 Dark mode ready
- 📦 Reusable UI components:
  - **InputField** (with label, validation, error states, password toggle, clear button)
  - **DataTable** (sortable columns, row selection, hover states, animations)
- ⚡ Smooth transitions with **Framer Motion**
- ✅ Accessible & responsive design

---

## 📂 Folder Structure
frontend-assignment/
│
├── .storybook/ # Storybook config
│ ├── main.ts # Storybook settings & addons
│ └── preview.ts # Global decorators/themes
│
├── src/
│ ├── components/
│ │ ├── InputField.tsx
│ │ ├── DataTable.tsx
│ │ └── ...
│ ├── stories/
│ │ ├── InputField.stories.tsx
│ │ ├── DataTable.stories.tsx
│ │ └── ...
│ ├── App.tsx # Demo usage
│ ├── index.tsx
│ └── ...
│
├── package.json
└── README.md



## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/parasrajain/frontend-assignment
cd frontend-assignment

2️⃣ Install Dependencies
npm install

3️⃣ Run the App
npm start
Runs the React app at http://localhost:3000.

4️⃣ Run Storybook
npm run storybook
Opens Storybook at http://localhost:6006.

📘 Storybook Deployment (Chromatic)
We use Chromatic to publish Storybook online.

npm run chromatic
Live https://www.chromatic.com/build?appId=68b5c1fd7568949629911ce6&number=2
👉 View Deployed Storybook

📄 Submission Guidelines
As per assignment requirements:

GitHub Repository https://github.com/parasrajain/frontend-assignment

Clear folder structure

This README file with setup instructions and explanation

Storybook Preview Link https://www.chromatic.com/build?appId=68b5c1fd7568949629911ce6&number=2

Published via Chromatic


🛠️ Approach
Designed modular, reusable components instead of hardcoded UI.

Used Storybook for isolated development and visual testing.

Added animations and transitions using Framer Motion for smooth interactions.

Ensured responsive design with Tailwind grid/flex utilities.

Used TypeScript for type-safety and better developer experience.


🚀 Tech Stack
React 18 + TypeScript

Tailwind CSS

Storybook

Framer Motion

Chromatic (for Storybook deployment)

👨‍💻 Author
Paras Rajain
📍 IIIT Bhagalpur
💼 SDE Intern aspirant | React, TypeScript, Full-Stack Dev
🔗 Portfolio | GitHub | LinkedIn


