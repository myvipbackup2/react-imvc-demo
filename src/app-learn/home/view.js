/**
 * Created by zixiangli on 2017/6/15.
 */

import React from 'react'
import { Style } from 'react-imvc/component'

export default function View ({ state, handlers }) {
  return (
    <div>
      <Style name='test' />
      <h1>Count:{state.count}</h1>
      <div>
        <button onClick={handlers.handleIncrement}>+1</button>
        <button onClick={handlers.handleDecrement}>-1</button>
      </div>
    </div>
  )
}
