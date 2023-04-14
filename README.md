# Modul 294 LBb

Frontend einer interaktiven Webapplikation realisieren

## Inhalt

Im src Ordner befinden sich zwei weitere Ordner. Im NoAuthentication Ordner kann man auf die Task List ohne Login zugreifen, dafür auch ohne CSS, Detailansicht und anderen kleinen Dingen, die in der eigentlichen Anwendung besser sind.

Im JwtAuthentication Ordner ist das eigentliche Frontend der Applikation. Um das ganze zum Laufen zu bringen braucht man noch das Backend, dieses ist ebenfalls auf GitHub im [Modul 294 LBb Backend](https://github.com/diegosteiner/m294-lb-backend) Repository. Mein Projekt kann mit Git Clone oder als ZIP-Datei lokal öffnen.

## Funktionen

Nach dem erfolgreichen Anmelden, auf der Login Page, kommt man auf die Übersicht aller Aufgaben. Wenn man sich nicht einloggt, wird man immer zurück auf die Login-Seite geschickt. Auf der Übersichtsseite kann man eine Aufgabe hinzufügen, bearbeiten und löschen.

### Login:

*E-Mail*: info@example.com

*Passwort*: m294

### Routing

Wenn man eingeloggt ist, kann man auch eine einzelne Aufgabe anzeigen lassen. 

Der Pfad von der Übersichtsseite ist:

`src/JwtAuthentication/index.html` oder `src/JwtAuthentication/`

Pfad, um eine einzelne Aufagbe anzeigen zu lassen:

`src/JwtAuthentication/TasksDetail/tasks.html?id={taskId}`

Beispiel für die Aufgabe mit der Id 3: `src/JwtAuthentication/TasksDetail/tasks.html?id=3`


### Verwendete Sprachen für dieses Projekt:
- JavaScript
- HTML
- CSS


### Tests

Das [Testprotokoll](https://github.com/sandkohler/M294LBb/blob/master/Testf%C3%A4lle.md) ist eine Markdown Datei in diesem Repository. Dabei haben Freunde und ich selber mein Projekt getestet.