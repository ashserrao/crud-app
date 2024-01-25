import { Injectable } from "@angular/core";
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class CoreService{
    constructor(private _snackbar:MatSnackBar){}

    getNotified(message: string, action: string = 'Done'){
        this._snackbar.open(message, action, {
            duration: 1000,
            verticalPosition: "top", 
        });
    }
}