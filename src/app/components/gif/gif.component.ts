import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit, AfterViewInit {

  @Input() value;
  link: string;
  @ViewChild('video') el: ElementRef;
  @ViewChild('selector') se: ElementRef;
  vedio: HTMLVideoElement;
  selector: HTMLSelectElement;

  constructor() {
  }

  ngOnInit() {
    this.link = this.value[0];
  }
  ngAfterViewInit(): void {
    this.vedio = this.el.nativeElement;
    this.selector = this.se.nativeElement;
    this.vedio.setAttribute('src', this.link);
  }

  ngChange() {
    const source = this.selector.value;
    this.vedio.setAttribute('src', source);
    this.vedio.load();
  }
}
