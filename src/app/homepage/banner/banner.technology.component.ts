import { Component, Input } from '@angular/core';

import { IBannerPost } from './banner.post.interface';

@Component({
  template: `
        <div class="post-highlights1">
	  <h3>Technology: {{ bannerpost.name }}</h3>
     	  <b>Description:</b>
          <p>{{ bannerpost.description }}</p>
	</div>
  `,
  styleUrls: ['./banner.component.css']
})
export class TechnologyComponent implements IBannerPost {
   @Input() bannerpost: any;
}
