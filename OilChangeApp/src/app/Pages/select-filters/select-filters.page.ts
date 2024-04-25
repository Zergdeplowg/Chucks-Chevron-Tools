import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppLauncher } from "@capacitor/app-launcher"

@Component({
  selector: 'app-select-filters',
  templateUrl: './select-filters.page.html',
  styleUrls: ['./select-filters.page.scss'],
})
export class SelectFiltersPage implements OnInit {
  public vin!: string;
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.vin = this.route.snapshot.paramMap.get('vin') as string;
    // AppLauncher.openUrl({url: "com.pgfilter.premiumguardapp"});
  }

}
