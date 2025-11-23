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
  const res = await this.videoGen.generateVideo(this.prompt).toPromise();
  this.apiFileId = res?.apiFileId;

  const interval = setInterval(async () => {
    const statusRes = await this.videoGen.checkStatus(this.apiFileId).toPromise();

    if (statusRes && statusRes.status === "finished") {
      clearInterval(interval);
      this.videoUrl = statusRes.apiFileSignedUrl!;
    }
  }, 3000);
}
}
