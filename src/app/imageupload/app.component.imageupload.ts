import { Component, OnInit  } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-imageupload',
  templateUrl: './app.component.imageupload.html',
  styleUrls: ['./app.component.imageupload.css']
})
export class ImageUploadComponent {
  title = 'ImageUpload';

  private classData;
  public uploader: FileUploader = new FileUploader({url: 'http://localhost:3000/api/uploads'});
  constructor() {
   }
}

