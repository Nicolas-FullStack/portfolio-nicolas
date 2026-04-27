import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
    constructor() {}

    getProfile(): Profile{

      var profile: Profile = {
        email: 'contato@nicolashenrique661@gmaii.com',
        name: 'Nicolas Henrique',
        whatsApp: 'https://wa.me/+5511914421939?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es!!!',
        linkedIn: 'https://www.linkedin.com/in/nicolas-henrique-48ba27206/'
      }

      return profile;
    }
}
