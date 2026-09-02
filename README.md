# Leuchtturmmomente

Website für Trauerreden.

## Über dieses Projekt

Diese Seite wurde mit [Jekyll](https://jekyllrb.com/) und dem [Agency Jekyll Theme](https://github.com/raviriley/agency-jekyll-theme) erstellt. Sie wird auf [GitHub Pages](https://pages.github.com/) gehostet.

Alle Ressourcen (Fonts, Icons, CSS) sind **lokal eingebunden** — keine Abhängigkeiten von externen CDNs (Google Fonts, Font Awesome).

## Konfiguration

Alle Inhalte werden über YAML-Dateien im `_data/`-Verzeichnis verwaltet. Es ist nicht nötig, HTML zu ändern.

### Site-Einstellungen (`_config.yml`)

| Einstellung | Beschreibung |
|---|---|
| `title` | Name der Website |
| `email` | Kontakt-E-Mail |
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
- **Kontakt (Contact)** — Titel, Untertitel
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

Kontaktdaten sind zentral in YAML-Dateien gespeichert und werden automatisch im **Kontaktbereich**, **Impressum**, **Datenschutzerklärung** und **Team-Sektion** verwendet:

- **`_data/owner.yml`** — Website-Inhaber (Empfänger der Kontakt-E-Mail, verantwortlich für Inhalte)
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

### Kontaktformular

Aktuell wird im Kontaktbereich eine **mailto:-Schaltfläche** verwendet, die das E-Mail-Programm der Besucher:in öffnet.

Für ein **echtes Formular** auf der Website kann [Formspree](https://formspree.io/) eingerichtet werden. So geht's:

#### Formspree einrichten

1. Registrieren Sie sich unter [formspree.io](https://formspree.io/)
2. Erstellen Sie ein neues Formular (New Form)
3. Tragen Sie Ihre Empfangs-E-Mail-Adresse ein (z. B. `josua.carl@web.de`)
4. Kopieren Sie die **Form-ID** aus der URL (z. B. `https://formspree.io/f/xwkjzkqz` → `xwkjzkqz`)
5. Tragen Sie die ID in `_config.yml` ein:

```yaml
formspree_form_path: "xwkjzkqz"
```

6. Ersetzen Sie die mailto-Schaltfläche in `_includes/contact.html` durch das Formspree-Formular:

```html
<form id="contactForm" action="https://formspree.io/f/{{ site.formspree_form_path }}" method="POST">
  <div class="row">
    <div class="col-md-6">
      <div class="form-group">
        <input name="name" class="form-control" id="name" type="text"
          placeholder="{{ site.data.sitetext[site.locale].contact.name }}" required>
      </div>
      <div class="form-group">
        <input name="_replyto" class="form-control" id="email" type="email"
          placeholder="{{ site.data.sitetext[site.locale].contact.email }}" required>
      </div>
      <div class="form-group">
        <input name="phone" class="form-control" id="phone" type="tel"
          placeholder="{{ site.data.sitetext[site.locale].contact.phone }}">
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <textarea name="message" class="form-control" id="message"
          placeholder="{{ site.data.sitetext[site.locale].contact.message }}" required></textarea>
      </div>
    </div>
    <input type="hidden" name="_subject" value="{{ site.data.sitetext[site.locale].contact.subject }}">
    <div class="col-lg-12 text-center">
      <button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit">
        {{ site.data.sitetext[site.locale].contact.submit }}
      </button>
    </div>
    <input type="text" name="_gotcha" style="display:none">
    <input type="hidden" name="_next" value="{{ site.url }}{{ site.baseurl }}/_texts/danke.html" />
  </div>
</form>
```

7. Optional: Eine Danke-Seite (`_texts/danke.md`) anlegen:

```yaml
---
layout: page
title: "Danke!"
---

# Vielen Dank für Ihre Nachricht!

Ich werde mich in Kürze bei Ihnen melden.
```

### Rechtliches

Alle rechtlichen Texte befinden sich im `_texts/`-Verzeichnis:

- **`_texts/legal.md`** — Impressum gemäß § 5 DDG (im Footer verlinkt über `/_texts/legal`)
- **`_texts/datenschutz.md`** — Datenschutzerklärung DSGVO-konform (im Impressum verlinkt über `/_texts/datenschutz`)
- **`_texts/danke.md`** — Bestätigungsseite für Formspree-Formular

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

## Lokale Ressourcen

Alle Assets sind selbst gehostet — keine externen CDN-Abhängigkeiten:

| Ressource | Pfad |
|---|---|
| Google Fonts (Montserrat, Kaushan Script, Droid Serif, Roboto Slab) | `assets/fonts/*.ttf` |
| Font Awesome 6 (Icons) | `assets/css/all.min.css` + `assets/webfonts/*.woff2` |
| Bootstrap | `assets/css/bootstrap.min.css` |
| Agency Theme Styles | `assets/css/agency.css` |
| Jquery & Plugins | `assets/js/jquery.min.js`, `assets/js/bootstrap.bundle.min.js`, `assets/js/agency.min.js` |
