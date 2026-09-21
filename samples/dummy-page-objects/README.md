# Dummy Page Objects

Fictional page-object examples for illustration only. No real application locators are included.

```
Object Repository/
└── Agentic Era/
    └── Web/
        └── Pages/
            ├── LoginPage/
            │   ├── usernameField
            │   ├── passwordField
            │   └── loginButton
            └── DashboardPage/
                ├── welcomeMessage
                └── logoutButton
```

Each object is defined by a stable selector strategy (ID, accessibility ID, or data-testid) rather than brittle XPath.
