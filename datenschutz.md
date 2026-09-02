---
layout: page
title: "Datenschutzerklärung"
---

# Datenschutzerklärung

*Stand: September 2025*

## 1. Verantwortlicher

**{{ site.data.owner.name }}**
{% if site.data.owner.address %}{{ site.data.owner.address }}{% endif %}
E-Mail: <{{ site.data.owner.email }}>

Verantwortliche Stelle im Sinne der Datenschutz-Grundverordnung (DSGVO) ist die oben genannte Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen etc.) entscheidet.

## 1a. Datenschutzbeauftragte(r)

**{{ site.data.maintainer.name }}**
{% if site.data.maintainer.role %}{{ site.data.maintainer.role }}{% endif %}
E-Mail: <{{ site.data.maintainer.email }}>

{% if site.data.maintainer.address %}{{ site.data.maintainer.address }}{% endif %}

## 2. Datenverarbeitung beim Besuch dieser Website

### 2.1 Speichern von Daten auf dem Server (Server-Logs)

Der Hosting-Provider führt automatisch Protokolldaten auf, die Ihr Browser übermittelt. Dies dient gemäß [Art. 6 Abs. 1 lit. f DSGVO] unserem berechtigten Interesse an der technischen Stabilität und Sicherheit der Website.

Dazu gehören:

- Vollständiger URL der abgerufenen Seite
- Datum und Uhrzeit des Abrufs
- IP-Adresse des anfragenden Geräts
- User-Agent-String
- Referrer-URL
- Übertragene Datenmenge

Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und dienen ausschließlich der technischen Administration und Sicherheit. Die Aufbewahrungsdauer beträgt maximal 30 Tage.

### 2.2 Hosting durch GitHub Pages

Diese Website wird über [GitHub Pages](https://pages.github.com/) gehostet, einem Dienst der [GitHub, Inc.](https://www.github.com/) (Microsoft Corporation, 1201 Lake Avenue, South San Francisco, CA 94080, USA).

GitHub Pages dient als Auftragsverarbeiter im Sinne des [Art. 4 Abs. 8 DSGVO]. Bei jedem Aufruf Ihrer Website übermittelt Ihr Browser IP-Adresse und andere technische Daten an GitHub-Server in den USA.

**Rechtsgrundlage:** [Art. 6 Abs. 1 lit. b DSGVO] (vertragliche Erfüllung).

GitHub hat sich zwischenstaatlichen Datenschutzregelungen unterworfen (EU-US Data Privacy Framework). Eine Angemessenheitsentscheidung der Europäischen Kommission besteht für die USA.

## 2.3 Cookies

Diese Website verwendet **keine Cookies**. Es werden keine tracking- oder analytics-basierten Cookies gesetzt.

Lediglich technisch notwendige HTTP-Cookies können durch Ihren Browser für die korrekte Funktion des Browsers verwendet werden (z. B. Session-Management), diese sind nicht speicherbar nach dem Schließen des Browsers.

## 3. E-Mail-Kontakt

Über die Schaltfläche im Kontaktbereich wird ein E-Mail-Programm Ihres Geräts mit Ihrer E-Mail-Adresse als Empfänger geöffnet. Sie können dann selbst Nachrichtentext und weitere Empfänger eingeben.

**Rechtsgrundlage:** [Art. 6 Abs. 1 lit. a DSGVO] (Einwilligung durch versenden der E-Mail).

Die von Ihnen eingegebene Nachricht sowie Ihre Absender-E-Mail-Adresse werden direkt über Ihr E-Mail-Programm an **{{ site.data.owner.name }}** ([[site.data.owner.email|{{ site.data.owner.email }}]]) übermittelt. Die Daten verbleiben bei Ihrem E-Mail-Anbieter und werden von uns nicht weiterverarbeitet, bis Sie uns eine Antwort zusenden.

{% if site.data.owner.phone %}
Zusätzlich ist unsere Telefonnummer <{{ site.data.owner.phone }}> für Rückfragen erreichbar. Die Übertragung der Telefonnummer erfolgt über Ihr E-Mail-Programm oder Ihr Telefonat.
{% endif %}

## 4. Third-Party-Inhalte

Diese Website kann folgende Third-Party-Inhalte enthalten:

- **Social-Media-Icons:** Verlinkungen zu den eigenen Profilen von **{{ site.data.owner.name }}**. Beim Klicken auf die Icons wird die jeweilige Social-Media-Plattform aufgerufen. Es erfolgt keine Datenübertragung durch die Website selbst. Empfohlen wird die Nutzung von lokal eingebundenen Icons statt Font Awesome CDN.
- **Bilder:** Alle Bilder werden von eigenem Server geladen. Es werden keine externen Bilddienste verwendet.

**Empfehlung:** Zur vollständigen DSGVO-Konformität sollten Social-Media-Icons lokal eingebunden werden (statt über Font Awesome CDN) und externe Fonts durch system fonts ersetzt werden.

## 5. Ihre Rechte

Nach der DSGVO stehen Ihnen folgende Rechte zu:

- **Recht auf Auskunft** ([Art. 15 DSGVO]): Sie können Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten verlangen.
- **Recht auf Berichtigung** ([Art. 16 DSGVO]): Sie können die Berichtigung unrichtiger Daten verlangen.
- **Recht auf Löschung** ([Art. 17 DSGVO]): Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzliche Aufbewahrungspflicht besteht.
- **Recht auf Einschränkung der Verarbeitung** ([Art. 18 DSGVO]): Sie können die Einschränkung der Verarbeitung verlangen.
- **Recht auf Datenübertragbarkeit** ([Art. 20 DSGVO]): Sie haben das Recht, Ihre Daten in einem maschinenlesbaren Format zu erhalten.
- **Widerspruchsrecht** ([Art. 21 DSGVO]): Sie können der Verarbeitung jederzeit widersprechen.
- **Recht auf Beschwerde** ([Art. 77 DSGVO]): Sie haben das Recht, sich bei der zuständigen Datenschutzbehörde zu beschweren.

Für alle datenschutzrechtlichen Anfragen kontaktieren Sie uns unter:

- Verantwortlicher: <{{ site.data.owner.email }}>
- Datenschutzbeauftragte(r): <{{ site.data.maintainer.email }}>

## 6. Auftragsverarbeitung

Die oben genannte Auftragsverarbeitung durch GitHub wurde durch einen entsprechenden Auftragsverarbeitungsvertrag (AVV) gemäß [Art. 28 DSGVO] geregelt.

## 7. Änderungen dieser Datenschutzerklärung

Wir behalten uns das Recht vor, diese Datenschutzerklärung zu aktualisieren, wenn sich Änderungen bei den verarbeiteten Daten oder der Rechtslage ergeben. Die aktuelle Version finden Sie immer auf dieser Seite.
