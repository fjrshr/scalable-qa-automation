# Web Playwright Demo

A minimal, runnable Playwright suite against the public [SauceDemo](https://www.saucedemo.com) automation practice site.

## Purpose

This demo shows how a Spoke repository can consume shared conventions from the Hub while automating a real (public) web application. It is intentionally small so the structure stays readable.

## Run locally

```bash
cd demos/web-playwright
npm install
npx playwright install chromium
npm test
```

## What it covers

- Page-object-free selectors via `data-testid` and `data-test` attributes
- Positive path: valid login → inventory page
- Negative path: locked-out user → error message
- Screenshot/video capture on failure

## CI

See `.github/workflows/sample-ci-cd.yml` in the repo root for a starting template.
