import { Component } from '@angular/core';
import { faLinkedin,faGithub,faSearchengin, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen, faRegistered} from '@fortawesome/free-regular-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  icons={
    camera:faCamera,
    git:faGithub,
    doc:faEnvelopeOpen,
    fb:faFacebookMessenger,
    search:faSearchengin,
    reg:faRegistered
  }

}
