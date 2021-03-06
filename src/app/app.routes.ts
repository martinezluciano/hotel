import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { LoginComponent } from "./components/login/login.component";
import { AboutComponent } from "./components/about/about.component";
import { GpsComponent } from "./components/shared/gps/gps.component";
import { ReserveComponent } from "./components/reserve/reserve.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";

export const ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "reserva", component: ReserveComponent },
  { path: "about", component: AboutComponent },
  { path: "busqueda", component: SearchComponent },
  { path: "login", component: LoginComponent },
  { path: "contacto", component: GpsComponent },
  { path: "sign-up", component: SignUpComponent },


  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "**", pathMatch: "full", redirectTo: "login" }
];
