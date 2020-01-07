import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { GreetingComponent } from "./greeting/greeting.component";
import { DateComponent } from "./date/date.component";
import { LocationComponent } from "./location/location.component";
import { StartAppComponent } from "./start-app/start-app.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "start-app",
        component: StartAppComponent,
        data: { pageIndex: 1 }
      },
      {
        path: "greeting",
        component: GreetingComponent,
        data: { pageIndex: 2 }
      },
      { path: "date", component: DateComponent, data: { pageIndex: 3 } },
      {
        path: "location",
        component: LocationComponent,
        data: { pageIndex: 4 }
      },
      { path: "**", redirectTo: "start-app" }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
