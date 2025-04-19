
# 📘 Angular Essentials – Quick Revision Notes

## 🔹 Core Angular Concepts

- **Components**
  - Fundamental building blocks of Angular apps.
  - Created using `@Component` decorator.
  - Defined by selector, template, and styles.
  - Used as custom HTML elements.
  - Can be nested to form a **component tree**.

- **Component Communication**
  - `@Input`: Pass data from **parent to child**.
  - `@Output`: Emit events/data from **child to parent** using `EventEmitter`.

---

## 🔹 Template Binding Types

- **String Interpolation**  
  `{{ value }}` — Display values in the DOM.

- **Property Binding**  
  `[property]="value"` — Set DOM properties dynamically.

- **Event Binding**  
  `(event)="handler()"` — Listen to events (e.g., clicks).

- **Two-Way Binding**  
  `[(ngModel)]="value"` — Two-way data binding (requires `FormsModule`).

---

## 🔹 Change Detection

- **Default Behavior**
  - Angular uses `zone.js` to auto-detect and reflect data changes.
  - Just update data → UI updates automatically.

- **Signals (Angular 16+)**
  - More efficient, manual reactivity system.
  - Use `signal.set()` to trigger changes.
  - Useful for performance-sensitive applications.

---

## 🔹 Conditional Rendering & Loops

- **Conditional Rendering**
  - `@if` (Angular 17+): Cleaner modern syntax.
  - `*ngIf`: Legacy alternative.

- **List Rendering**
  - `@for` (Angular 17+): Easy looping syntax.
  - `*ngFor`: Traditional looping method.

---

## 🔹 Styling and Structure

- **Class Binding**  
  `[class.class-name]="condition"` — Dynamically apply CSS classes.

- **Content Projection**  
  `ng-content` — Acts like a slot to inject HTML into a component's template.

---

## 🔹 Pipes

- **Purpose**: Transform data directly in the template.
- **Examples**:
  - `{{ dateValue | date }}`
  - `{{ price | currency }}`
  - `{{ name | uppercase }}`

---

## 🔹 Forms & Submissions

- **ngSubmit**:
  - Used with Angular forms.
  - Prevents default page reload on form submission.
  - Handles form logic in Angular (client-side).
  - Requires `FormsModule`.

---

## 🔹 Services & Dependency Injection (DI)

- **Services**
  - Contain business logic & reusable data operations.
  - Promote separation of concerns and reusability.

- **Dependency Injection**
  - Use `@Injectable()` to register a service.
  - Inject via constructor or `inject()` function.
  - Makes services available app-wide.

---

## 🔹 Version-Specific Features

| Feature        | Available Since |
|----------------|-----------------|
| `@if`, `@for`  | Angular 17      |
| Signals        | Angular 16      |

---

## ✅ Summary

- These are the **foundational Angular features**.
- You'll reuse them repeatedly in real-world apps and projects.
- Revisit this list when needed to reinforce your understanding.

---
