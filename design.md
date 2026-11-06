# Design — Sevanth portfolio

The design system is locked. `tokens.css` is the source of truth for values;
this file records the intent behind them.

## System
- Genre · atmospheric (terminal voice)
- Macrostructure · Split Studio
- Axes · dark / mono / chromatic-green (olive)
- Nav · mac traffic dots left + wordmark right · sticky frost
- Footer · social links spread (`space-around`) + one `$ echo` note
- Hero · split · portrait left / identity right · ratio 35/65
- Sections · `$ cat <file>` heading + tabular rows separated by rules
- Type · JetBrains Mono 300–700 everywhere

## Tokens
See `tokens.css`. Never hard-code a colour, size or radius in a component —
add or reuse a token instead.

| Role | Token |
| --- | --- |
| Page | `--color-paper` |
| Card surface | `--color-paper-2`, `--color-paper-3` |
| Body ink | `--color-ink` |
| Muted ink | `--color-ink-2`, `--color-dim` |
| Rules | `--color-rule` |
| Accent | `--color-accent` (olive) |
| Secondary accent | `--color-aqua` |
| Focus | `--color-focus` |

## Voice
- Primary CTA · outline, aqua ink + aqua/30 border · 3px radius
- Secondary CTA · outline, muted ink + rule border
- Wordmark · accent + soft olive glow
- No filled slabs, no pills, no fake metrics

## Motion
- One reveal: `fade-in` 400ms ease-out with an 8px rise, 60ms stagger.
- No `transition-all`, no hover scale. Colour and opacity only, ≤200ms.
- `prefers-reduced-motion: reduce` disables the reveal and status pulse.

## Data boundary
All copy lives in `src/lib/profile.ts`, typed by `src/lib/types.ts`.
Components are presentation only — they never hold content.

## Structure
```
src/
├── app/          route entry, metadata, one page
├── components/   one component per section, small and flat
│   └── ui/       self-contained primitives (pixelated canvas)
├── lib/          profile data, shared types, cn()
└── globals.css   layout + component styles built on tokens.css
```
