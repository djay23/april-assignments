import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { JwtModule } from "@auth0/angular-jwt";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserListComponent } from "./user-list/user-list.component";
import { TodoService } from "./todo.service";
import { UserService } from "./user.service";
import { LoginComponent } from "./login/login.component";

import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";
import { HomeComponent } from './home/home.component';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // Add this import here
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:4000"],
        blacklistedRoutes: ["localhost:4000/api/auth"]
      }
    })
  ],
  providers: [TodoService, UserService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
