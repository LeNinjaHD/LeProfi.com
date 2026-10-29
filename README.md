# LeProfi — Dein digitaler Hangar

Responsive Startseite für Airspace Monitor, IGC Viewer und AircraftManager. Reines HTML, CSS und JavaScript, ohne Build-Schritt, externe Schriften oder Bibliotheken.

## Mit Apache in Docker starten

```sh
docker compose up -d --build
```

Anschließend unter http://localhost:8080 öffnen. Der Container liefert die Seite mit Apache HTTP Server aus. Den Host-Port bei Bedarf in `compose.yaml` ändern. Ein vorgeschalteter Reverse Proxy kann auf diesen Port weiterleiten.

## Zieladressen konfigurieren

Die Links in `public/config.js` verweisen auf `https://airspace.leprofi.com` (Airspace Monitor), `https://igc.leprofi.com` (IGC Viewer) und `https://ls3.leprofi.com` (AircraftManager). Zum Ändern sind relative Pfade und vollständige HTTP-/HTTPS-URLs möglich. Die Anwendungen selbst sind nicht Bestandteil dieses Projekts. Die Standardlinks sind zusätzlich in `public/index.html` hinterlegt, damit die Navigation auch ohne JavaScript funktioniert.

Nach Änderungen das Image mit `docker compose up -d --build` neu bauen.

## Stoppen

```sh
docker compose down
```
