import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.page.html',
  styleUrls: ['./supervisor.page.scss'],
})
export class SupervisorPage implements OnInit {

  constructor(private scroller: ViewportScroller){

  }

  pages: string[] = ["Thick Film", "Thin Film", "Hermetics", "Hybrids"];

  active: string = ""
  
  nouns: Array<{name:string, stages: string[], jobs:{id: string, stage: number}[]}> = [
    {
      name: "alpha",
      stages: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t"],
      jobs: [
        {id: "123456", stage: 0},
        {id: "123457", stage: 1},
        {id: "123458", stage: 5},
        {id: "123459", stage: 12},
        {id: "123460", stage: 19},
      ],
    },
    {
      name: "bravo",
      stages: ["a","b","c","d","e","f","g","h","i","j","k"],
      jobs: [
        {id: "123456", stage: 1},
        {id: "123457", stage: 5},
        {id: "123458", stage: 7},
        {id: "123459", stage: 10},
        {id: "123460", stage: 10},
      ],
    },
  ];

  jobCounts: Array<{
    name: string;
    range: number;
    badges: Array<{ stage: string, count: number, position: number, color: string, highlight:boolean }>;
  }> = [];

  getBadgeColor(count: number): string {
    if (count >= 3) return 'danger';
    if (count >= 2) return 'warning';
    return 'medium';
  }

  ngOnInit() {
    this.jobCounts = this.nouns.map(noun => {
      // Count jobs per stage
      const stageCounts: Map<number, number> = new Map();
      
      // Initialize all stages with 0
      noun.stages.forEach((_, idx) => {
        stageCounts.set(idx, 0);
      });
      
      // Count jobs
      noun.jobs.forEach(job => {
        const stageVal = parseInt(String(job.stage));
        if (stageCounts.has(stageVal)) {
          stageCounts.set(stageVal, (stageCounts.get(stageVal)! + 1));
        }
      });
      
      const maxStage = noun.stages.length;
      
      // Build badges array (only stages with jobs)
      const badges: Array<{ stage: string, count: number, position: number, color: string, highlight:boolean }> = [];
      
      noun.stages.forEach((stage, idx) => {
        const stageNum = idx;
        const count = stageCounts.get(stageNum) ?? 0;
        
        // Position badge based on: (stage - 1) / (maxStage - 1) * 100
        let position = 0;
        if (maxStage > 1) {
          position = ((stageNum) / (maxStage-1)) * 100;
          // position = position - (position*0.03);
          console.log("Noun: ", noun.name, "stageNum: ", stageNum, "position: ", position);
        }
        

        badges.push({
          stage: noun.stages[stageNum],
          count,
          position,
          color: this.getBadgeColor(count),
          highlight: false
        });
      });
      
      let range = 0;
      if (maxStage > 1) {
        range = maxStage - 1;
      }
      
      return {
        name: noun.name,
        range,
        badges,
      };
    });
  }
  onMouseEnter(
    badge:{ stage: string, count: number, position: number, color: string, highlight: boolean}
  ){
    console.log(badge);
    badge.highlight = true;
  }
  onMouseLeave(
    badge:{ stage: string, count: number, position: number, color: string, highlight: boolean}
  ){
    console.log(badge);
    badge.highlight = false;
  }
  onAccordionChange(event: any){
    this.active = event.detail.value;
  }
  onBadgeClick(
    noun: string, 
    badge:{ stage: string, count: number, position: number, color: string, highlight: boolean}
  ){
    console.log("target: ", noun, "stage: ", badge.stage);
    this.active = noun;
    setTimeout(() =>{
      const el = document.getElementById(noun + "-" + badge.stage);
      if(el){
        el.scrollIntoView({behavior: 'smooth', block: 'start'});
        badge.highlight = true;
      }
    }, 300)
  }

}