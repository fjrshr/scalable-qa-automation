# Common Keywords

This directory is a placeholder for shared, application-agnostic Keywords.

Examples of what belongs here:

- `LoginSteps` — generic login flow steps parameterized by credentials.
- `NavigationSteps` — common navigation helpers.
- `AssertionHelpers` — reusable assertions for API and UI.
- `WaitHelpers` — centralized explicit wait strategies.

All production-specific keywords have been removed. In a real Spoke repo, these would be symlinked from the Hub into an isolated namespace.
