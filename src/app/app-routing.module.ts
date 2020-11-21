import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HomelieComponent } from "./components/homelie/homelie.component";
import { EventComponent } from "./components/event/event.component";
import { ArticleComponent } from "./components/article/article.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "contact", component: ContactComponent },
  { path: "sermon", component: HomelieComponent },
  { path: "event", component: EventComponent },
  { path: "article", component: ArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
