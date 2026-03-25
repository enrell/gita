# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **Astro** project using the minimal starter template. It uses **Bun** as the package manager.

- **Node.js**: >=22.12.0
- **Package Manager**: Bun
- **Framework**: Astro v6.0.8

## Development Commands

All commands are run from the project root:

| Command | Action |
| :------------------------ | :----------------------------------------------- |
| `bun install` | Installs dependencies |
| `bun dev` | Starts local dev server at `localhost:4321` |
| `bun build` | Builds the production site to `./dist/` |
| `bun preview` | Previews the build locally |
| `bun astro -- --help` | Shows Astro CLI help |

## Project Structure

```
/
├── public/              # Static assets (favicon.ico, favicon.svg)
├── src/
│   └── pages/           # Route pages
│       └── index.astro  # Homepage
├── astro.config.mjs     # Astro configuration
├── tsconfig.json        # TypeScript config (extends astro/tsconfigs/strict)
└── package.json
```

## TypeScript Configuration

- Uses strict TypeScript settings via `astro/tsconfigs/strict`
- Auto-generated types from `.astro/types.d.ts`

## VSCode Setup

The project recommends the `astro-build.astro-vscode` extension for syntax highlighting and IntelliSense.

## Astro CLI

When running Astro CLI commands, use the `astro` npm script:

```bash
bun astro add <integration>    # Add an Astro integration
bun astro check                # Run TypeScript checks
```
