import { Component } from '@angular/core';
import { VideoGenService } from '../video.service';

@Component({
  selector: 'app-video-gen',
  templateUrl: './video-gen.component.html',
  styleUrls: ['./video-gen.component.scss']
})
export class VideoGenComponent {
  prompt = '';
  videoUrl = '';
  apiFileId: any;

  constructor(private videoGen: VideoGenService) {}

  async generate() {
    this.apiFileId = await this.videoGen.generateVideo(this.prompt).toPromise();

    const interval = setInterval(async () => {
      const status = await this.videoGen.checkStatus(this.apiFileId).toPromise();

      if (status && status.status === 'finished') {
        clearInterval(interval);
        this.videoUrl = status.apiFileSignedUrl!;
      }
    }, 5000);
  }
}
