# coming-soon

A simple, visually polished React Single Page Application (SPA) "Coming Soon" page featuring a macOS-inspired terminal interface.

## Project Overview

- **Purpose:** A lightweight, static "Coming Soon" placeholder designed for easy deployment to any static web host.
- **Core Stack:** [Vite](https://vite.dev/) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/).
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with a custom **Monokai Pro — Filter Octagon** color palette and glassmorphism effects.
- **Runtime/Manager:** [Bun](https://bun.sh/) is used for dependency management and scripts.
- **Architecture:** Standard React structure with components located in `src/components`. It uses a custom `ThemeProvider` for light/dark mode support.

## Building and Running

### Prerequisites

- [Bun](https://bun.sh/) installed on your system.

### Development

```sh
bun install
bun run dev
```
Open [http://localhost:5173](http://localhost:5173). The page dynamically displays the current hostname.

### Build

```sh
bun run build
```
The production-ready assets are generated in the `dist/` directory with relative paths, allowing deployment to any subdirectory.

### Testing & Validation

```sh
bun run typecheck # TypeScript type checking
bun run lint      # Linting with ESLint
```

## Development Conventions

### Styling & Themes

- **Colors:** Do not use hardcoded hex values. Use the custom Monokai Pro CSS variables defined in `src/index.css` (e.g., `var(--mp-cyan)`, `var(--mp-yellow)`).
- **Tailwind v4:** Leverage Tailwind's `@theme` block in `src/index.css` for custom utility mappings.
- **Terminal UI:** Components related to the terminal interface are located in `src/components/terminal/`. Use the `.terminal-glass` class for window components.

### Component Structure

- **Aliases:** Use the `@/` alias to refer to the `src/` directory.
- **Named Exports:** Prefer named exports for components (e.g., `export function MyComponent()`) to ensure consistency and better IDE support, except for the main `App` component.
- **Responsive Design:** Use `clamp()` and relative units for fluid typography and spacing within the terminal UI.

### Deployment & Releases

- **GitHub Actions:** Automated releases are triggered by tags matching `v*`. The process zips the `dist/` contents for easy manual deployment.
- **Static Assets:** The build is optimized for zero-server environments.
