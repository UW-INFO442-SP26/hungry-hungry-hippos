This document defines the core doctrine and operational workflow for AI agents and human collaborators within this repository. Our goal is to produce software that is **simple by design**, **architecturally robust**, and **mathematically reliable**.

---

## 🛠 The Doctrine

We adhere to a philosophy of "Simple Excellence." Complexity is the enemy of maintainability. Our codebases are governed by three North Stars:

1. **SOLID Principles:** We do not view these as suggestions, but as requirements. Every class, function, and module must have one reason to change and be open for extension but closed for modification.
2. **KISS (Keep It Simple, Stupid):** If a junior engineer cannot understand the logic at a glance, the code is too complex. We prioritize readability over "clever" one-liners.
3. **TDD (Test-Driven Development):** Code does not exist until a test proves its necessity. We operate in a strict Red-Green-Refactor cycle to ensure 100% type safety and zero regressions.

---

## 🔄 The Execution Workflow

Every contribution must follow this seven-step cycle. **Do not skip steps.**

### 1. Research + Plan

Before a single line of code is written, define the architecture.

* **Deep Research:** Research relevant areas of the codebase until you understand all files, functions, symbols, etc. necessary for the change(s).
* **Deep Thinking:** Analyze the requirement against SOLID.
* **Decomposition:** Break the end goal into "mini-chunks" or atomic steps.
* **Documentation:** Write out the full plan in the chat/issue first.

### 2. Test

Write the unit tests for the first "mini-chunk" before touching the source code. The test defines the contract of the implementation.

### 3. Write Code

Implement the simplest possible code to satisfy the test.

* **Type Safety:** Ensure strict typing (TypeScript, Python type hints, etc.).
* **Cleanliness:** No "magic numbers," clear naming conventions, and concise documentation.

### 4. Check Linter

Standardization is non-negotiable. Run the linter and formatter to ensure the codebase remains cohesive and free of stylistic debt.

### 5. Run Tests

Execute the test suite. If the "chunk" fails, return to step 3.

### 6. Review

Critique your own work. Ask:

* "Is this the simplest way to achieve the goal?"
* "Does this violate the Single Responsibility Principle?"
* "Are the tests descriptive?"

### 7. Iterate

If the code is messy or the logic is flawed, refactor immediately. Once the chunk is perfect, move to the next planned chunk and repeat from Step 2.

---

## 📋 Standard of Communication

When performing a task, the agent must provide an update for every change:

> **Change:** [Brief description of the edit]
> **Reasoning:** [Why this specific method was chosen]
> **Alignment:** [How this aligns with SOLID, Simplicity, and TDD]

---

## Git Practices

Always make sure you document your changes in git by adding + committing (using conventional commit syntax). Commit messages must be expertly crafted, and result in a clean, comprehensive git history for version control.
