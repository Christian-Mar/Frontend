import React, { Fragment } from 'react';
import MainNavigation from './main-navigation';

function Layout () {
  return (
    <Fragment>
      <MainNavigation/>
      <main>{props.children}</main>
    </Fragment>
  )
}

export default Layout;