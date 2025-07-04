import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  createSnackBar(type:string, massage: string): void {
    this.snackBar.open( massage , '' , {
      duration:4000,
      panelClass:type
    });
  }
}
