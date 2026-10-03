# Claude

A warm, editorial Spicetify theme inspired by **[Claude](https://claude.ai)**. It uses charcoal and ivory surfaces, clay accents, serif headings, and a small spark that turns while music plays.

<p align="center">
  <img src="https://img.shields.io/badge/Spicetify-Theme-d97757?style=flat-square" alt="Spicetify Theme">
  <img src="https://img.shields.io/badge/schemes-Claude%20%7C%20Paper-c2c0b6?style=flat-square" alt="Color schemes">
  <img src="https://img.shields.io/github/license/joustingmatch/Spicetify-Claude?style=flat-square" alt="License">
</p>

## Preview

<table>
  <tr>
    <td width="50%">
      <img src="https://raw.githubusercontent.com/joustingmatch/Spicetify-Claude/main/screenshots/preview_1.png" alt="Claude: home">
    </td>
    <td width="50%">
      <img src="https://raw.githubusercontent.com/joustingmatch/Spicetify-Claude/main/screenshots/preview_2.png" alt="Claude: playlist">
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img src="https://raw.githubusercontent.com/joustingmatch/Spicetify-Claude/main/screenshots/preview_3.png" alt="Claude: Paper scheme">
    </td>
    <td width="50%">
      <img src="https://raw.githubusercontent.com/joustingmatch/Spicetify-Claude/main/screenshots/preview_4.png" alt="Claude: lyrics">
    </td>
  </tr>
</table>

## ✦ Features

* **Two schemes:** `Claude` (warm dark `#262624`) and `Paper` (ivory light `#faf9f5`)
* **Clay accent** (`#d97757`) on play buttons, active tracks, the progress bar and focus rings
* **Serif headings** set in Source Serif 4, with Inter for body text
* Rounded panels with hairline borders and even spacing
* **Spark mark** in the top bar that rotates while music plays
* **Time-aware greeting** on the home page ("Good evening, …")
* Spotify's cover-art color tint removed
* Home-page announcement and promo banners hidden
* Large, slowly turning **Claude spark** watermark in the background
* Soft clay glow at the top of each page
* Styled library, cards, track lists, context menus, search, lyrics and player
* Thin rounded scrollbars
* Respects `prefers-reduced-motion`

## Installation

### Marketplace

Open **Marketplace → Themes**, search for **Claude**, and click **Install**.

### Manual

Copy the following files into your Spicetify Themes directory:

| OS            | Path                                 |
| ------------- | ------------------------------------ |
| Windows       | `%appdata%\spicetify\Themes\Claude\` |
| Linux / macOS | `~/.config/spicetify/Themes/Claude/` |

The theme folder should contain:

```text
Claude/
├── user.css
├── color.ini
└── theme.js
```

Then run:

```bash
spicetify config current_theme Claude color_scheme Claude inject_css 1 replace_colors 1 inject_theme_js 1
spicetify apply
```

For the light scheme:

```bash
spicetify config color_scheme Paper
spicetify apply
```

> **Important:** `inject_theme_js 1` is required.
>
> Without it, `theme.js` will not run, so the spark, the home greeting and the tint removal will not load. The rest of the theme still works.

## Colors

| Variable          | Claude    | Paper     | Usage                     |
| ----------------- | --------- | --------- | ------------------------- |
| `main`            | `#262624` | `#faf9f5` | Main view background      |
| `sidebar`         | `#1f1e1d` | `#f0eee6` | Window frame, player      |
| `card`            | `#30302e` | `#ffffff` | Cards, menus              |
| `selected-row`    | `#3a3936` | `#e8e6dc` | Selected rows             |
| `text`            | `#faf9f5` | `#141413` | Primary text              |
| `subtext`         | `#c2c0b6` | `#5e5d59` | Secondary text            |
| `button`          | `#d97757` | `#c96442` | Accent, buttons, progress |
| `button-disabled` | `#85837c` | `#8f8d86` | Disabled / faint text     |

## Customization

The main customization variables are at the top of `user.css`:

| Variable      | Description                         |
| ------------- | ----------------------------------- |
| `--cl-accent` | Main accent color                   |
| `--cl-radius` | Panel corner radius                 |
| `--cl-gap`    | Spacing between panels              |
| `--cl-serif`  | Heading typeface                    |
| `--cl-sans`   | Body typeface                       |
| `--cl-border` | Hairline border color               |
| `--cl-watermark-opacity` | Background spark opacity (`0` hides it) |

Change these values to adjust the theme's overall look without editing the rest of the stylesheet.

## Troubleshooting

### Parts of Spotify still have a solid or tinted background

Spotify's UI changes between versions, so some elements may keep their default styling.

Open Spotify's DevTools:

```text
Ctrl + Shift + I
```

Or enable them through Spicetify:

```bash
spicetify enable-devtools
```

Inspect the affected element and check its class name. If you find a component the theme doesn't cover, please open an issue.

### The spark or greeting isn't showing

Make sure JavaScript injection is enabled:

```bash
spicetify config inject_theme_js 1
spicetify apply
```

### Fonts look like the system default

The theme loads Source Serif 4 and Inter from Google Fonts. If you're offline, it falls back to Georgia and your system sans-serif.

## Uninstall

To restore Spotify's original Spicetify configuration:

```bash
spicetify restore
```

## Credits

Made by **joustingmatch**.

Inspired by the visual language of **[Claude](https://claude.ai)**. This is an unofficial fan theme and is not affiliated with or endorsed by Anthropic.

<p align="center">
  <sub>Claude — a warm, thoughtful Spicetify experience.</sub>
</p>
