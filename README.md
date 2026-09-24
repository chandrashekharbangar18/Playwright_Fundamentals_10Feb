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

## Locators and Navigation Commands

The `tests/03_Locators_Commands` examples demonstrate:

- Using `page.goto()` with different `waitUntil` options.
- Navigating with a custom HTTP referer.
- Configuring referer headers for an entire browser context.
- Locating elements with CSS selectors.
- Automating login and appointment flows in the VWO and CURA demo applications.

`217_Automate_CURA_Project.spec.ts` opens the CURA Healthcare Service demo,
verifies the page title, clicks **Make Appointment**, fills the login form, and
asserts that the appointment page is displayed.

Run the CURA exercise directly with:

```bash
npx playwright test tests/03_Locators_Commands/217_Automate_CURA_Project.spec.ts
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
│   ├── 01_Basics/
│   │   └── Lab_202_Test_Annotations.spec.ts
│   └── 02_First_Test/
│       ├── 203_First_Running_Test.spec.ts
│       ├── 204_Browser_Context_Pages.spec.ts
│       ├── 205_Multiple_Context.spec.ts
│       ├── 206_Multiple_Pages.spec.ts
│       ├── 207_Test_PW.spec.ts
│       ├── 208_Manual_Context.spec.ts
│       ├── 209_Manual_Context_Options.spec.ts
│       ├── 210_Context_Reuse.spec.ts
│       ├── 211_Practice_Que_1.spec.ts
│       └── 212_Practice_Que_2.spec.ts
│   └── 03_Locators_Commands/
│       ├── 213_Commands.spec.ts
│       ├── 214_Goto_Commands.spec.ts
│       ├── 215_Referer_Commands.spec.ts
│       ├── 216_Automate_VWO_Project.spec.ts
│       └── 217_Automate_CURA_Project.spec.ts
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
