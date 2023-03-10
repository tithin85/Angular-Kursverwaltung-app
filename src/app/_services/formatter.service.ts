import { Injectable } from '@angular/core';
import { Location } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class FormatterService {

  constructor(public location: Location ) {
  }

  formatDate(inputDate: Date | string): string {
    const dateObj = new Date(inputDate);
    const year = dateObj.getFullYear();
    const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    const day = ('0' + dateObj.getDate()).slice(-2);
    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
  }

  formatNumber(num: number): string {
    return num.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  urlEncodeString(inputString: string) {
    // Verwenden Sie den regulären Ausdruck, um alle Zeichen zu finden, die nicht alphanumerisch sind oder nicht in der Liste der erlaubten Zeichen stehen.
    const pattern = /([^a-zA-Z0-9\-_.~])/g;
    // Ersetzen Sie jeden Treffer durch sein URL-codiertes Äquivalent.
    const encodedString = inputString.replace(pattern, (match, p1) => {
      return encodeURIComponent(p1);
    });
    return encodedString;
  }

  back(){
    this.location.back();
  }

}
