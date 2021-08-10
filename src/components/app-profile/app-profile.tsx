import { Component, h} from '@stencil/core';
//import Tagify from '@yaireo/tagify';
import "@yaireo/tagify/dist/tagify.css" // Tagify CSS

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
})

export class AppProfile {

  render() {
    return [
      <ion-content class="ion-padding">
        <zt-input-tags>tags</zt-input-tags>
      </ion-content>,
    ];
  }
}


