# Modul 294 LBb Testprotokoll

|        Direktion | Zürcher Lehrbetriebsverband ICT |             Amt | Projektmanagement |
| ---------------: | :------------------------------ | --------------: | :---------------- |
|  Auftraggeber/in | Nuhiu Ilir                      |          Status | Beendet           |
| Projektleiter/in | Sandro Kohler                   | Klassifizierung | Lernbeurteilung b |

Änderungsverzeichnis

| Datum      | Version | Änderung              | Autor/in      |
| :--------- | :------ | :-------------------- | :------------ |
| 14.04.2023 | 1.0     | Testfälle hinzugefügt | Sandro Kohler |

## Inhalt

[1.Testfall](#_toc57649077)

[2.Testfall](#_toc57649078)

[3.Testfall](#_toc57649079)



1. # <a name="_toc57649077"></a>Testfall

### Testfallbeschreibung

| <a name="_toc395601415"></a><a name="_toc500410246"></a><a name="_toc505581825"></a><a name="_toc505588567"></a><a name="_toc505666229"></a>ID / Bezeichnung | T-001              | gemäss Testkonzept                                                                                                                                                                                                                                                      |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Beschreibung                                                                                                                                                 | gemäss Testkonzept | Login                                                                                                                                                                                                                                                                   |
| Testvoraussetzung                                                                                                                                            | gemäss Testkonzept | Benutzer ist nicht angemeldet                                                                                                                                                                                                                                           |
| Testschritte                                                                                                                                                 | gemäss Testkonzept | Benutzer meldet sich mit richtigen und falschen Login-Daten an. Es wird versucht Seiten zu öffnen zu denen der unangemeldete Benutzer keine Berechtigung hat.                                                                                                           |
| Erwartetes Ergebnis                                                                                                                                          | gemäss Testkonzept | Benutzer bekommt Error messages solange er falsche Login-Daten eingibt und wenn die Login-Daten richtig sind wird der Benutzer angemeldet. Wenn der unangemeldete Benutzer versucht auf Seiten zu kommen wo er keinen zugriff hat, wird er auf die Login-Page geleitet. |

### Testdurchführung und Testergebnis               

| Testdatum          | 14.04.2023                                 |
| :----------------- | :----------------------------------------- |
| Tester             | Sandro Kohler                              |
| Mängelklasse \*    | 0                                          |
| Mängelbeschreibung | Finde keine Mängel                         |
| Bemerkungen        | Schloss Symbol zeigt ob man eingeloggt ist |

\* Mängelklasse: 0 = mängelfrei, 1 = belangloser Mangel, 2 = leichter Mangel, 3 = schwerer Mangel, 4 = kritischer Mangel


2. # <a name="_toc57649078"></a>Testfall

### Testfallbeschreibung

| ID / Bezeichnung    | T-002              | gemäss Testkonzept                                    |
| :------------------ | :----------------- | :---------------------------------------------------- |
| Beschreibung        | gemäss Testkonzept | Tasks hinzufügen, bearbeiten und löschen              |
| Testvoraussetzung   | gemäss Testkonzept | Benutzer ist eingeloggt auf der Übersichtsseite       |
| Testschritte        | gemäss Testkonzept | Task wird erstellt, bearbeitet und gelöscht           |
| Erwartetes Ergebnis | gemäss Testkonzept | Einen Task wurde hinzugefügt, bearbeitet und gelöscht |

### Testdurchführung und Testergebnis

| Testdatum          | 14.04.2023       |
| :----------------- | :--------------- |
| Tester             | Philip Dietzel   |
| Mängelklasse \*    | 0                |
| Mängelbeschreibung | Hat keine Mängel |
| Bemerkungen        | -                |

\* Mängelklasse: 0 = mängelfrei, 1 = belangloser Mangel, 2 = leichter Mangel, 3 = schwerer Mangel, 4 = kritischer Mangel


3. # <a name="_toc57649079"></a>Testfall

### Testfallbeschreibung

| ID / Bezeichnung    | T-003              | gemäss Testkonzept                                                                                                                                                                                     |
| :------------------ | :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Beschreibung        | gemäss Testkonzept | Einen Einzelnen Task übers Routing öffnen                                                                                                                                                              |
| Testvoraussetzung   | gemäss Testkonzept | Benutzer ist eingeloggt und es gibt einige Tasks                                                                                                                                                       |
| Testschritte        | gemäss Testkonzept | URL wird ohne Parameter eingegeben, URL wird mit nicht vorhandenen Parameter eingegeben und URL wird mit vorhandenen Parameter aufgerufen. Der Task wird in der Detailansicht bearbeitet und gelöscht. |
| Erwartetes Ergebnis | gemäss Testkonzept | Wenn der User eine Falsche URL eingibt bekommt er eine error Message. Die Task kann bearbeitet werden und wenn man die Task löscht kommt man wieder auf die Übersichtsseite.                           |

### Testdurchführung und Testergebnis

| Testdatum          | 14.04.2023    |
| :----------------- | :------------ |
| Tester             | Linus Daniels |
| Mängelklasse \*    | 0             |
| Mängelbeschreibung | Keine Mängel  |
| Bemerkungen        |               |

\* Mängelklasse: 0 = mängelfrei, 1 = belangloser Mangel, 2 = leichter Mangel, 3 = schwerer Mangel, 4 = kritischer Mangel