//// vendor JS files
window.jQuery = window.$ = require('../../node_modules/jquery/dist/jquery.min');
require('../../node_modules/bootstrap/dist/js/bootstrap.min');

//// Base packages

// https://github.com/MikeRyan52/angular-decorators
import {Module} from 'angular-decorators';
import "angular";
import 'angular-ui-router';
import 'reflect-metadata';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-touch';
import carousel from 'angular-ui-bootstrap/src/carousel';


//// local config
import {routing} from './app.routing';

//// CSS
import '../style/app.css';
import '../style/bootstrap.min.css';
import '../style/business-casual.css';

// SASS
import '../style/sass/main.scss';

//// modules
// import * as TimeTableModule from './components/timetable.js/timetable-provider';

//// components
import {NavigationComponent} from './components/common/navigation-component';
import {FooterComponent} from './components/common/footer-component';
import {HomeComponent} from './home/home-component';
import {ContactComponent} from './contact/contact-component';
import {LineUpComponent} from './line-up/line-up-component';
import {AboutComponent} from './about/about-component';
import {BoxComponent} from './components/box/box-component';
import {TitleBoxComponent} from './components/box-title-only/box-component';
import {TimeTableComponent} from './components/timetable/timetable-component';
import {SponsorService} from './sponsors/sponsor-service';

const MODULE_NAME = 'ddayApp';

Module(MODULE_NAME, ['ngAnimate', 'ngSanitize', 'ngTouch', 'ui.router', carousel])
    .config(routing)
    .add(NavigationComponent)
    .add(FooterComponent)
    .add(HomeComponent)
    .add(ContactComponent)
    .add(LineUpComponent)
    .add(AboutComponent)
    .add(BoxComponent)
    .add(TitleBoxComponent)
    .add(TimeTableComponent)
    .add(SponsorService)
;


export default MODULE_NAME;