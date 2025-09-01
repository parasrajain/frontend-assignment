🚀 React Assignment – InputField & DataTable Components

This project demonstrates reusable, responsive UI components built with React, TypeScript, TailwindCSS, and Framer Motion, along with Storybook for component documentation and testing.

It includes:

✨ InputField – styled, accessible input with validation, helper/error messages, clear button, and password toggle

📊 DataTable – sortable, selectable, responsive table with animations

🎨 Modern UI, responsive layout, and dark mode support

📚 Storybook setup for interactive component demos

📂 Project Structure
src/
 ├── components/
 │   ├── InputField/
 │   │   ├── InputField.tsx
 │   │   └── InputField.stories.tsx
 │   ├── DataTable/
 │   │   ├── DataTable.tsx
 │   │   └── DataTable.stories.tsx
 ├── App.tsx
 └── index.tsx

⚡ Getting Started
1. Clone the repo
git clone https://github.com/your-username/react-assignment.git
cd react-assignment

2. Install dependencies
npm install

3. Start the app
npm start


The app will be available at http://localhost:3000

4. Run Storybook
npm run storybook


Storybook will be available at http://localhost:6006

🧩 Components
🔹 InputField

Variants: outlined, filled, ghost

Sizes: sm, md, lg

Features:

Label, placeholder, helper text

Error state with message

Password toggle (Show/Hide)

Clear button ✕

Disabled & invalid states

Smooth animations

🔹 DataTable

Props:

data → array of objects

columns → array of { key, title, dataIndex, sortable }

selectable → enable row selection

onRowSelect → callback with selected rows

Features:

Sortable columns

Row selection (checkboxes)

Empty & loading states

Animated row transitions

Responsive (scrolls horizontally on small screens)

🎨 UI & Styling

Built with TailwindCSS for responsive design

Framer Motion for animations (fade, slide, hover effects)

Dark mode support with subtle transitions

Modern rounded card-style design

📸 Screenshots
InputField	DataTable

	
🔧 Scripts
Command	Description
npm start	Runs the app in development mode
npm run build	Builds the app for production
npm run storybook	Starts Storybook for component previews
npm run build-storybook	Exports static Storybook build
📌 Tech Stack

⚛️ React + TypeScript

🎨 TailwindCSS (styling)

🎬 Framer Motion (animations)

📚 Storybook (component docs/testing)

🛠️ React Scripts / CRA

🙌 Author

Your Name
📧 your.email@example.com

🔗 Portfolio
 | GitHub

👉 This README is ready to go — you just need to update the GitHub repo link, screenshots, and your name/email.

Do you want me to also add usage examples (code snippets showing how to use InputField and DataTable inside App.tsx)?