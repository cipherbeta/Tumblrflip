import React from 'react';

import Header from './components/header';
import OverlayTrigger from './components/overlayTrigger';
import Player from './components/player';
import ImageLoader from './components/imageLoader';

const Layout = () => (
   <>
   <Header/>
   <OverlayTrigger/>
   <ImageLoader/>
   <Player/>
   </>
)

export default Layout;