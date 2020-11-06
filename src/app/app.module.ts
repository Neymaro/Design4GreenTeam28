import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    HttpClientModule,
    MatPaginatorModule,
    MatInputModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
