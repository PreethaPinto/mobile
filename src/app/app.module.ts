import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { ProductsComponent } from './products/products.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ProductDialogComponent } from './products/product-dialog/product-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MobileHourWebsiteComponent } from './mobile-hour-website/mobile-hour-website.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDialogComponent,
    MobileHourWebsiteComponent,
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
