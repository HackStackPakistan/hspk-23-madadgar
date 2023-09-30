import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss'],
})
export class ReportCardComponent  implements OnInit {
  @Input() reportImageURL: String = "";
  @Input() reportTitle: String = "";
  reportTitleTruncated: String | unknown;
  @Input() report: Object | unknown;
  @Input() reportSeverity: "HIGH" | "MEDIUM" | "LOW" = "LOW";
  @Input() timeSinceReport: String = "";

  constructor(private router: Router) { }

  ngOnInit() {
    this.reportTitleTruncated = this.reportTitle.substring(0, 15);
  }

  navigateToReport() {
    // this.router.navigate([this.reportRoute]);
  }
}
