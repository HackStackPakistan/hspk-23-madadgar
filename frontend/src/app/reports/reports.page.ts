import { Component, OnInit } from '@angular/core';

interface ReportObject {
  title: String;
  severity: "HIGH" | "MEDIUM" | "LOW";
  imageURL: String;
  timeSince: String;
}

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  reports: ReportObject[] = [
    {
      imageURL: "https://www.adecesg.com/assets/img/blog/wildfire-1105209-659x.png",
      title: "Wildfire at Queens, Australia",
      severity: "HIGH",
      timeSince: "8m"
    },
    {
      imageURL: "https://www.adecesg.com/assets/img/blog/wildfire-1105209-659x.png",
      title: "Wildfire at Queens, Australia",
      severity: "MEDIUM",
      timeSince: "8m"
    },
    {
      imageURL: "https://www.adecesg.com/assets/img/blog/wildfire-1105209-659x.png",
      title: "Wildfire at Queens, Australia",
      severity: "LOW",
      timeSince: "8m"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
