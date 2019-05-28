import * as React from 'preact';

import Page from './views/Page';
import { newApp } from './app';

async function main() {
  const app = await newApp();

  const Blockly = (self as any).Blockly;
  const pageDiv = getElementByIdSafe('page');
  Blockly.HSV_VALUE = 0.9;
  if (!pageDiv.parentElement) { return; }

  React.render(<Page app={app} ref={rendered} />, pageDiv.parentElement, pageDiv);

  function rendered(page: Page) {
    app.assignTerminal(page.terminalView);
  }

  function getElementByIdSafe(id: string): HTMLElement {
    const element = document.getElementById(id);

    if (!element) { throw new Error(`Could not find element with "${id}"`); }

    return element;
  }
}

window.addEventListener('load', main);
