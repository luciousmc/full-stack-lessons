# sql-select

This lesson introduces the SQL language and how to execute queries against a PostgreSQL database.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/sql-select` directory in your terminal.

### Introduction

[Structured Query Language (SQL)](https://en.wikipedia.org/wiki/SQL) is the primary way of interacting with relational databases. It is a powerful way of retrieving, creating, and manipulating data in a relational database.

You may be familiar with **imperative** programming languages such as JavaScript, where you basically tell the JavaScript runtime **what to do and how to do it**.

  - Store this value (variables)
  - Make this choice (conditionals)
  - Repeat these steps (loops)

SQL is different! SQL is a **declarative** programming language. In declarative languages, programmers _describe_ the results they want and the programming environment comes up with its own plan for getting those results. Does this sound familiar? It should! Both HTML and CSS are declarative programming languages! The programmer simply "declares" their intent and the Web browser does its best to output the desired results according to a predefined set of rules. Relational databases interpret SQL and then **dynamically generate a plan of action** to perform the programmer's commands as efficiently as possible.

There are a few different types of SQL commands:

  - Data Query Language (DQL) - How to retrieve data from the database.
  - Data Definition Language (DDL) - How to set up schema definitions.
  - Data Control Language (DCL) - How to set up access permissions for data.
  - Data Manipulation Language (DML) - How to modify data in the database.

For now, we'll talk about how to _query_ a database. Consider this table of product data and imagine if it were _many_ products long:

| productId | name        | description                | price | category |
|-----------|-------------|----------------------------|-------|----------|
| 24        | ShakeWeight | Makes you really strong!   | 30    | fitness  |
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | cleaning |
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning |

Querying a database typically takes the form of a `select` statement.

### Exercise

1.

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

-
