import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  HostBinding,
  HostListener,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './login/login.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // isFixedNavbar: any;
  // // @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  // @HostBinding('class.navbar-opened') navbarOpened = false;

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const offset =
  //     window.pageYOffset ||
  //     document.documentElement.scrollTop ||
  //     document.body.scrollTop ||
  //     0;
  //   if (offset > 10) {
  //     this.isFixedNavbar = true;
  //   } else {
  //     this.isFixedNavbar = false;
  //   }
  // }

  constructor(public _authService: AuthService) {}

  ngOnInit(): void {}

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // toggleNavbar() {
  //   this.navbarOpened = !this.navbarOpened;
  // }
  // toggleSideBar() {
  //   this.toggleSideBarForMe.emit();
  // }
}
