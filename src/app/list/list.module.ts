import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list.component";

import { MatListModule, MatIconModule } from "@angular/material";

import { DaycounterModule } from "../daycounter/daycounter.module";
import { HttpClientModule } from "@angular/common/http";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    DaycounterModule,
    FontAwesomeModule
  ],
  declarations: [ListComponent],
  exports: [ListComponent]
})
export class ListModule {}
