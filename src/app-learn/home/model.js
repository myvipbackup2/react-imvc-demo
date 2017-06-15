/**
 * Created by zixiangli on 2017/6/15.
 */

export let initialState = {
  count: 0
}

export const INCREMENT = state => {
  return {
    ...state,
    count: state.count + 1
  }
}

export const DECREMENT = state => {
  return {
    ...state,
    count: state.count - 1
  }
}
