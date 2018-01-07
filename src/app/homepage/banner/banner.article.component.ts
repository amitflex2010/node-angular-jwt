import { Component, Input } from '@angular/core';

import { IBannerPost } from './banner.post.interface';

@Component({
  template: `
        <div class="post-highlights2">
            <p><b>Article-{{ bannerpost.sn }}: {{ bannerpost.title }}</b></p>
            <p>Category: {{ bannerpost.category }}</p>
	</div>
  `,
  styleUrls: ['./banner.component.css']
})
export class ArticleComponent implements IBannerPost {
   @Input() bannerpost: any;
}
