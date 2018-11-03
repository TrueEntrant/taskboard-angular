import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CoreModule } from "./containers/core/core.module";

const Imports = [
  BrowserModule,
  CoreModule
];

@NgModule({
  declarations: [AppComponent],
  imports: Imports,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
