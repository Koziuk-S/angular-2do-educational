import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  public users = _users;

  constructor() { }

  ngOnInit() {
  }

}

const _users = [
  {
    name: 'Marc Bernard',
    description: 'Uniquely reinvent robust bandwidth before focused materials. Continually reintermediate backward-compatible ' +
      'infomediaries and parallel e-commerce. Distinctively disintermediate multifunctional testing procedures.',
    photo: '../../../../assets/users/user-2.png'
  },
  {
    name: 'Betti Stich',
    description: 'Competently engage intermandated mindshare whereas multimedia based sources. Credibly disseminate dynamic e-business ' +
      'and team driven potentialities. Dramatically impact client-centric.',
    photo: '../../../../assets/users/user-1.png'
  }
];
