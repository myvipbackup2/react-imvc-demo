/**
 * Created by zixiangli on 2017/6/15.
 */

import Controller from 'react-imvc/controller'
import View from './view'

export default class Login extends Controller {
  preload = {
    bootstrap: '/app-learn/css/bootstrap.min.css',
    animate: '/app-learn/css/animate.css',
    style: '/app-learn/css/style.css'
  };
  View = View;
}
