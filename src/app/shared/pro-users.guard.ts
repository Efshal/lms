import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { FirebaseVideoService } from '../services/firebase-video.service';

@Injectable( {
  providedIn: 'root'
} )
export class ProUsersGuard implements CanActivate {

  constructor( private route: ActivatedRoute,
    public auth: AuthService,
    public videoService: FirebaseVideoService,
    private readonly router: Router

  ) {
  }

  async canActivate( route: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot ): Promise<boolean | UrlTree> {

    const urlTree = this.router.parseUrl( routerState.url );
    console.log( urlTree['queryParams']['id'] )
    let courseId = urlTree['queryParams']['id']
    console.log( courseId )
    let user = await this.auth.getUserRole()
    console.log("user",user,"video")
    let video = await this.videoService.getCourseAtribute( courseId )
    console.log("user",user,"video",video)
    if ( user == true && video == true ) {
      console.log( "1" )
      return true
    }
    if ( video=== false ) {
      console.log( "2" )
      return true
    }
    else {
      console.log( "3" )
      this.router.navigate(['home'])
      return false
    }

  }

}
