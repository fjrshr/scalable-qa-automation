# Test Listeners

Shared Test Listeners that run before/after test suites, cases, or steps.

Typical responsibilities:

- Environment setup and teardown
- Test data seeding and cleanup
- Screenshot capture on failure
- Reporting integration hooks

In the Hub-and-Spoke model, listeners live in the Hub and are consumed by Spoke repos via an isolated namespace.
