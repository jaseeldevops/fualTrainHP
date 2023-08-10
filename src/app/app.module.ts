import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { SettingsComponent } from './home/settings/settings.component';
import { UsersComponent } from './home/settings/users/users.component';
import { TablePagingComponent } from './components/table-paging/table-paging.component';
import { SalesDashboardComponent } from './home/dashboard/sales-dashboard/sales-dashboard.component';
import { RetailEngineerDashboardComponent } from './home/dashboard/retail-engineer-dashboard/retail-engineer-dashboard.component';
import { ComcoDashboardComponent } from './home/dashboard/comco-dashboard/comco-dashboard.component';
import { WidgetsComponent } from './home/dashboard/widget/widgets/widgets.component';
import { Top10SalesComponent } from './home/dashboard/widget/top10-sales/top10-sales.component';
import { NozzleUtilisationComponent } from './home/dashboard/widget/nozzle-utilisation/nozzle-utilisation.component';
import { TarComponent } from './home/dashboard/widget/tar/tar.component';
import { NillSalesComponent } from './home/dashboard/widget/nill-sales/nill-sales.component';
import { SapVsTransitComponent } from './home/dashboard/widget/sap-vs-transit/sap-vs-transit.component';
import { TodaySalesComponent } from './home/dashboard/widget/today-sales/today-sales.component';
import { PieChartComponent } from './home/dashboard/widget/pie-chart/pie-chart.component';
import { LineGraphComponent } from './home/dashboard/widget/line-graph/line-graph.component';
import { NgChartsModule } from 'ng2-charts';
import { InventoryForecastComponent } from './home/dashboard/widget/inventory-forecast/inventory-forecast.component';
import { BarGraphComponent } from './home/dashboard/widget/bar-graph/bar-graph.component';
import { InterlockComponent } from './home/dashboard/widget/interlock/interlock.component';
import { NozzleTankComponent } from './home/dashboard/widget/nozzle-tank/nozzle-tank.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    SettingsComponent,
    UsersComponent,
    TablePagingComponent,
    SalesDashboardComponent,
    RetailEngineerDashboardComponent,
    ComcoDashboardComponent,
    WidgetsComponent,
    Top10SalesComponent,
    NozzleUtilisationComponent,
    TarComponent,
    NillSalesComponent,
    SapVsTransitComponent,
    TodaySalesComponent,
    PieChartComponent,
    LineGraphComponent,
    InventoryForecastComponent,
    BarGraphComponent,
    InterlockComponent,
    NozzleTankComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
