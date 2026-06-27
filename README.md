# Casino Lobby

A casino-style games homepage built with Next.js, TypeScript and Tailwind CSS,
using the [Free-To-Game API](https://www.freetogame.com/api-doc). Games are
grouped by genre into horizontal sliders, with search, filtering, sorting,
favorites and a game details page.

**Live demo:** [casino-lobby-diamond.vercel.app](https://casino-lobby-diamond.vercel.app/)

## Setup

```bash
git clone https://github.com/JacopoCarrozzo/casino-lobby.git
cd casino-lobby
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To run the unit tests:

```bash
npm test
```

---

## Short Questions

### 1. REST vs GraphQL

A REST API exposes multiple endpoints, each returning a fixed data structure.
To build a screen you often call several endpoints and may get more data than
you need (over-fetching) or need extra requests for related data
(under-fetching). It relies on standard HTTP conventions and is simple and
widely understood.

GraphQL exposes a single endpoint where the client sends a query describing
exactly the fields it wants, and gets back exactly that shape in one request.
This avoids over- and under-fetching and suits complex or nested data, at the
cost of more setup (a schema and resolvers) and less straightforward HTTP
caching.

In short: REST is multiple fixed endpoints over standard HTTP; GraphQL is a
single flexible endpoint where the client decides the response shape.

### 2. RabbitMQ

RabbitMQ is a message broker: it sits between parts of a system and passes
messages between them. A producer sends a message, RabbitMQ holds it in a
queue, and a consumer picks it up when ready. This decouples sender from
receiver and lets work be processed asynchronously and across multiple workers.
It is typically used for background jobs and communication between services.

**Practical example:** when a user signs up, the app publishes a "send welcome
email" message to RabbitMQ and immediately responds to the user. A separate
worker consumes that message and sends the email in the background, so the
signup stays fast even under heavy load and no email is lost.

### 3. SQL vs NoSQL

SQL (relational) databases store data in tables with a fixed schema, use
explicit relationships between tables, and provide strong consistency and ACID
transactions — a good fit for structured data where relationships matter.

NoSQL covers non-relational databases (document, key-value, column, graph).
They usually have a flexible or schema-less model and scale horizontally well,
which suits large volumes or rapidly changing, less structured data, often with
weaker consistency or relationship guarantees.

Main differences: structure (fixed tables vs. flexible documents/key-value),
relationships (joins vs. usually denormalized data), scaling (typically
vertical vs. horizontal) and consistency (strong/ACID vs. often eventual). The
right choice depends on the shape of the data and the access patterns.

### 4. TypeScript

TypeScript is JavaScript with static types added on top. Compared to plain
JavaScript it catches errors earlier (type mismatches and wrong arguments are
flagged before runtime), gives better editor support (autocomplete and safe
refactoring), and makes the code more self-documenting since types describe
what functions expect and return. This pays off especially as a project grows,
where types act as a contract between different parts of the code.

The cost is a compilation step and writing the types, but on anything beyond a
tiny script the gain in reliability is usually worth it. TypeScript compiles to
plain JavaScript, so it runs anywhere JavaScript runs.
