# Leuchtturmmomente

Website für Trauerreden.

## Über dieses Projekt

Diese Seite wurde mit [Jekyll](https://jekyllrb.com/) und dem [Agency Jekyll Theme](https://github.com/raviriley/agency-jekyll-theme) erstellt. Sie wird auf [GitHub Pages](https://pages.github.com/) gehostet.

## Konfiguration

Alle Inhalte werden über YAML-Dateien im `_data/`-Verzeichnis verwaltet. Es ist nicht nötig, HTML zu ändern.

### Site-Einstellungen (`_config.yml`)

| Einstellung | Beschreibung |
|---|---|
| `title` | Name der Website |
| `email` | Kontakt-E-Mail (auch für Contact-Formular) |
| `description` | Meta-Beschreibung |
| `author` | Autorenname |
| `locale` | Sprache (z. B. `de-DE`) |
| `analytics.google` | Google Analytics Tracking-ID (optional) |
| `url` | Basis-URL der Seite (leer für lokale Entwicklung, z. B. `https://example.com` für Produktion) |
| `baseurl` | Unterpfad (z. B. `/repo-name` bei Project Sites, leer bei User Sites) |

### Inhalte (`_data/sitetext.yml`)

Alle sichtbaren Textelemente der Site sind hier definiert:

- **Header** — Titel, Untertitel und Button-Text der Landing-Seite
- **Über (About)** — Beschreibungstext des Abschnitts
- **Angebote (Services)** — Titel, Untertitel und Liste der Dienste mit Icons (Font Awesome)
- **Portfolio** — Titel und Beschreibung
- **Team** — Teammitglieder mit Namen, Rolle, Bild und Social-Links
- **Kontakt (Contact)** — Formular-Felder, Validierungstexte und Button-Text
- **Footer** — Impressum-Link und Social-Media-Icons

Um eine Sektion zu entfernen, einfach die entsprechende YAML-Map löschen.

### Navigation (`_data/navigation.yml`)

Jeder Eintrag definiert einen Navigationseintrag mit:

```yaml
nav:
  - title: "Angebote"
    section: services  # Verweist auf die Sektion in sitetext.yml
  - title: "Externer Link"
    url: "https://example.com"
```

`section` erzeugt einen Anker-Link auf derselben Seite; `url` für externe Links.

### Farben & Bilder (`_data/style.yml`)

| Einstellung | Beschreibung |
|---|---|
| `highlight` | Akzentfarbe (z. B. `#e6b800`) |
| `header-image` | Hintergrundbild des Header-Bereichs |
| `contact-image` | Bild im Kontaktbereich |

### Portfolio (`_portfolio/`)

Jede Datei ist ein Portfolio-Eintrag:

```yaml
---
title: "Mein Portfolio"
subtitle: "Unterbeschrieb"
image: assets/img/portfolio/01.jpg
category: "Kategorie"
---
```

### Custom-Seiten

Legen Sie eine Markdown-Datei im Wurzelverzeichnis an mit `layout: page`:

```yaml
---
layout: page
---

Hier steht der Seiteninhalt als Markdown oder **HTML**.
```

## Lokale Entwicklung

```bash
# Dependencies installieren
bundle install

# Entwicklungsserver starten
bundle exec jekyll serve --livereload

# Öffnen Sie http://localhost:4000
```

Erforderlich: Ruby ≥ 3.0, `ruby3.2-dev` und `libssl-dev` (für native Extensions).

## Deployment auf GitHub Pages

1. Repository auf GitHub pushen
2. Settings → Pages → Source auf **GitHub Actions** oder **Deploy from a branch** stellen (Branch: `main`)
3. Falls nötig: `url` und `baseurl` in `_config.yml` anpassen