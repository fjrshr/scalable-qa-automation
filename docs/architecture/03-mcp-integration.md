# MCP Integration Layer

## What is MCP here?

MCP (Model Context Protocol) is used as a bridge between AI agents and real automation tools. It allows an agent to invoke Playwright or mobile device commands and observe the results, enabling real-time verification instead of guessing locators.

## Components

- **Playwright MCP server** — agent can inspect DOM, verify selectors, and capture screenshots of web apps.
- **Mobile MCP server** — agent can query live Android/iOS device UI hierarchies and validate element presence.

## Workflow

```
AI agent needs to verify a login flow
        │
        ▼
   Calls Playwright MCP
        │
        ▼
   Playwright navigates to demo app
        │
        ▼
   Returns DOM snapshot + screenshot
        │
        ▼
   Agent validates or proposes locator fix
```

## Why it matters

Traditional AI-generated locators are fragile because they are based on static assumptions. MCP lets the agent **see** the actual UI state, so locators are verified against the real (or staging) application.

## Security note

All MCP integrations run against isolated demo or staging environments. No production credentials or live customer data are exposed to the agent.
