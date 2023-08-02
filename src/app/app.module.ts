import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertifyService } from './service/aletify.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { NavbarComponent } from './navbar/navbar.component';
import {MatTabsModule} from '@angular/material/tabs'; 
import { HttpClientModule } from '@angular/common/http';
import { IncioComponent } from './incio/incio.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IncioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatTabsModule,
    HttpClientModule
   
  ],
  providers: [
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
