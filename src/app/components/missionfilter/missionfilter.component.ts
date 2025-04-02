import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';  
import { MatOptionModule } from '@angular/material/core';  

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,  
    MatOptionModule  
  ],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  launchYear: string = '';
  launchStatus: string = '';
  landingStatus: string = '';

  @Output() yearSelected = new EventEmitter<{ year: string, launchStatus: string, landingStatus: string }>();

  filterByYear() {
    if (this.launchYear.trim() || this.launchStatus || this.landingStatus) {
      this.yearSelected.emit({
        year: this.launchYear.trim(),
        launchStatus: this.launchStatus,
        landingStatus: this.landingStatus
      });
    }
  }

  resetFilters() {
    this.launchYear = '';
    this.launchStatus = '';
    this.landingStatus = '';
    this.yearSelected.emit({ year: '', launchStatus: '', landingStatus: '' });
  }
}
