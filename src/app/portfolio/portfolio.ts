import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [NgOptimizedImage],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Portfolio {
  protected readonly projects = [
    {
      title: 'js-pollock',
      description: 'Single Page App for computer generated art inspired by Jackson Pollock',
      url: 'https://jspollock.art',
      img: 'portfolio/js-pollock.png',
    },
    {
      title: 'Destiny Insights',
      description: 'Node Twitter bot and web app for Destiny the game',
      url: 'https://twitter.com/destinyinsights',
      img: 'portfolio/destiny-insights.png',
    },
    {
      title: 'resume-api',
      description: 'Open source REST API for my JSON-based standard format resume',
      url: 'https://dev.to/cujarrett/how-i-built-a-resume-api-w-go-terraform-and-aws-371o',
      img: 'portfolio/resume-api.png',
    },
    {
      title: 'ES6 in Six Hours',
      description: 'Learn ES6 in Six One Hour Sessions',
      url: 'https://github.com/cujarrett/es6-in-six-hours',
      img: 'portfolio/es6-in-six-hours.png',
    },
    {
      title: 'markdown-tables',
      description: 'Helping the world move Excel table data into Markdown tables',
      url: 'https://github.com/cujarrett/markdown-tables',
      img: 'portfolio/markdown-tables.png',
    },
  ];
}
