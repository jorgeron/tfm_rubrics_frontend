import { NgModule } from '@angular/core';
import {MatNativeDateModule, MatDatepickerModule, MatIconModule,
  MatButtonModule, MatCheckboxModule, MatToolbarModule,
  MatCardModule, MatFormFieldModule, MatInputModule,
  MatRadioModule, MatListModule, MatSelectModule,
  MatMenuModule, MatSidenavModule, MatPaginatorModule, MatSortModule,
  MatTableModule} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatNativeDateModule,
    MatDatepickerModule, MatIconModule, MatButtonModule,
    MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatRadioModule,
    MatListModule, MatSelectModule, MatMenuModule,
    MatSidenavModule, MatPaginatorModule, MatSortModule,
    MatTableModule],
  exports: [MatButtonModule, MatCheckboxModule, MatNativeDateModule,
    MatDatepickerModule, MatIconModule, MatButtonModule,
    MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatRadioModule,
    MatListModule, MatSelectModule, MatMenuModule,
    MatSidenavModule, MatPaginatorModule, MatSortModule,
    MatTableModule],
})
export class MaterialModule { }