import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/services/core.service';
import { EmpDataService } from 'src/app/services/emp-data.service';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent implements OnInit {
  empForm: FormGroup

  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate'

  ]
  constructor(private _fb:FormBuilder, private _empService:EmpDataService, private _dialogRef:MatDialogRef<AddComponentComponent>,  @Inject(MAT_DIALOG_DATA) public data:any, private _snackbar:CoreService){
    this.empForm = this._fb.group({
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      email:['', Validators.compose([Validators.required, Validators.email])],
      dob:['', Validators.required],
      gender:['', Validators.required],
      education:['', Validators.required],
      company:['', Validators.required],
      experience:['', Validators.required],
      package:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }
  
  onFormSubmit(){
    if(this.empForm.valid){
      if(this.data){
        this._empService.updateEmp(this.data.id, this.empForm.value).subscribe({
          next:(value:any) => {
            // alert('Employee details Updated');
            this._snackbar.getNotified('Employee details Updated');
            this._dialogRef.close(true);
          }, error: (err: any) =>{
            console.error(err);
          } 
        });
      } else {
        this._empService.addEmp(this.empForm.value).subscribe({
          next:(value:any) => {
            // alert('Employee Added successfully');
            this._snackbar.getNotified('Employee Added successfully');
            this._dialogRef.close(true);
          }, error: (err: any) =>{
            console.error(err);
          } 
        });
      }
      
    }
  }
}
