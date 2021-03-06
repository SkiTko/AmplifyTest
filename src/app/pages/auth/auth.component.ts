import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private amplifyService: AmplifyService,
    private router: Router,
  ) {
    // ログインに成功したらトップに遷移する。
    this.amplifyService.authStateChange$.subscribe((authState) => {
      if (authState.state === 'signedIn') {
        this.router.navigate(['/']);
      }
    })
  }

  ngOnInit() {
  }

}
