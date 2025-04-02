import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { MissionlistComponent } from './components/missionlist/missionlist.component';
import { MissiondetailsComponent } from './components/missiondetails/missiondetails.component';
import { provideHttpClient } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';  
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MissionfilterComponent } from './components/missionfilter/missionfilter.component';
import { MatIconModule } from '@angular/material/icon';


const routes: Routes = [
  { path: '', component: MissionlistComponent },
  { path: 'mission/:id', component: MissiondetailsComponent }
];

export const appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,  
    MatToolbarModule,
    MissionfilterComponent,
    MatIconModule,
  ]
};
