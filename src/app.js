import React from 'react'
import { render } from 'react-dom'

import IconBag from './svg/icon-bag.svg';
import IconSearch from './svg/icon-search.svg';
import IconHeart from './svg/icon-heart.svg';

const App = () => {
  return (
    <div>
      <h1>This is my app</h1>
      <IconBag />
      <IconSearch />
      <IconHeart />
    </div>
  )
}

const el = document.getElementById('app')

render (<App />, el)
