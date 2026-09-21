# Scalable QA Automation

A public reference architecture for scalable test automation across large mobile and web ecosystems, built around **Agentic AI**, **Hub-and-Spoke distribution**, and **MCP-based device verification**.

> This repository is a sanitized, personal portfolio version of an automation architecture I designed and governed for a multi-app digital ecosystem. No proprietary code, internal URLs, or production application assets are included.

## Architecture at a glance

- **Hub-and-Spoke distribution** — shared automation backbone (keywords, listeners, conventions) distributed to 31+ application repositories via Git submodules.
- **Namespace isolation** — all shared content lives under a dedicated namespace so it never collides with local team assets.
- **Agentic AI lifecycle** — AI-assisted requirement analysis, test-case generation, self-healing automation, and defect traceability.
- **MCP integration layer** — connects Playwright and mobile device farms into AI agent workflows for real-time locator verification.

## Impact metrics

- 31+ apps on a single automation backbone
- 85%+ automation coverage on critical user journeys
- 75% reduction in test creation time (20 min → 5 min per use case)
- 3.5x tester throughput improvement (7 → 25 test cases per tester per night)

## Repository layout

```
scalable-qa-automation/
├── docs/
│   └── architecture/
│       ├── 01-hub-and-spoke-design.md
│       ├── 02-agentic-ai-testing-playbook.md
│       └── 03-mcp-integration.md
├── keywords/
│   └── common/
│       └── README.md
├── test-listeners/
│   └── README.md
├── samples/
│   ├── demo-test-case.md
│   └── dummy-page-objects/
│       └── README.md
├── demos/
│   └── web-playwright/
│       ├── tests/
│       │   └── login.spec.js
│       ├── playwright.config.js
│       ├── package.json
│       └── README.md
└── .github/
    └── workflows/
        ├── sample-ci-cd.yml
        └── playwright-demo.yml
```

## Live demos

- **Web Playwright Demo** (`demos/web-playwright/`) — runnable end-to-end tests against the public [SauceDemo](https://www.saucedemo.com) site, with GitHub Actions CI.

## Tech stack

Katalon Studio · Appium · Playwright · Selenium · API Testing · Jenkins · GitLab CI · Docker · GitHub Actions · Java · Groovy · Python · TypeScript · MCP

## License

MIT — free to use as a reference or starting point for your own framework.
