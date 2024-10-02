import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatButtonModule,MatToolbarModule,MatSidenavModule,
    MatIconModule,MatCardModule,MatGridListModule,MatListModule,
    MatFormFieldModule,MatInputModule
  ],
  exports:[CommonModule,MatButtonModule,MatToolbarModule,MatSidenavModule,
    MatIconModule,MatCardModule,MatGridListModule,MatListModule,
    MatFormFieldModule,MatInputModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Add this if necessary
})
export class MaterialModule { }
