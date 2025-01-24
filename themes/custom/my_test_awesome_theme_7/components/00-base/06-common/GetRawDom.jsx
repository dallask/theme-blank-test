import React from 'react';
import ReactDOMServer from 'react-dom/server';

export const getRawDOM = (
  Component,
  ComponentArgs = Component.args,
  className = 'storybook-item',
) =>
  ReactDOMServer.renderToString(
    <div className={className}>
      <Component {...ComponentArgs} />
    </div>,
  );
