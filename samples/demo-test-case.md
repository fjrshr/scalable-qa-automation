# Demo Test Case — Login Flow

This is a generic example of an automated test case structure. It uses a fictional demo application.

## Test objective

Verify that a registered user can log in with valid credentials.

## Pre-conditions

- Demo app is accessible at `https://demo-app.example.com`
- Test user exists in the demo environment

## Steps

1. Open login page.
2. Enter username `demo.user@example.com`.
3. Enter password from secure test-data store.
4. Tap/click login button.
5. Assert dashboard page is displayed.

## Automation mapping

| Step | Page Object | Action |
|------|-------------|--------|
| 1 | `LoginPage` | `open()` |
| 2 | `LoginPage.usernameField` | `setText()` |
| 3 | `LoginPage.passwordField` | `setText()` |
| 4 | `LoginPage.loginButton` | `tap()` |
| 5 | `DashboardPage.welcomeMessage` | `verifyVisible()` |

## Notes

This is intentionally generic. A real test case would reference the actual Object Repository and test data of the application under test.
