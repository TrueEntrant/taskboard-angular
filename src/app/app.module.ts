import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TopNavigationModule } from "./top.navigation/top.navigation.module";
import { TaskfieldModule } from "./taskfield/taskfield.module";
import { MenuModule } from "./menu/menu.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const Imports = [
  BrowserModule,
  TopNavigationModule,
  TaskfieldModule,
  FormsModule,
  ReactiveFormsModule,
  MenuModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: Imports,
  providers: [],
  exports: Imports,
  bootstrap: [AppComponent]
})
export class AppModule {}
