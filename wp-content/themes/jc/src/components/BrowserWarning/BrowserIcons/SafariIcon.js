/*
 * SafariIcon Functional Component
 * This component displays the SVG for the Safari Icon.
 */

import React from 'react';
import styled from 'styled-components';

const StyledSafariIcon = styled.svg`
  max-width: 60px;
  width: 100%;
  max-height: 50px;
  .st0{opacity:.53;filter:url(#filter2248);enable-background:new}
  .st1{fill:url(#path826_1_);stroke:#cdcdcd;stroke-width:9.301235e-02;stroke-linecap:round;stroke-linejoin:round}
  .st2{fill:url(#circle828_1_)}
  .st3{fill:#f4f2f3}
  .st4{opacity:.409;filter:url(#filter2222);enable-background:new}
  .st5{fill:#ff5150}
  .st6{fill:#f1f1f1}
  .st7{opacity:.243;enable-background:new}
`;

const safariIcon = ( props ) => {
  return(
    <StyledSafariIcon viewBox="0 0 187.6 186.5">
      <filter height="1.096" id="filter2248" width="1.096" x="-.048" y="-.048" colorInterpolationFilters="sRGB">
        <feGaussianBlur id="feGaussianBlur2250" stdDeviation="3.564"/>
      </filter>
      <filter height="1.045" id="filter2222" width="1.042" x="-.021" y="-.022" colorInterpolationFilters="sRGB">
        <feGaussianBlur id="feGaussianBlur2224" stdDeviation=".958"/>
      </filter>
      <g id="layer1" transform="translate(-318.886 -180.595)">
        <g id="g2858">
          <ellipse cx="412.7" cy="276.8" rx="85.5" ry="82.4" id="path2226"/>
          <linearGradient id="path826_1_" gradientUnits="userSpaceOnUse" x1="731.878" y1="130.966" x2="731.878" y2="309.182" gradientTransform="matrix(.9965 0 0 -.9965 -316.652 488.854)">
            <stop offset="0" stopColor="#bdbdbd"/>
            <stop offset="1" stopColor="#fff"/>
          </linearGradient>
          <path id="path826" className="st1" d="M501.5 269.6c0 49-39.8 88.8-88.8 88.8s-88.8-39.8-88.8-88.8 39.8-88.8 88.8-88.8 88.8 39.7 88.8 88.8z"/>
          <radialGradient id="circle828_1_" cx="731.571" cy="232.228" r="82.125" gradientTransform="matrix(1.0812 0 0 -1.0812 -377.959 508.71)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#06c2e7"/>
            <stop offset=".25" stopColor="#0db8ec"/>
            <stop offset=".5" stopColor="#12aef1"/>
            <stop offset=".75" stopColor="#1f86f9"/>
            <stop offset="1" stopColor="#107ddd"/>
          </radialGradient>
          <path id="circle828" className="st2" d="M494.5 269.6c0 45.2-36.6 81.8-81.8 81.8-45.2 0-81.8-36.6-81.8-81.8 0-45.2 36.6-81.8 81.8-81.8 45.2-.1 81.8 36.6 81.8 81.8z"/>
          <path id="rect830" className="st3" d="M412.7 192c-.7 0-1.2.5-1.2 1.2V207c0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2v-13.8c0-.7-.6-1.2-1.2-1.2zm-7.8.5h-.2c-.7.1-1.1.7-1.1 1.3l.6 5.8c.1.7.7 1.1 1.3 1.1.7-.1 1.1-.7 1.1-1.3l-.6-5.8c-.1-.6-.6-1.1-1.1-1.1zm15.6 0c-.6.1-1 .5-1.1 1.1l-.6 5.8c-.1.7.4 1.2 1.1 1.3.7.1 1.2-.4 1.3-1.1l.6-5.8c.1-.7-.4-1.2-1.1-1.3h-.2zm-23.7 1.1h-.2c-.6.1-1.1.8-.9 1.4l2.9 13.5c.1.6.8 1.1 1.4.9.6-.1 1.1-.8.9-1.4l-2.9-13.5c-.1-.5-.6-.9-1.2-.9zm31.7 0c-.6 0-1.1.4-1.2.9l-2.9 13.5c-.1.6.3 1.3.9 1.4.6.1 1.3-.3 1.4-.9l2.9-13.5c.1-.6-.3-1.3-.9-1.4 0 .1-.1 0-.2 0zm-39.3 2.2c-.2 0-.3 0-.5.1-.6.2-1 .9-.8 1.5l1.8 5.5c.2.6.9 1 1.5.8.6-.2 1-.9.8-1.5l-1.8-5.5c-.1-.6-.5-.9-1-.9zm47 0c-.5 0-.9.3-1 .8l-1.8 5.5c-.2.6.1 1.3.8 1.5.6.2 1.3-.1 1.5-.8l1.8-5.5c.2-.6-.1-1.3-.8-1.5h-.5zm-54.6 2.8c-.2 0-.3 0-.5.1-.6.3-.9 1-.6 1.6l5.6 12.6c.3.6 1 .9 1.6.6.6-.3.9-1 .6-1.6l-5.6-12.6c-.2-.5-.6-.7-1.1-.7zm62.2 0c-.5 0-.9.3-1.1.7l-5.6 12.6c-.3.6 0 1.3.6 1.6.6.3 1.3 0 1.6-.6l5.6-12.6c.3-.6 0-1.3-.6-1.6-.2-.1-.3-.1-.5-.1zm-69.2 3.7c-.2 0-.5 0-.7.2-.6.3-.8 1.1-.4 1.6l2.9 5c.3.6 1.1.8 1.6.4.6-.3.8-1.1.4-1.6l-2.9-5c-.2-.4-.5-.6-.9-.6zm76.1 0c-.4 0-.7.2-.9.6l-2.9 5c-.3.6-.1 1.3.4 1.6.6.3 1.3.1 1.6-.4l2.9-5c.3-.6.1-1.3-.4-1.6-.2-.2-.4-.2-.7-.2zm-82.9 4.2c-.2 0-.5.1-.7.2-.5.4-.7 1.1-.3 1.7l8.1 11.1c.4.5 1.1.7 1.7.3.5-.4.7-1.1.3-1.7l-8.1-11.1c-.3-.3-.6-.5-1-.5zm89.8.1c-.4 0-.8.2-1 .5l-8.1 11.1c-.4.5-.3 1.3.3 1.7.5.4 1.3.3 1.7-.3l8.1-11.1c.4-.5.3-1.3-.3-1.7-.2-.1-.4-.2-.7-.2zm-95.9 5c-.3 0-.6.1-.9.3-.5.4-.5 1.2-.1 1.7l3.9 4.3c.4.5 1.2.5 1.7.1s.5-1.2.1-1.7l-3.9-4.3c-.2-.2-.5-.3-.8-.4zm102 .1c-.3 0-.6.1-.8.4l-3.9 4.3c-.4.5-.4 1.2.1 1.7.5.4 1.2.4 1.7-.1l3.9-4.3c.4-.5.4-1.2-.1-1.7-.3-.3-.6-.4-.9-.3zm-107.9 5.6c-.3 0-.6.1-.8.4-.4.5-.4 1.2.1 1.7l10.2 9.2c.5.4 1.2.4 1.7-.1.4-.5.4-1.2-.1-1.7l-10.2-9.2c-.2-.3-.6-.4-.9-.3zm113.7 0c-.3 0-.6.1-.9.3l-10.2 9.2c-.5.4-.5 1.2-.1 1.7s1.2.5 1.7.1l10.2-9.2c.5-.4.5-1.2.1-1.7-.2-.3-.5-.4-.8-.4zM351 223.5c-.4 0-.8.2-1 .5-.4.5-.3 1.3.3 1.7l4.7 3.4c.5.4 1.3.3 1.7-.3.4-.5.3-1.3-.3-1.7l-4.7-3.4c-.3-.1-.5-.2-.7-.2zm123.4.1c-.2 0-.5.1-.7.2l-4.7 3.4c-.5.4-.7 1.1-.3 1.7.4.5 1.1.7 1.7.3l4.7-3.4c.5-.4.7-1.1.3-1.7-.3-.4-.6-.6-1-.5zm-128 6.6c-.4 0-.7.2-.9.6-.3.6-.1 1.3.4 1.6l11.9 6.9c.6.3 1.3.1 1.6-.4.3-.6.1-1.3-.4-1.6l-11.9-6.9c-.2-.2-.4-.2-.7-.2zm132.5 0c-.2 0-.5 0-.7.2l-11.9 6.9c-.6.3-.8 1.1-.4 1.6.3.6 1.1.8 1.6.4l11.9-6.9c.6-.3.8-1.1.4-1.6-.2-.4-.5-.6-.9-.6zM343 237.3c-.5 0-.9.3-1.1.7-.3.6 0 1.3.6 1.6l5.3 2.4c.6.3 1.3 0 1.6-.6.3-.6 0-1.3-.6-1.6l-5.3-2.4c-.2-.1-.3-.1-.5-.1zm139.3 0c-.2 0-.3 0-.5.1l-5.3 2.4c-.6.3-.9 1-.6 1.6.3.6 1 .9 1.6.6l5.3-2.4c.6-.3.9-1 .6-1.6-.1-.4-.6-.7-1.1-.7zm-142.4 7.4c-.5 0-.9.3-1 .8-.2.6.1 1.3.8 1.5l13.1 4.3c.6.2 1.3-.1 1.5-.8.2-.6-.1-1.3-.8-1.5l-13.1-4.3h-.5zm145.5.1c-.2 0-.3 0-.5.1l-13.1 4.3c-.6.2-1 .9-.8 1.5.2.6.9 1 1.5.8l13.1-4.3c.6-.2 1-.9.8-1.5-.1-.6-.5-.9-1-.9zM338 252.5c-.6 0-1.1.4-1.2.9-.1.6.3 1.3.9 1.4l5.7 1.2c.6.1 1.3-.3 1.4-.9.1-.6-.3-1.3-.9-1.4l-5.7-1.2h-.2zm149.3 0h-.2l-5.7 1.2c-.6.1-1.1.8-.9 1.4.1.6.8 1.1 1.4.9l5.7-1.2c.6-.1 1.1-.8.9-1.4-.2-.5-.7-.9-1.2-.9zm-150.7 7.8c-.6.1-1 .5-1.1 1.1-.1.7.4 1.2 1.1 1.3l13.7 1.4c.7.1 1.2-.4 1.3-1.1.1-.7-.4-1.2-1.1-1.3l-13.7-1.4h-.2zm152.1.1h-.2l-13.7 1.4c-.7.1-1.1.7-1.1 1.3.1.7.7 1.1 1.3 1.1l13.7-1.4c.7-.1 1.1-.7 1.1-1.3 0-.6-.5-1-1.1-1.1zm-152.3 8c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2h5.8c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2h-5.8zm146.8 0c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2h5.8c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2h-5.8zm-132.7 6.5h-.2l-13.7 1.4c-.7.1-1.1.7-1.1 1.3.1.7.7 1.1 1.3 1.1l13.7-1.4c.7-.1 1.1-.7 1.1-1.3-.1-.6-.5-1.1-1.1-1.1zm124.3 0c-.6.1-1 .5-1.1 1.1-.1.7.4 1.2 1.1 1.3l13.7 1.4c.7.1 1.2-.4 1.3-1.1.1-.7-.4-1.2-1.1-1.3l-13.7-1.4h-.2zM343.7 283h-.2l-5.7 1.2c-.6.1-1.1.8-.9 1.4.1.6.8 1.1 1.4.9l5.7-1.2c.6-.1 1.1-.8.9-1.4-.2-.5-.7-.9-1.2-.9zm137.9 0c-.6 0-1.1.4-1.2.9-.1.6.3 1.3.9 1.4l5.7 1.2c.6.1 1.3-.3 1.4-.9.1-.6-.3-1.3-.9-1.4l-5.7-1.2h-.2zm-128.4 4.7c-.2 0-.3 0-.5.1l-13.1 4.3c-.6.2-1 .9-.8 1.5.2.6.9 1 1.5.8l13.1-4.3c.6-.2 1-.9.8-1.5-.1-.5-.5-.8-1-.9zm118.9.1c-.5 0-.9.3-1 .8-.2.6.1 1.3.8 1.5l13.1 4.3c.6.2 1.3-.1 1.5-.8.2-.6-.1-1.3-.8-1.5l-13.1-4.3c-.2 0-.3-.1-.5 0zM348.2 297c-.2 0-.3 0-.5.1l-5.3 2.4c-.6.3-.9 1-.6 1.6.3.6 1 .9 1.6.6l5.3-2.4c.6-.3.9-1 .6-1.6-.2-.4-.6-.7-1.1-.7zm128.9.1c-.5 0-.9.3-1.1.7-.3.6 0 1.3.6 1.6l5.3 2.4c.6.3 1.3 0 1.6-.6.3-.6 0-1.3-.6-1.6l-5.3-2.4c-.2-.1-.4-.1-.5-.1zm-118.6 2.6c-.2 0-.5 0-.7.2l-11.9 6.9c-.6.3-.8 1.1-.4 1.6s1.1.8 1.6.4l11.9-6.9c.6-.3.8-1.1.4-1.6-.1-.4-.5-.6-.9-.6zm108.3 0c-.4 0-.7.2-1 .6-.3.6-.1 1.3.4 1.6l11.9 6.9c.6.3 1.3.1 1.6-.4s.1-1.3-.4-1.6l-11.9-6.9c-.1-.2-.4-.2-.6-.2zm-111.3 10.1c-.2 0-.5.1-.7.2l-4.7 3.4c-.5.4-.7 1.1-.3 1.7.4.5 1.1.7 1.7.3l4.7-3.4c.5-.4.7-1.1.3-1.7-.2-.4-.6-.5-1-.5zm114.3 0c-.4 0-.8.2-1 .5-.4.5-.3 1.3.3 1.7l4.7 3.4c.5.4 1.3.3 1.7-.3.4-.5.3-1.3-.3-1.7l-4.7-3.4c-.3-.1-.5-.2-.7-.2zm-103.6.4c-.3 0-.6.1-.9.3l-10.2 9.2c-.5.4-.5 1.2-.1 1.7s1.2.5 1.7.1l10.2-9.2c.5-.4.5-1.2.1-1.7-.2-.2-.5-.4-.8-.4zm92.9.1c-.3 0-.6.1-.8.4-.4.5-.4 1.2.1 1.7l10.2 9.2c.5.4 1.2.4 1.7-.1.4-.5.4-1.2-.1-1.7l-10.2-9.2c-.2-.3-.6-.4-.9-.3zm-83.2 8.7c-.4 0-.8.2-1 .5l-8.1 11.1c-.4.5-.3 1.3.3 1.7.5.4 1.3.3 1.7-.3l8.1-11.1c.4-.5.3-1.3-.3-1.7-.3-.1-.5-.2-.7-.2zm73.5 0c-.2 0-.5.1-.7.2-.5.4-.7 1.1-.3 1.7l8.1 11.1c.4.5 1.1.7 1.7.3.5-.4.7-1.1.3-1.7l-8.1-11.1c-.2-.3-.6-.5-1-.5zm-84 1.8c-.3 0-.6.1-.8.4l-3.9 4.3c-.4.5-.4 1.2.1 1.7.5.4 1.2.4 1.7-.1l3.9-4.3c.4-.5.4-1.2-.1-1.7-.3-.3-.6-.4-.9-.3zm94.5 0c-.3 0-.6.1-.9.3-.5.4-.5 1.2-.1 1.7l3.9 4.3c.4.5 1.2.5 1.7.1s.5-1.2.1-1.7l-3.9-4.3c-.2-.3-.5-.4-.8-.4zm-72.7 4.7c-.5 0-.9.3-1.1.7l-5.6 12.6c-.3.6 0 1.3.6 1.6.6.3 1.3 0 1.6-.6l5.6-12.6c.3-.6 0-1.3-.6-1.6-.2 0-.4-.1-.5-.1zm50.9.1c-.2 0-.3 0-.5.1-.6.3-.9 1-.6 1.6l5.6 12.6c.3.6 1 .9 1.6.6.6-.3.9-1 .6-1.6l-5.6-12.6c-.2-.5-.7-.7-1.1-.7zm-60.8 3.8c-.4 0-.7.2-.9.6l-2.9 5c-.3.6-.1 1.3.4 1.6.6.3 1.3.1 1.6-.4l2.9-5c.3-.6.1-1.3-.4-1.6-.2-.1-.4-.2-.7-.2zm70.7 0c-.2 0-.5 0-.7.2-.6.3-.8 1.1-.4 1.6l2.9 5c.3.6 1.1.8 1.6.4.6-.3.8-1.1.4-1.6l-2.9-5c-.2-.3-.5-.5-.9-.6zm-48.3.2c-.6 0-1.1.4-1.2.9l-2.9 13.5c-.1.6.3 1.3.9 1.4.6.1 1.3-.3 1.4-.9l2.9-13.5c.1-.6-.3-1.3-.9-1.4h-.2zm25.9 0h-.2c-.6.1-1.1.8-.9 1.4l2.9 13.5c.1.6.8 1.1 1.4.9.6-.1 1.1-.8.9-1.4l-2.9-13.5c-.1-.5-.6-.9-1.2-.9zm-12.9 1.4c-.7 0-1.2.5-1.2 1.2V346c0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2v-13.8c0-.7-.6-1.2-1.2-1.2zm-21.9 4.4c-.5 0-.9.3-1 .8l-1.8 5.5c-.2.6.1 1.3.8 1.5.6.2 1.3-.1 1.5-.8l1.8-5.5c.2-.6-.1-1.3-.8-1.5h-.5zm43.8 0c-.2 0-.3 0-.5.1-.6.2-1 .9-.8 1.5l1.8 5.5c.2.6.9 1 1.5.8.6-.2 1-.9.8-1.5l-1.8-5.5c-.2-.5-.6-.8-1-.9zm-29.4 3.1c-.6.1-1 .5-1.1 1.1l-.6 5.8c-.1.7.4 1.2 1.1 1.3.7.1 1.2-.4 1.3-1.1l.6-5.8c.1-.7-.4-1.2-1.1-1.3h-.2zm14.9 0h-.2c-.7.1-1.1.7-1.1 1.3l.6 5.8c.1.7.7 1.1 1.3 1.1.7-.1 1.1-.7 1.1-1.3l-.6-5.8c-.1-.6-.5-1.1-1.1-1.1z"/>
          <path d="M468.6 221.8l-65.3 38-41.3 64.9 60.4-44.7z" id="path2150"/>
          <g id="g2847">
            <path id="path2096" className="st5" d="M422 279.3l-18.7-19.6 66.4-44.7-47.7 64.3z"/>
            <path id="path2099" className="st6" d="M422 279.3l-18.7-19.6-47.7 64.3 66.4-44.7z"/>
            <path id="path2112" className="st7" d="M355.6 324l66.4-44.7 47.7-64.2L355.6 324z"/>
          </g>
        </g>
      </g>
    </StyledSafariIcon>
  );
}

export default safariIcon;
