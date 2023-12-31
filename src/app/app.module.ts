import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { CadastroResidenciasComponent } from './pages/cadastro-residencias/cadastro-residencias.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { FilterComponent } from './components/filter/filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from './hooks/useHttpInterceptor';
import { MatCardModule } from '@angular/material/card';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgxMaskModule } from 'ngx-mask';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { BotaoCarregarMaisComponent } from './components/botao-carregar-mais/botao-carregar-mais.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    CatalogoComponent,
    CadastroResidenciasComponent,
    FilterComponent,
    ConfirmDialogComponent,
    BotaoCarregarMaisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSliderModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot(),
    MatSnackBarModule,
    MatMenuModule,
  ],
  providers: [
    // {
    //   provide: 'HTTP_INTERCEPTORS',
    //   useClass: HttpInterceptorService,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
