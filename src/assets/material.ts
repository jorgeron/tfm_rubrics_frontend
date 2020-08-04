import { NgModule } from '@angular/core';
import {MatNativeDateModule, MatDatepickerModule, MatIconModule,
  MatButtonModule, MatCheckboxModule, MatToolbarModule,
  MatCardModule, MatFormFieldModule, MatInputModule,
  MatRadioModule, MatListModule, MatSelectModule} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatNativeDateModule,
    MatDatepickerModule, MatIconModule, MatButtonModule,
    MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatRadioModule,
    MatListModule, MatSelectModule],
  exports: [MatButtonModule, MatCheckboxModule, MatNativeDateModule,
    MatDatepickerModule, MatIconModule, MatButtonModule,
    MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatRadioModule,
    MatListModule, MatSelectModule],
})
export class MaterialModule { }