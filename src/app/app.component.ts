import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AddComponentComponent } from './components/add-component/add-component.component';
import { EmpDataService } from './services/emp-data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from './services/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  displayedColumns: string[] = [
      'id',  
      'firstname',
      'lastname',
      'email',
      'dob',
      'gender',
      'education',
      'company',
      'experience',
      'package',
      'action'
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog, private _empService:EmpDataService, private _snackbar:CoreService){
    }

    ngOnInit(): void {
      this.getEmpList()
        
    }
    handleOpenForm(){
      const dialogRef = this._dialog.open(AddComponentComponent)
      dialogRef.afterClosed().subscribe({
        next: (val) =>{
          if(val){
            this.getEmpList()
          }
        }, error: console.log,
      })
    }

    getEmpList(){
      this._empService.getEmp().subscribe({
        next: (res: any) =>{
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        }, error: console.log
      })
    }

    // Table Filtering
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    deleteEmployee(id: number){
      if(confirm('Would you like to delete the user?')){
        this._empService.deleteEmp(id).subscribe({
          next: (res) => {
            // alert('User Deleted!')
            this._snackbar.getNotified('User Deleted!');
            this.getEmpList();
          }, error: console.log,
        })
      }
    }

    handleEditForm(data: any){

      const dialogRef =   this._dialog.open(AddComponentComponent, {
        data,
      });

      dialogRef.afterClosed().subscribe({
        next: (val) => {
          if(val){
            this.getEmpList()
          }  
        }, error: console.log,
      })
    }
}