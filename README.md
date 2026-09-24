# Playwright Fundamentals

This repository contains a set of Playwright learning exercises and small test examples covering core concepts such as test annotations, selectors, browser automation, and test execution patterns.

## Project Overview

The project is built with:

- Playwright
- TypeScript
- Node.js

The test files are organized under the `tests` directory, with examples grouped by topic.

## Browser Context and Page Exercises

The `tests/02_First_Test` examples cover browser lifecycle concepts:

- Creating and closing browser contexts.
- Opening multiple pages (tabs) in the same context.
- Sharing session state between pages in one context.
- Configuring and reusing browser contexts.

`212_Practice_Que_2.spec.ts` demonstrates creating one context, opening two
pages in that context, and navigating both pages to Playwright's website. Pages
created from the same context share the context's cookies and storage state.

Run this exercise directly with:

```bash
npx playwright test tests/02_First_Test/212_Practice_Que_2.spec.ts
```

## Prerequisites

Before running the tests, make sure you have the following installed:

- Node.js (LTS recommended)
- npm

## Setup

Install dependencies:

```bash
npm install
```

Install the Chromium browser used by Playwright:

```bash
npx playwright install chromium
```

## Run Tests

Run the full test suite:

```bash
npm test
```

Run tests in UI mode:

```bash
npm run test:ui
```

## Project Structure

```text
.
├── tests/
│   └── 01_Basics/
│       └── Lab_202_Test_Annotations.spec.ts
│   └── 02_First_Test/
│       └── 212_Practice_Que_2.spec.ts
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── README.md
└── node_modules/
```

## Notes

- `test.skip()` skips a test.
- `test.only()` runs only the selected test.
- `test.fail()` marks a test as expected to fail.
- `test.slow()` increases the timeout for a slow test.
- Browser-aware conditions can be used with `test.skip(browserName === 'firefox', ...)`.

## License

This project is distributed under the ISC license.
