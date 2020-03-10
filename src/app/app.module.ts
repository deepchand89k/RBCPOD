import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MortgageCalComponent } from "./mortgage-calculator/mortgageCal.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxChartsModule } from "@swimlane/ngx-charts";

@NgModule({
  declarations: [AppComponent, MortgageCalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
