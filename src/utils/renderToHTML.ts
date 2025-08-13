import React from 'react';
import ReactDOMServer from 'react-dom/server';

export function renderToHTML(component: React.ReactElement): string {
  return ReactDOMServer.renderToString(component);
}
