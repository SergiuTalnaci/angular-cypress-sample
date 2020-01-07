import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { AppRoutingModule } from "./app.routing.module";

import { AppComponent } from "./app.component";
import { DatePickerComponent } from "./date-picker/date-picker.component";
import { GreetingComponent } from "./greeting/greeting.component";
import { DateComponent } from "./date/date.component";
import { LocationComponent } from "./location/location.component";
import { StartAppComponent } from "./start-app/start-app.component";

import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from "@angular/material/core";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  declarations: [
    AppComponent,
    GreetingComponent,
    StartAppComponent,
    DateComponent,
    LocationComponent,
    DatePickerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
