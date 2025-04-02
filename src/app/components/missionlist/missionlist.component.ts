import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacexService } from '../../services/spacex.service';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';
import { Mission } from '../../models/mission.model';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MissionfilterComponent
  ],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missions: Mission[] = [];

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.spacexService.getAllMissions().subscribe((data: Mission[]) => {
      this.missions = data;
    });
  }

  filterMissions(filters: { year: string, launchStatus: string, landingStatus: string }) {
    const { year, launchStatus, landingStatus } = filters;
    let url = 'https://api.spacexdata.com/v3/launches';
    let queryParams = [];

    if (year) {
      queryParams.push(`launch_year=${year}`);
    }
    if (launchStatus) {
      queryParams.push(`launch_success=${launchStatus === 'successful' ? 'true' : 'false'}`);
    }
    if (landingStatus) {
      queryParams.push(`land_success=${landingStatus === 'successful' ? 'true' : 'false'}`);
    }

    if (queryParams.length) {
      url += '?' + queryParams.join('&');
    }

    this.spacexService.getFilteredMissions(url).subscribe((data: Mission[]) => {
      this.missions = data;
    });
  }
}
