import { NgModule } from '@angular/core';
import {MatNativeDateModule, MatDatepickerModule, MatIconModule,
  MatButtonModule, MatCheckboxModule, MatToolbarModule,
  MatCardModule, MatFormFieldModule, MatInputModule,
  MatRadioModule, MatListModule, MatSelectModule,
  MatMenuModule, MatSidenavModule, MatPaginatorModule,
  MatSortModule, MatTableModule, MatExpansionModule} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatNativeDateModule,
    MatDatepickerModule, MatIconModule, MatButtonModule,
    MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatRadioModule,
    MatListModule, MatSelectModule, MatMenuModule,
    MatSidenavModule, MatPaginatorModule, MatSortModule,
    MatTableModule, MatExpansionModule],
  exports: [MatButtonModule, MatCheckboxModule, MatNativeDateModule,
    MatDatepickerModule, MatIconModule, MatButtonModule,
    MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatRadioModule,
    MatListModule, MatSelectModule, MatMenuModule,
    MatSidenavModule, MatPaginatorModule, MatSortModule,
    MatTableModule, MatExpansionModule],
})
export class MaterialModule { }