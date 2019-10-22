import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// trasnlate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SportsComponent } from './components/sports/sports.component';
import { CasinoComponent } from './components/casino/casino.component';
import { CasinoLiveComponent } from './components/casino-live/casino-live.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SportsComponent,
    CasinoComponent,
    CasinoLiveComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader (http);
        },
        deps: [ HttpClient ]
      }
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
