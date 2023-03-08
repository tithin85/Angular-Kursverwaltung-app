export interface Kurs {
  id?: number;
  name?: string;
  anzahlTage?: number;
  wieOftinWoche?: number;
  startDatum?: Date;
  minTnZahl?: number;
  maxTnZahl?: number;
  gebuehrBrutto?: number;
  mwstProzent?: number;
  kursBeschreibung?: string;
  status?: string;
  endeDatum?: Date;
  freiePlaetze?: number;

}
