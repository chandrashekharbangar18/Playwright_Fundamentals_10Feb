# Playwright Fundamentals

This repository contains Playwright learning exercises and end-to-end examples covering test annotations, browser contexts, selectors, browser automation, session storage, and test reporting.

## Project Overview

The project uses:

- Node.js and TypeScript
- Playwright Test
- Allure Playwright for test results

Tests are organized by topic under the `tests` directory. The configured Playwright project runs against installed Google Chrome.

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

The workflow is:

1. Navigate to the CURA demo application.
2. Verify the title is `CURA Healthcare Service`.
3. Select **Make Appointment**.
4. Sign in with the demo credentials `John Doe` and `ThisIsNotAPassword`.
5. Verify that the **Make Appointment** section is visible.

Run the CURA exercise directly with:

```bash
npx playwright test tests/03_Locators_Commands/217_Automate_CURA_Project.spec.ts
```

`219_GetByRole_1.spec.ts` and `220_GetByRole_2.spec.ts` focus on Playwright's
`getByRole()` locator strategy. These tests target login forms by accessible role
and name, and use `exact: true` to avoid ambiguous matches when multiple buttons
share similar names.

`220_GetByRole_2.spec.ts` automates the App.vwo login page by entering invalid
credentials, clicking **Sign in**, and asserting the error notification message is
shown.

Run the App.vwo getByRole exercise directly with:

```bash
npx playwright test tests/03_Locators_Commands/220_GetByRole_2.spec.ts
```

## Web Table Exercises

The `tests/06_WebTables` examples practice locating table rows and cells with
XPath and Playwright locators, and extracting row data from a web table with a
dynamic row count. `232_Webtable_Dynamic.spec.ts` reads the table rows from
AwesomeQA and logs each data row as an array of cell values.

Run the dynamic web-table exercise with:

```bash
npx playwright test tests/06_WebTables/232_Webtable_Dynamic.spec.ts
```

`233_WebTable_Emp_Mgmt.spec.ts` locates the employee table and selects the
checkbox for the `Rohan.Mehta` row using a row-scoped locator.

Run the employee-management exercise with:

```bash
npx playwright test tests/06_WebTables/233_WebTable_Emp_Mgmt.spec.ts
```

`234_WebTable_Emp_Search.spec.ts` searches the employee table for `Kabir`,
selects the `Kabir.Khan` checkbox, and verifies that the selected employee is
shown in the output.

Run the employee-search exercise with:

```bash
npx playwright test tests/Project_Practice/234_WebTable_Emp_Search.spec.ts
```

## Select and Frame Exercises

The `tests/07_Select_Frames_Iframe` examples practice interacting with native
and custom dropdowns. `234_Select_Frames.spec.ts` selects an option from a
native dropdown, while `235_Advance_Select_1.spec.ts` selects values from
custom language, framework, and experience dropdowns.

`236_Advance_Select_2.spec.ts` exercises single-select, multi-select, and
creatable custom dropdowns.

Run the advanced dropdown exercises with:

```bash
npx playwright test tests/07_Select_Frames_Iframe/235_Advance_Select_1.spec.ts
npx playwright test tests/07_Select_Frames_Iframe/236_Advance_Select_2.spec.ts
```

## Frames and Iframes

The `tests/08_Frames_IFrames` examples practice interacting with frames and
iframes. `239_Iframe_Within_Iframe.spec.ts` traverses three nested iframes,
fills a field at each level, and verifies text in the outer page.

Run the nested-iframe exercise with:

```bash
npx playwright test tests/08_Frames_IFrames/239_Iframe_Within_Iframe.spec.ts
```

## Prerequisites

Before running the tests, make sure you have the following installed:

- Node.js (LTS recommended)
- npm

## Setup

Install dependencies and the Playwright browser binaries:

```bash
npm install
npm run install:browsers
```

The configured project uses the installed Google Chrome channel. Install Google
Chrome if it is not already available on your machine.

## Run Tests

Run the full test suite:

```bash
npm test
```

Run tests in UI mode:

```bash
npm run test:ui
```

The configuration writes Playwright HTML output and Allure result files. After
a test run, open the Playwright report with:

```bash
npx playwright show-report
```

Generate and open an Allure report from the collected results:

```bash
npx allure generate allure-results --clean
npx allure open allure-report
```

The Allure command line requires Java. Test runs create `allure-results/`;
generated reports are local artifacts and should not be committed.

## Session Storage Examples

`224_Session_Storage.spec.ts` signs in to the VWO application and saves the
authenticated browser state to `user-session.json`. Provide credentials through
environment variables rather than hard-coding them:

PowerShell:

```powershell
$env:VWO_USERNAME = "your-vwo-username"
$env:VWO_PASSWORD = "your-vwo-password"
npx playwright test tests/03_Locators_Commands/224_Session_Storage.spec.ts
```

Bash:

```bash
VWO_USERNAME="your-vwo-username" VWO_PASSWORD="your-vwo-password" \
  npx playwright test tests/03_Locators_Commands/224_Session_Storage.spec.ts
```

The generated session file is ignored by Git. `226_Test_VWO.spec.ts` demonstrates
using that saved state to open authenticated VWO pages; run the session-storage
test first to create the file.

## Project Practice

`tests/Project_Practice/228_Practice_Bank_App.spec.ts` exercises a ParaBank
workflow including registration, transferring funds, and viewing account
details. `230_QA_Profile_Test.spec.ts` fills and submits the QA profile form,
including its personal details and selection fields.

Run the QA profile exercise with:

```bash
npx playwright test tests/Project_Practice/230_QA_Profile_Test.spec.ts
```

## Project Structure

```text
.
├── tests/
│   ├── 01_Basics/
│   │   └── Lab_202_Test_Annotations.spec.ts
│   ├── 02_First_Test/
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
│   ├── 03_Locators_Commands/
│   │   ├── 213_Commands.spec.ts
│   │   ├── 214_Goto_Commands.spec.ts
│   │   ├── 215_Referer_Commands.spec.ts
│   │   ├── 216_Automate_VWO_Project.spec.ts
│   │   ├── 217_Automate_CURA_Project.spec.ts
│   │   ├── 218_Xpath.spec.ts
│   │   ├── 219_GetByRole_1.spec.ts
│   │   ├── 220_GetByRole_2.spec.ts
│   │   ├── 224_Session_Storage.spec.ts
│   │   └── 226_Test_VWO.spec.ts
│   ├── 04_Allure_Reporting/
│   │   └── 227_LoginTest.spec.ts
│   ├── 06_WebTables/
│   │   ├── 231_Webtable_Basic.spec.ts
│   │   ├── 232_Webtable_Dynamic.spec.ts
│   │   └── 233_WebTable_Emp_Mgmt.spec.ts
│   ├── 07_Select_Frames_Iframe/
│   │   ├── 234_Select_Frames.spec.ts
│   │   ├── 235_Advance_Select_1.spec.ts
│   │   └── 236_Advance_Select_2.spec.ts
│   ├── 08_Frames_IFrames/
│   │   └── 239_Iframe_Within_Iframe.spec.ts
│   └── Project_Practice/
│       ├── 228_Practice_Bank_App.spec.ts
│       ├── 230_QA_Profile_Test.spec.ts
│       └── 234_WebTable_Emp_Search.spec.ts
├── CustomTTAReporter.ts
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── README.md
└── allure-results/ (generated)
```

## Notes

- `test.skip()` skips a test.
- `test.only()` runs only the selected test.
- `test.fail()` marks a test as expected to fail.
- `test.slow()` increases the timeout for a slow test.
- Browser-aware conditions can be used with `test.skip(browserName === 'firefox', ...)`.

## License

This project is distributed under the ISC license.
