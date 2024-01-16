import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ShrinkResponse, ShrinkService} from "../shared/service/shrink.service";
import {EMPTY, Observable} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-shrink.page',
  standalone: true,
  imports: [
    RouterLink
    , AsyncPipe
    , NgIf
  ],
  templateUrl: './shrink.page.component.html',
  styleUrl: './shrink.page.component.css'
})
export class ShrinkPageComponent implements OnInit {

  urlToShrink: string = '';
  shrinkResponse$: Observable<ShrinkResponse> = EMPTY;
  constructor(private activeRoute: ActivatedRoute, private shrinkService: ShrinkService) {
  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      this.urlToShrink = params['url'];
    })

    this.shrinkResponse$ = this.shrinkService.shrinkUrl(this.urlToShrink);

  }
}
