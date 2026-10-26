# Text Case Converter

A lightweight, no-dependency browser extension to instantly convert text between UPPERCASE, lowercase, Capitalize Each Word, Sentence case, Title Case, and tOGGLE cASE.

No sign-up, no server, no data leaving your browser — everything runs entirely client-side.

![UI theme](https://img.shields.io/badge/UI-dark%20theme-7c5cff) ![No dependencies](https://img.shields.io/badge/dependencies-none-brightgreen) ![Browsers](https://img.shields.io/badge/browsers-Chrome%20%7C%20Edge%20%7C%20Brave%20%7C%20Opera%20%7C%20Firefox-blue)

## Features

- **UPPERCASE** — convert everything to capital letters
- **lowercase** — convert everything to lowercase
- **Capitalize Each Word** — capitalize the first letter of every word
- **Sentence case** — capitalize the first letter of each sentence
- **Title Case** — proper title casing, with minor words (a, an, the, and, etc.) kept lowercase mid-title
- **tOGGLE cASE** — flip the case of every character
- One-click **Copy** to clipboard
- Remembers your last used mode and draft text

## 1. Download

Clone this repository, or download it as a ZIP via **Code → Download ZIP** on GitHub.

```bash
git clone https://github.com/devtanvirul/text-case-converter-extension.git
```

If you downloaded a ZIP, extract it first. Either way, confirm that `manifest.json` sits **directly** inside the resulting folder — not nested inside another folder.

## 2. Install on Chrome, Edge, Brave, or Opera

These steps are identical across Chromium-based browsers — only the address changes.

1. Open the extensions page:
   - Chrome: `chrome://extensions`
   - Edge: `edge://extensions`
   - Brave: `brave://extensions`
   - Opera: `opera://extensions`
2. Turn on **Developer mode** (toggle, top-right corner of the page).
3. Click **Load unpacked** (appears after Developer mode is on).
4. Select the `text-case-converter-extension` folder — the one that directly contains `manifest.json` — and click **Select Folder**.
5. The extension appears in your list. Click the puzzle-piece icon (🧩) in the toolbar, then click the pin icon next to **Text Case Converter** to keep it visible in the toolbar.

## 3. Install on Firefox

Firefox blocks unsigned extensions from installing permanently, so install it as a **temporary add-on** instead.

1. In the address bar, go to `about:debugging#/runtime/this-firefox` and press Enter.
2. Click **Load Temporary Add-on…**.
3. In the file picker, navigate inside the extension folder and select the **`manifest.json`** file itself (not the folder).
4. The extension loads immediately and its icon appears in the toolbar.

> **Note:** A temporary add-on is removed when Firefox restarts. You'll need to repeat these steps each time you restart the browser, unless the extension is later signed and published through Mozilla's Add-on store.

## 4. How to Use

1. Click the pinned icon in the toolbar to open the popup.
2. Type or paste text into the input box.
3. Click a mode: UPPERCASE, lowercase, Capitalize Each Word, Sentence case, Title Case, or tOGGLE cASE.
4. The converted text appears instantly in the output box below.
5. Click **Copy** to copy the result to your clipboard.

## Troubleshooting

| Error message | Cause | Fix |
| --- | --- | --- |
| "Manifest file is missing or unreadable" / "Could not load manifest" | You selected the outer/wrapper folder instead of the folder that directly contains `manifest.json` | Go one folder deeper and select the inner folder (the one where `manifest.json` sits directly) |
| "This add-on could not be installed because it appears to be corrupt" (Firefox) | You tried to drag-and-drop or open the `.zip`/folder directly — Firefox requires a signed package for that method | Use **Load Temporary Add-on** at `about:debugging#/runtime/this-firefox` and select `manifest.json`, not the zip or folder |
| "Load unpacked" button doesn't appear | Developer mode is off | Toggle **Developer mode** on, top-right of the extensions page |
| Extension loads but the icon isn't visible | Icon isn't pinned to the toolbar | Click the puzzle icon (🧩) in the toolbar → click the pin next to the extension |
| Firefox extension disappeared after restart | Temporary add-ons are removed on browser restart | Expected behavior — repeat the Load Temporary Add-on steps, or get it signed via Mozilla for a permanent install |

## Project Structure

```
text-case-converter-extension/
├── manifest.json     # Extension manifest (MV3, Chrome + Firefox compatible)
├── popup.html         # Popup UI markup
├── popup.css           # Popup styling (dark theme)
├── popup.js             # Case conversion logic
└── icons/                 # Extension icons (16px, 48px, 128px)
```

## License

Free to use, modify, and distribute.
