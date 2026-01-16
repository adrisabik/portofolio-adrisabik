import type { BlogPost } from '@/types/blog';

export const mockBlogPosts: BlogPost[] = [
    {
        slug: 'clean-architecture-flutter',
        title: 'Clean Architecture in Flutter: A Practical Guide',
        excerpt: 'Learn how to structure your Flutter apps for maintainability and testability using Clean Architecture principles.',
        date: '2024-12-15',
        readingTime: '8 min read',
        tags: ['Flutter', 'Architecture', 'Clean Code'],
        content: `When building scalable Flutter applications, starting with a robust architecture is non-negotiable. Over the years, "Clean Architecture" (popularized by Uncle Bob) has become a gold standard for mobile development. In this guide, I'll walk you through how to pragmatically implement it in Flutter.

## Why Clean Architecture?

The core philosophy is the **Separation of Concerns**. By dividing your app into distinct layers, you achieve:
1.  **Independence of Frameworks:** The UI can change without affecting business logic.
2.  **Testability:** Business rules can be tested without UI, Database, or Web Server.
3.  **Independence of UI:** The UI can change easily, without changing the rest of the system.
4.  **Independence of Database:** You can swap out Oracle or SQL Server, for Mongo, BigTable, CouchDB, or something else.
5.  **Independence of any external agency:** In fact your business rules simply don't know anything at all about the outside world.

## The Three Layers

In a typical Flutter implementation, we divide the project into three main layers:

### 1. Domain Layer (The Core)
This is the heart of your application. It contains the **Entities** (core business objects) and **Use Cases** (business rules). Crucially, this layer **must not depend on any other layer**. In Dart, this means it should only contain pure Dart code, with no dependencies on Flutter widgets or third-party packages like Dio or Hive.

*Example:* A \`User\` entity and a \`GetUserDetails\` use case.

### 2. Data Layer (The Infrastructure)
This layer is responsible for data retrieval and persistence. It implements the interfaces (Repositories) defined in the Domain layer. It consists of:
*   **Repositories Implementation:** The glue between domain and data sources.
*   **Data Sources:** Low-level access to APIs (Remote) or Local DB (Local).
*   **Models:** Data transfer objects (DTOs) that extend Entities and handle JSON serialization.

### 3. Presentation Layer (The UI)
This is where Flutter comes in. It depends on the Domain layer to execute logic.
*   **State Management:** BLoC, Riverpod, or Provider. They talk to Use Cases.
*   **Widgets:** The visual components that react to state changes.

## A Practical Folder Structure

Here is how I organize my features (e.g., \`authentication\`):

\`\`\`text
lib/
  features/
    authentication/
      domain/
        entities/       # User.dart
        repositories/   # IAuthRepository.dart
        usecases/       # Login.dart
      data/
        models/         # UserModel.dart
        repositories/   # AuthRepositoryImpl.dart
        datasources/    # AuthRemoteDataSource.dart
      presentation/
        bloc/           # AuthBloc.dart
        pages/          # LoginPage.dart
        widgets/        # LoginForm.dart
\`\`\`

## Common Pitfalls

*   **Over-engineering:** Not every app needs this level of separation. If you're building a prototype, MVVM might be faster.
*   **Boilerplate:** Yes, there is a lot of code to write upfront. Use generators like \`mason\` or VS Code snippets to speed this up.
*   **Strictness:** Don't be dogmatic. If a Use Case simply passes data from Repository to UI, it might feel redundant, but it ensures consistency.

## Conclusion

Clean Architecture isn't a silver bullet, but for long-term projects with teams, it provides a sanity-saving structure. It makes onboarding easier, testing simpler, and refactoring less scary. Start small, understand the flow of dependency rule (pointing inwards), and scale as you go.`,
    },
    {
        slug: 'bloc-vs-riverpod',
        title: 'Bloc vs Riverpod: Which State Management to Choose?',
        excerpt: 'A comprehensive comparison of the two most popular state management solutions in Flutter.',
        date: '2024-11-20',
        readingTime: '6 min read',
        tags: ['Flutter', 'State Management', 'Bloc', 'Riverpod'],
        content: `The debate between BLoC (Business Logic Component) and Riverpod is one of the most common topics in the Flutter community. Having used both extensively in production, I want to break down the differences, pros, and cons to help you decide which one fits your project.

## The Contenders

### BLoC (by Felix Angelov)
BLoC is a mature, battle-tested library based on streams. It enforces a strict unidirectional data flow: **Events In, States Out**.
*   **Philosophy:** Strict separation of business logic from UI.
*   **Mechanism:** Relies heavily on Dart Streams.

### Riverpod (by Remi Rousselet)
Riverpod is a rewrite of Provider, designed to solve its limitations (like compile-time safety and dependency injection).
*   **Philosophy:** A reactive caching and data-binding framework.
*   **Mechanism:** Does not rely on the widget tree (unlike Provider), making it more testable and composable.

## Comparison Points

### 1. Boilerplate
*   **BLoC:** Traditionally known for high boilerplate (Events, States, Bloc files). Although \`cubit\` reduces this significantly, it's still more verbose than Riverpod.
*   **Riverpod:** Very concise. Defining a provider is often just one line of code.

### 2. Learning Curve
*   **BLoC:** High initially. You need to understand Streams, sinks, and the event-state pattern effectively.
*   **Riverpod:** Moderate. The concept of global providers that aren't *actually* global can be confusing at first, along with the variety of providers (StateProvider, FutureProvider, NotifierProvider, etc.).

### 3. Testing
*   **BLoC:** Excellent. Since BLoCs are just classes interacting with streams, they are incredibly easy to unit test using \`bloc_test\`.
*   **Riverpod:** Also excellent, but different. You override providers in your test scope.

### 4. Dependency Injection
*   **BLoC:** Usually paired with \`get_it\` or Project for DI.
*   **Riverpod:** Is a Dependency Injection system itself. This is a huge plus—you don't need another package for DI.

## When to Use Which?

**Choose BLoC if:**
*   You work in a large enterprise team. BLoC's strictness is an asset here—it forces everyone to code in the same way.
*   You need complex event transformations (e.g., debounce search inputs) which are trivial with RxDart + BLoC.
*   You prefer an imperative style of "do this on this event".

**Choose Riverpod if:**
*   You want less boilerplate and faster development velocity.
*   You want a unified solution for State Management + Dependency Injection + Data Fetching (Riverpod basically replaces Dio + GetIt + Provider).
*   You prefer a more declarative, functional style.

## My Personal Verdict

For most new projects in 2024, **Riverpod** is my default choice. The productivity gains are undeniable. However, for legacy enterprise codebases or scenarios requiring complex stream manipulation, **BLoC** remains the king.`,
    },
    {
        slug: 'offline-first-apps',
        title: 'Building Offline-First Mobile Apps',
        excerpt: 'Strategies and patterns for building mobile apps that work seamlessly without internet connectivity.',
        date: '2024-10-05',
        readingTime: '10 min read',
        tags: ['Flutter', 'Offline', 'SQLite', 'Sync'],
        content: `In a world where we expect constant connectivity, the reality is often spotty 4G, dead zones in elevators, or expensive roaming data. An "Offline-First" app isn't just a nice-to-have features; it's often a requirement for a great user experience. Here is my strategy for building robust offline-capable Flutter apps.

## The Mental Model

Traditional apps treat the Server as the "Source of Truth" and the App as a simple viewer.
**Offline-First apps treat the Local Database as the primary "Source of Truth" for the UI.**

The flow changes from:
\`UI -> API -> UI\`
to:
\`UI -> Local DB -> UI\`
and in the background:
\`Local DB <-> Sync Engine <-> API\`

## Key Components

### 1. Local Storage
You need a robust local database.
*   **SQLite (via drift or sqflite):** Great for relational data, complex queries, and stability.
*   **Hive / Isar:** NoSQL, incredibly fast, and easier to set up for simple data models.
*   **PowerSync:** An emerging player that handles sync automatically with Postgres.

### 2. Synchronization Strategy
This is the hardest part. How do you keep local and remote data in sync?

*   **Strategy A: Last Write Wins (easiest):** Just overwrite based on timestamps. Good for simple settings.
*   **Strategy B: Optimistic UI:** Update the local UI immediately. Send the request to the server. If it fails, roll back the change and notify the user.
*   **Strategy C: Conflict Resolution:** If two users edit the same record, you need logic (or user intervention) to decide which version to keep.

### 3. Queue System
When the device is offline, user actions (POST/PUT/DELETE) must be captured in a "Pending Actions Queue".
*   Persist this queue to disk! If the app crashes, the action shouldn't be lost.
*   Pattern: Use a \`WorkManager\` or a custom queue service that listens for connectivity changes (using \`connectivity_plus\`) to process the queue.

## Practical Implementation Steps

1.  **Repository Logic:** Your repository should always return a Stream from the Local DB.
2.  **Fetch Logic:** When the repository is called, trigger a "fetch from network" in the background. When data arrives, save it to Local DB. The Stream will automatically update the UI.
3.  **Write Logic:** Write to Local DB first. Then add a job to the Sync Queue.

## Handling Edge Cases

*   **Pagination:** It gets tricky. Do you paginate from local DB or API? usually, you sync "recent" data and fetch older data on demand.
*   **File Uploads:** Images need to be stored locally (cached) and queued for upload. You need to handle retries and partial uploads.

## Summary

Building offline-first is expensive. It effectively doubles your data layer complexity. However, the result is an app that feels instant, trustworthy, and usable anywhere. For mission-critical apps (field service, logistics, healthcare), it is absolutely worth the investment.`,
    },
];
