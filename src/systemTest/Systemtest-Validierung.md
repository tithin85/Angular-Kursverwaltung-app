### Systemtest / Validierung
Stand 08.03.2023

## KursAnlegen 
| Feldname          |           Bedingung           | Stand |
|-------------------|:-----------------------------:|:-----:|
| Kursname          |   Mussfeld, Länge größer 0    |  ok   |
| Startdatum        |      Mussfeld, zukünftig      |  ok   |
| Anztage           |      Mussfeld, größer 0       |  ok   |
| WieOftdieWoche    | Mussfeld, größer 0, kleiner 6 |  ok   |
| MinTeilnehmer     |      Mussfeld, größer 0       |  ok   |
| Maxlnehmer        |      Mussfeld, größer 0       |  ok   |
| Gebuehr           |      Mussfeld, größer 0       |  ok   |
| MwSt              |      Mussfeld, größer 0       |  ok   |
| Kursbeschreibung  |                               |  ok   |
| Kursstatus        |       Default ist aktiv       |  ok   |


ToDo:
- MaxTeilnehmer größer als MinTeilnehmer
- allgemeine Fehlermeldung

## KursListe 
- Button Delete, Edit ok
- ToDo: Details, AnzFreiePlaetze berechnen, 

## PersonAnlegen 
- First, Lastname und email ohne Check, keine Fehlermeldung
- bei Nicht Speichern, keine Fehlermeldung
- deutsche und englische Bezeichnungen
- was ist mit Anrede (kursDetails)

## PersonenListe 
- bei Manage fehlerhafte Zuordnung

### Stand 13.03.23 <p>

## KursAnlegen
| Feldname   |            Bedingung             |   Stand |
|------------|:--------------------------------:|:-----:|
| Kursname   |     Mussfeld, Länge größer 0     |    ok |
| Startdatum |       Mussfeld, zukünftig        |    ok |
| Anztage    |        Mussfeld, größer 0        |    ok |
| WieOftdieWoche |  Mussfeld, größer 0, kleiner 6   |    ok |
| MinTeilnehmer |        Mussfeld, größer 0        |    ok |
| Maxlnehmer |        Mussfeld, größer 0        |    ok |
| Gebuehr    |        Mussfeld, größer 0        |    ok |
| MwSt       |        Mussfeld, größer 0        |    ok |
| Kursbeschreibung |                                  |    ok |
| Kursstatus | Mussfeld, Box für aktiv, geplant | ok    |



- MaxTeilnehmer groesser als MinTeilnehmer ok</p>
- Button Speichern nur möglich, wenn alle Mussfelder ausgefüllt ok</p>
- Button Reset ok

## KursListe 
- Suchen ok<p>
- Startdatum, Enddatum, FreiePlaetze, Zugesagt, Status ok
- Action Detail: Back, Personen hinzufügen ok: zuTeilnehmer, zuInteressent, Delete, back ok<p>
  Kursname, Start- und Enddatum, AnzahlKursTage, WieOftinderWoche, FreierPlaetze, Kursgebühre ok
- Action Edit: nur für zukünftige Kurse ok<p>
  Keine Abfrage für Abbruch
- Action Delete: ok<p>
- Action Manage: nur für zukünftige Kurse ok <p>
  Startdatum, FreiePlaetze, Suche ok <p>
  zuTeilnehmer, zuInteressent, Delete, back ok<p>

ToDo:
- Sortieren nach Tabellenspalten nicht ok<p>
- Kurse müssen bei Aufruf der Kursliste gecheckt werden nach Datum. Ist das Anfangsdatum in der Vergangenheit und das Enddatum in der Zukunft, muss der Status automatisch auf Aktiv gesetzt werden. ist das Enddatum in der vergangenheit, muss der Status auf Beendet gesetzt werden.
- Wenn man auf edit-seite ist, muß eine warnung kommen, ob man speichern oder abbrechen möchte. Beim jetzigen stand, bleibt die edit-seite mit inhalt bestehen, auch wenn man auf neu-anlegen klickt.
  
  



