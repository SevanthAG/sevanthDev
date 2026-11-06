# Sevanth A G — Portfolio

A single-page terminal-styled portfolio built with Next.js 16 (App Router),
React 19, TypeScript and Tailwind CSS v4. The visual language is a dark,
monochrome terminal with an olive accent: `$ cat work`, tabular spec rows and
outlined CTAs.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 · App Router · static export |
| UI | React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 + CSS design tokens |
| Icons | Tabler Icons, React Icons |
| Linting | ESLint 9 · `eslint-config-next` |
| Delivery | Multi-stage Docker build → nginx |

## Structure

```
├── public/                 portrait, resume, favicon, robots
├── src/
│   ├── app/                layout (metadata + font) and page
│   ├── components/         nav, hero, one component per section, footer
│   │   └── ui/             self-contained primitives
│   ├── lib/
│   │   ├── profile.ts      single source of truth for all content
│   │   ├── types.ts        Profile and section types
│   │   └── utils.ts        cn()
│   └── globals.css         layout and component styles
├── tokens.css              design tokens (source of truth)
├── design.md               design intent
├── Dockerfile · nginx.conf · compose.yaml · makefile
```

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run lint
npm run build      # static export to out/
```

## Edit content

Everything the page renders comes from `src/lib/profile.ts`:

- `facts` — the spec table in `about`
- `work`, `projects` — experience and builds
- `stack` — grouped skill chips
- `credentials`, `leadership`, `achievements`
- `socials`, `now`, `skills` — hero content

No component contains copy, so updating the portfolio is a data edit.

## Deploy

The image builds the static export and serves `out/` from nginx.

```bash
make build   # docker compose build
make up      # run locally on :80
make deploy  # docker stack deploy
```

Compose expects an external `proxy_net` network and a Traefik instance, and
routes `sevanth.dev` to the container. Adjust the host and resolver there.
