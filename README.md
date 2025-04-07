# ⚡ Vit Starter

A lightweight starter template for modern web apps using **Vite**, **React**,
**TypeScript**, and **Bun**.

Start building fast, scalable, and type-safe applications with a clean and
minimal setup.

---

## ✨ Features

- ⚡ Vite for fast development and build
- ⚛️ React with modern hooks and functional components
- 🧠 TypeScript for static typing
- 🎯 Biome for fast linting and formatting
- 🪝 Lefthook for managing Git hooks
- 🌙 Dark mode-ready styles
- 🐇 Powered by [Bun](https://bun.sh) — ultra-fast dev experience

---

## 🚀 Getting Started

### Clone & Install

```bash
git clone https://github.com/tinogasta-labs/vit-starter.git myapp
cd myapp
bun install
```

### Scripts

```
bun run dev       # Start development server
bun run build     # Build for production
bun run preview   # Preview production build
bun run format    # Format code with Biome
bun run lint      # Lint code with Biome
```

### Project Structure

```
vit-starter/
├─ public/              # Static assets
├─ src/
│  ├─ components/       # Reusable UI components
│  ├─ routes/           # App routes or views
│  ├─ styles/           # Global styles
│  ├─ types/            # Shared types
│  ├─ root.tsx          # Root component
│  └─ main.tsx          # Entry point
├─ index.html           # App HTML template
├─ vite.config.ts       # Vite configuration
├─ .prettierrc.yml      # Prettier config
├─ lefthook.yml         # Lefthook config
├─ biome.json           # Biome config
├─ bun.lock             # Bun lockfile
└─ tsconfig.json        # TypeScript config
```
