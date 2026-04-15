# coming-soon

A simple React SPA "Coming Soon" page. No SSR, no server. Builds to a static
`dist/` that can be uploaded to any web host.

## Stack

- [Vite](https://vite.dev/) + [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [Bun](https://bun.sh/) for scripts and CI

## Development

```sh
bun install
bun run dev
```

Then open <http://localhost:5173>. The `<h1>` shows `window.location.hostname`
and the document title is updated to `<hostname> — Coming Soon`.

## Build

```sh
bun run build
```

Output lands in `dist/`. Asset paths are relative (`./assets/...`) so the build
works from any subdirectory on the target server.

Preview locally:

```sh
bun run preview
```

## Releases

Releases are produced by GitHub Actions on any tag matching `v*`.

```sh
git tag v0.1.0
git push --tags
```

The workflow (`.github/workflows/release.yml`) will:

1. Install deps, typecheck, build
2. Zip the **contents** of `dist/` (flattened) into `coming-soon-<tag>.zip`
3. Create a GitHub Release with auto-generated notes and the zip attached

Download the zip from the Release page, unzip it directly into your web
server's document root (or any subdirectory), and you're done — `index.html`
is at the zip root.

## License

MIT — see [LICENSE](./LICENSE).
