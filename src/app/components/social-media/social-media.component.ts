import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css',
})
export class SocialMediaComponent {
  @Input()
  linkUrl: string = '';

  @Input()
  imgSocial: string = '';

  @Input()
  altImg: string = '';

  @Input()
  userSocial: string = '';
}
