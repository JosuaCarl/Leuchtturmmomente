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
- **Team** — Titel und Untertitel (Mitglieder werden aus `_data/owner.yml` übernommen)
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

### Kontakt-Daten (`_data/owner.yml` und `_data/maintainer.yml`)

Kontaktdaten sind zentral in YAML-Dateien gespeichert und werden automatisch im **Kontaktformular**, **Impressum**, **Datenschutzerklärung** und **Team-Sektion** verwendet:

- **`_data/owner.yml`** — Website-Inhaber (Empfänger des Kontaktformulars, verantwortlich für Inhalte)
- **`_data/maintainer.yml`** — Datenschutzbeauftragte(r)

```yaml
# _data/owner.yml
name: "Max Mustermann"
email: "max@beispiel.de"
phone: "+49 123 456 789"
role: "Inhaberin & Trauerrednerin"
image: "assets/img/team/portrait.jpg"
social:
  - url: https://instagram.com
    icon: fab fa-instagram
```

**Wichtig:** Das Kontaktformular sendet an `site.email` in `_config.yml`. Stellen Sie sicher, dass diese Adresse mit `site.data.owner.email` übereinstimmt.

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

### Kontakt-Karte einbetten

Um eine Kontakt-Karte an beliebiger Stelle einzufügen (z. B. in der "Über"-Sektion), nutzen Sie diesen Include:

```liquid
{% include contact-card.html data=site.data.owner %}
```

oder für den Datenschutz-Verantwortlichen:

```liquid
{% include contact-card.html data=site.data.maintainer %}
```

### Rechtliches

Diese Site enthält zwei rechtliche Seiten:

- **`legal.md`** — Impressum gemäß § 5 DDG (verlinkt im Footer)
- **`datenschutz.md`** — Datenschutzerklärung DSGVO-konform

Die Daten werden automatisch aus `_data/owner.yml` und `_data/maintainer.yml` bezogen. Ändern Sie diese YAML-Dateien, um Impressum und Datenschutz aktuell zu halten.

> **Hinweis:** Diese Seiten dienen als Vorlage und ersetzen keine Rechtsberatung. Für eine rechtssichere Gestaltung empfiehlt sich die Prüfung durch einen Rechtsanwalt oder eine offizielle Generators wie e-recht24.de oder datenschutz-generator.de.

> **Cookie-Banner:** Dieser Site verwendet derzeit keine Cookies, kein Tracking und keine Analytics — daher ist aktuell kein Cookie-Banner erforderlich. Sobald Sie jedoch Third-Party-Dienste einbetten (Google Analytics, YouTube-Videos, Google Fonts, Social-Share-Buttons), wird ein Consent-Banner nach DSGVO erforderlich.

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
