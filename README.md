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

## Select Exercises

The `tests/07_Select` examples practice interacting with native and custom
dropdowns. `234_Select_Frames.spec.ts` selects values from custom language,
framework, and experience dropdowns. `235_Advance_Select_1.spec.ts` selects an
option from a native dropdown. `236_Advance_Select_2.spec.ts` exercises
single-select, multi-select, and creatable custom dropdowns.

Run the select exercises with:

```bash
npx playwright test tests/07_Select/234_Select_Frames.spec.ts
npx playwright test tests/07_Select/235_Advance_Select_1.spec.ts
npx playwright test tests/07_Select/236_Advance_Select_2.spec.ts
```

## Frames and Iframes

The `tests/08_Frames_IFrames` examples practice interacting with frames and
iframes. `239_Iframe_Within_Iframe.spec.ts` traverses three nested iframes,
fills a field at each level, and verifies text in the outer page.
`240_Nested_Frames_Ex.spec.ts` also traverses three nested frames and fills a
different field at each level.

Run the nested-frame exercises with:

```bash
npx playwright test tests/08_Frames_IFrames/239_Iframe_Within_Iframe.spec.ts
npx playwright test tests/08_Frames_IFrames/240_Nested_Frames_Ex.spec.ts
```

## Keyboard Actions

`tests/09_Keyboard_Actions/241_Keyboard.spec.ts` practices sending keyboard
input with `page.keyboard.press()` on keycode.info. It presses `A`, `ArrowLeft`,
and `Shift+0`, taking a screenshot after each key action.

Run the keyboard exercise with:

```bash
npx playwright test tests/09_Keyboard_Actions/241_Keyboard.spec.ts
```

## JavaScript Dialogs

`tests/10_JS_Alerts/242_Alerts.spec.ts` handles JavaScript alert, confirm, and
prompt dialogs on the browser's JavaScript alerts demo page. It verifies dialog
types and messages, accepts the dialogs, and checks the resulting page text.

Run the dialog exercises with:

```bash
npx playwright test tests/10_JS_Alerts/242_Alerts.spec.ts
```

## Hover, Drag-and-Drop, and Right-Click Exercises

The `tests/11_Hover_DragAndDrop` examples practice hover menus, drag-and-drop interactions, and context-menu/right-click behavior.

`243_Spicejet_Hover_1.spec.ts` opens the SpiceJet website, hovers over **Add-ons**, clicks **FlyEarly**, and demonstrates a hover-driven navigation flow.

`244_Hover_Practice_2.spec.ts` opens the custom hover-menu widget, triggers the menu, reads all submenu items, clicks one of the options, and verifies the hover output text contains the clicked state.

`245_Drag_Drop_1.spec.ts` and `246_Drag_Drop_2.spec.ts` demonstrate drag-and-drop interactions using both the Heroku drag-and-drop page and a custom widget. The latter drags a card into the **In Progress** column and asserts the UI updates as expected.

`247_RightClick.spec.ts` opens the context-menu widget, performs a right-click on the target area, and retrieves the menu option text values from the context menu.

Run the hover, drag-and-drop, and right-click exercises directly with:

```bash
npx playwright test tests/11_Hover_DragAndDrop/243_Spicejet_Hover_1.spec.ts
npx playwright test tests/11_Hover_DragAndDrop/244_Hover_Practice_2.spec.ts
npx playwright test tests/11_Hover_DragAndDrop/245_Drag_Drop_1.spec.ts
npx playwright test tests/11_Hover_DragAndDrop/246_Drag_Drop_2.spec.ts
npx playwright test tests/11_Hover_DragAndDrop/247_RightClick.spec.ts
```

## SVG Exercises

`tests/12_Handle_SVG/251_Advance_SVG.spec.ts` opens the India map, enumerates
the SVG state paths, clicks Maharashtra, and saves a full-page screenshot as
`MH_State.png` in the project root.

Run the advanced SVG exercise with:

```bash
npx playwright test tests/12_Handle_SVG/251_Advance_SVG.spec.ts
```

## Shadow DOM

`tests/13_Shadow_DOM/252_Shadow_Dom_Ex1.spec.ts` practices interacting with
shadow-root content on the Testing Academy widget page. It fills and submits an
account card, checks the status contains the submitted email, increments a
nested counter twice and verifies its value, then fills and submits a card
inside a nested shadow host.

`tests/13_Shadow_DOM/253_Shadow_Dom_Ex2.spec.ts` practices locating and filling
fields inside a Shadow DOM card on the SelectorsHub XPath practice page. It
fills the email field with `test@abc` and the pizza field with `Paneer Pizza`
through a card-scoped locator, then uses Tab navigation to enter `Playwright`
and `Password123` in the remaining fields.

Run the Shadow DOM exercises with:

```bash
npx playwright test tests/13_Shadow_DOM/252_Shadow_Dom_Ex1.spec.ts
npx playwright test tests/13_Shadow_DOM/253_Shadow_Dom_Ex2.spec.ts
```

## File Upload

`tests/14_File_Upload/254_FIleUpload_1.spec.ts` and
`tests/14_File_Upload/255_FIleUpload_2.spec.ts` demonstrate uploading a single
file on The Internet upload page, the Testing Academy upload widget, and the
AwesomeQA practice form.

`tests/14_File_Upload/256_Multiple_FileUpload_1.spec.ts` practices selecting
multiple files for upload using the PatternFly multiple-file upload widget. The
test expects `0.png` and `A.png` to be available in the project root. The
single-file upload examples use `tests/14_File_Upload/testData.txt`.

Run the file-upload exercises with:

```bash
npx playwright test tests/14_File_Upload/254_FIleUpload_1.spec.ts
npx playwright test tests/14_File_Upload/255_FIleUpload_2.spec.ts
npx playwright test tests/14_File_Upload/256_Multiple_FileUpload_1.spec.ts
```

## File Download

`tests/15_File_Download/257_FIleDownload_1.spec.ts` captures a static file
download from the Testing Academy upload/download widget and saves it under
`out/` using the suggested filename.

Run the file-download exercise with:

```bash
npx playwright test tests/15_File_Download/257_FIleDownload_1.spec.ts
```

## Scrolling to Elements

`tests/16_Scroll_To_Elements/258_Scroll_To_Elements.spec.ts` scrolls to and
clicks a deep-page anchor, then scrolls the lazy-loaded list and verifies that
additional items are appended.

Run the scroll exercise with:

```bash
npx playwright test tests/16_Scroll_To_Elements/258_Scroll_To_Elements.spec.ts
```

## Assertions

The `tests/17_Assertions` examples cover value and locator assertions,
soft assertions, negation, and URL/title/state checks. `259_Expect.spec.ts`
demonstrates these assertion styles, while `260_URL_Assertions.spec.ts` covers
page URL/title and element state assertions. The folder also contains an
`expect` assertion cheatsheet and additional examples.

Run the assertion exercises with:

```bash
npx playwright test tests/17_Assertions/259_Expect.spec.ts
npx playwright test tests/17_Assertions/260_URL_Assertions.spec.ts
```

## Test Hooks and Grouping

The `tests/18_Test_Hooks` examples cover `test.step()`, test modifiers such as
`skip`, `slow`, `fixme`, and `fail`, `beforeAll`/`beforeEach`/
`afterEach`/`afterAll` hooks, and test grouping. `264_Group_Describe.spec.ts`
demonstrates a serial group that runs in order alongside independent tests.

Run the test-hook exercises with:

```bash
npx playwright test tests/18_Test_Hooks/261_Test_Hooks.spec.ts
npx playwright test tests/18_Test_Hooks/262_Grouped_Test.spec.ts
npx playwright test tests/18_Test_Hooks/263_Test_Before_After.spec.ts
npx playwright test tests/18_Test_Hooks/264_Group_Describe.spec.ts
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
│   ├── 07_Select/
│   │   ├── 234_Select_Frames.spec.ts
│   │   ├── 235_Advance_Select_1.spec.ts
│   │   └── 236_Advance_Select_2.spec.ts
│   ├── 08_Frames_IFrames/
│   │   ├── 239_Iframe_Within_Iframe.spec.ts
│   │   └── 240_Nested_Frames_Ex.spec.ts
│   ├── 09_Keyboard_Actions/
│   │   └── 241_Keyboard.spec.ts
│   ├── 10_JS_Alerts/
│   │   └── 242_Alerts.spec.ts
│   ├── 11_Hover_DragAndDrop/
│   │   ├── 243_Spicejet_Hover_1.spec.ts
│   │   ├── 244_Hover_Practice_2.spec.ts
│   │   ├── 245_Drag_Drop_1.spec.ts
│   │   ├── 246_Drag_Drop_2.spec.ts
│   │   └── 247_RightClick.spec.ts
│   ├── 12_Handle_SVG/
│   │   └── 251_Advance_SVG.spec.ts
│   ├── 13_Shadow_DOM/
│   │   ├── 252_Shadow_Dom_Ex1.spec.ts
│   │   └── 253_Shadow_Dom_Ex2.spec.ts
│   ├── 14_File_Upload/
│   │   ├── 254_FIleUpload_1.spec.ts
│   │   ├── 255_FIleUpload_2.spec.ts
│   │   ├── 256_Multiple_FileUpload_1.spec.ts
│   │   └── testData.txt
│   ├── 15_File_Download/
│   │   └── 257_FIleDownload_1.spec.ts
│   ├── 16_Scroll_To_Elements/
│   │   └── 258_Scroll_To_Elements.spec.ts
│   ├── 17_Assertions/
│   │   ├── 259_Expect.spec.ts
│   │   ├── 260_URL_Assertions.spec.ts
│   │   ├── Expect_Assertions_Cheatsheet.md
│   │   └── More_Expect_Examples.md
│   ├── 18_Test_Hooks/
│   │   ├── 261_Test_Hooks.spec.ts
│   │   ├── 262_Grouped_Test.spec.ts
│   │   ├── 263_Test_Before_After.spec.ts
│   │   └── 264_Group_Describe.spec.ts
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
