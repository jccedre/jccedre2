/*
 * App Breakpoints
 */
import { css } from 'styled-components';

 const breakpoints = {
   small: 0,
   largeSmall: 500,
   medium: 768,
   large: 1024,
   xlarge: 1200,
   xxlarge: 1440,
 };

 const orientations = {
   landscape: 'landscape',
   portrait: 'portrait',
 };

 export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
   accumulator[label] = (...args) => css`
     @media (min-width: ${breakpoints[label] / 16}em) {
       ${css(...args)}
     }
   `
   return accumulator
 }, {});

 export const height = Object.keys(breakpoints).reduce((accumulator, label) => {
   accumulator[label] = (...args) => css`
     @media (max-height: ${breakpoints[label] / 16}em) and (min-width: ${breakpoints[label] / 16}em) {
       ${css(...args)}
     }
   `
   return accumulator
 }, {});

 export const orientation = Object.keys(orientations).reduce((accumulator, label) => {
   accumulator[label] = (...args) => css`
     @media (orientation: ${orientations[label]}) {
       ${css(...args)}
     }
   `
   return accumulator;
 }, {});
