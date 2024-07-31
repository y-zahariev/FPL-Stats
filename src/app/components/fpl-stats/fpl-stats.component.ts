import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { FplService } from '../../services/fpl.service';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fpl-stats',
  templateUrl: './fpl-stats.component.html',
  styleUrls: ['./fpl-stats.component.css'],
  standalone: true,
  imports: [
    CommonModule,
      // Include CommonModule here
  ],
  providers: [ FplService]

})
export class FplStatsComponent implements OnInit {
  fplData: any;

  constructor(private fplService: FplService) { }

  ngOnInit(): void {
    this.fplService.getFplData().subscribe(data => {
      this.fplData = data;
      console.log(this.fplData);
    });
  }
}
