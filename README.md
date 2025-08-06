

# 🌗 Multi-Theme Switcher App

A responsive and customizable React + TypeScript web application with a theme switcher. Users can seamlessly switch between **three distinct themes**—each with unique layouts, typography, colors, and structure.

---

## ✨ Features

- 🧭 **Theme Switcher Dropdown** in a fixed header (Theme 1 as default)
- 🎨 **3 Distinct Themes**:

  - **Theme 1**: Light, minimalist layout with sans-serif font
  - **Theme 2**: Dark mode with sidebar and bold serif font
  - **Theme 3**: Colorful card-based layout with playful fonts (e.g., _Pacifico_)

- 🧱 Modular components (Buttons, Footer, Sidebar, etc.)
- 🔁 Persistent theme using `localStorage`
- 🧠 Theme state managed via **React Context API**
- 🔌 Product data fetched from [Fake Store API](https://fakestoreapi.com/products)
- 📱 Fully **Responsive UI** for desktop and mobile
- 🚀 Smooth **Theme Transition Animations**
- 🔐 Basic **Security** practices implemented
- 🧭 Routing via **React Router** with pages:

  - Home (`/`)
  - About (`/about`)
  - Contact (`/contact`)

- 📦 No heavy UI libraries (e.g., MUI, Ant Design) used
- ⚡ Built with **TailwindCSS** for styling

---

## 🧾 Folder Structure

```
src/
├── app/                   # Pages: Home, About, Contact, Products
│   ├── about/
│   ├── contact/
│   ├── products/
│   └── layout.tsx         # Common layout
├── components/            # Reusable UI Components
│   ├── buttons/
│   ├── contact/
│   ├── Footer.tsx
│   ├── Sidebar.tsx
│   └── ThemeSwitcher.tsx
├── contextapi/            # Theme context
│   └── ThemeContext.tsx
├── query/                 # API integration
│   └── apis/
│       └── QueryProvider.tsx
├── types/                 # TypeScript interfaces/types
├── utils/                 # Helper functions & static data
├── globals.css            # Global styles
├── next.config.ts         # Next.js config
└── ...
```

---

## 🛠️ Tech Stack

- **Next.js** `v15.4.5`
- **React** `v19.1.0`
- **TypeScript** `v5`
- **Tailwind CSS** `v4.1.11`
- **React Query (@tanstack/react-query)** `v5.84.1`
- **PostCSS** `v8.5.6`
- **ESLint** `v9` with `eslint-config-next`

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ManSOorcode/multi-theme-switcher-mansoorkhan-frontenddeveloper.git
cd multi-theme-switcher-mansoorkhan-frontenddeveloper
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## ⚙️ Theme Switching Logic

- `ThemeContext.tsx`: Stores the current theme and updates context.
- `ThemeSwitcher.tsx`: Dropdown to choose from Theme 1, 2, 3.
- Theme info stored in `localStorage` to persist across sessions.
- Each theme modifies:

  - Color palette
  - Font family
  - Layout structure (grid/sidebar/card)
  - Spacing and animations

---

## 🔐 Security Practices

- Sanitized all external data
- Basic route protection and error boundaries

---

## 📁 API Integration

- Fetches products from [FakeStoreAPI](https://fakestoreapi.com/products)
- API logic encapsulated in `query/apis/QueryProvider.tsx`

---

## 📸 Screenshots

<img width="300" height="900" alt="theme_one_home" src="https://github.com/user-attachments/assets/0743dee3-9f5b-4bab-9396-e0f4787f59a4" />
<img width="300" height="900" alt="theme_two_home" src="https://github.com/user-attachments/assets/50b2d209-d401-4b94-af21-42327cb148a1" />
<img width="300" height="790" alt="theme_three_home" src="https://github.com/user-attachments/assets/e066ebfa-5cdb-4935-9740-f6884ea2b736" />

---

## 👨‍💻 Author

- **Developer**: Mansoor Khan(https://github.com/ManSOorcode/multi-theme-switcher-mansoorkhan-frontenddeveloper.git)

---

## 📄 License

This project is licensed under the MIT License.
