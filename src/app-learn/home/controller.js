/**
 * Created by zixiangli on 2017/6/15.
 */

import Controller from 'react-imvc/controller'
import * as Model from './model'
import View from './view'

const { initialState, ...actions } = Model

export default class Home extends Controller {
  preload = {
    test: '/app-learn/css/test.css'
  };

  View = View;
  initialState = initialState;
  actions = actions;

  handleIncrement = () => {
    let { store } = this
    let { INCREMENT } = store.actions
    INCREMENT()
  };

  handleDecrement = () => {
    let { store } = this
    let { DECREMENT } = store.actions
    DECREMENT()
  };

  // 在View组件插入到dom树时触发
  componentDidMount () {
    console.log('didMount')
    this.handleIncrement()
  }
}
