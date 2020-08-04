import { NgModule } from '@angular/core';
import {MatNativeDateModule, MatDatepickerModule, MatIconModule,
  MatButtonModule, MatCheckboxModule, MatToolbarModule,
  MatCardModule, MatFormFieldModule, MatInputModule,
  MatRadioModule, MatListModule, MatSelectModule,
  MatMenuModule, MatSidenavModule} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatNativeDateModule,
    MatDatepickerModule, MatIconModule, MatButtonModule,
    MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatRadioModule,
    MatListModule, MatSelectModule, MatMenuModule,
    MatSidenavModule],
  exports: [MatButtonModule, MatCheckboxModule, MatNativeDateModule,
    MatDatepickerModule, MatIconModule, MatButtonModule,
    MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatRadioModule,
    MatListModule, MatSelectModule, MatMenuModule,
    MatSidenavModule],
})
export class MaterialModule { }