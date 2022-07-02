/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
import WrapRootProvider from './src/WrapRootProvider';

export const wrapRootElement = ({ element, props }) => {
  return(
    <WrapRootProvider {...props}>
      {element}
    </WrapRootProvider>
  )
}