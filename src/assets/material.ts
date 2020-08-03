import { NgModule } from '@angular/core';
import {MatNativeDateModule, MatDatepickerModule, MatIconModule,
  MatButtonModule, MatCheckboxModule, MatToolbarModule,
  MatCardModule, MatFormFieldModule, MatInputModule,
  MatRadioModule, MatListModule, } from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatNativeDateModule,
    MatDatepickerModule, MatIconModule, MatButtonModule,
    MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatRadioModule,
    MatListModule],
  exports: [MatButtonModule, MatCheckboxModule, MatNativeDateModule,
    MatDatepickerModule, MatIconModule, MatButtonModule,
    MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatRadioModule,
    MatListModule],
})
export class MaterialModule { }