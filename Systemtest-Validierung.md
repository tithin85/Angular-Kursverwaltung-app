### Systemtest / Validierung
Stand 08.03.2023

## KursAnlegen 
| Feldname          |   Bedingung                      | Stand |
|-------------------|:----------------------------------------------------------------------------:|:-----:|
| Kursname          |  Mussfeld, Länge größer 0        |  ok   |
| Startdatum        |  Mussfeld, zukünftig             |  ok   |
| Anztage           |  Mussfeld, größer 0              |  ok   |
| WieOftdieWoche    |  Mussfeld, größer 0, kleiner 8   |  ok   |
| MinTeilnehmer     |  Mussfeld, größer 0              |  ok   |
| Maxlnehmer        |  Mussfeld, größer 0              |  ok   |
| Gebuehr           |  Mussfeld, größer 0              |  ok   |
| MwSt              |  Mussfeld, größer 0              |  ok   |
| Kursbeschreibung  |                                  |  ok   |
| Kursstatus        | Default ist aktiv                |  ok   |


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

Stand 11.03.23
