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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
