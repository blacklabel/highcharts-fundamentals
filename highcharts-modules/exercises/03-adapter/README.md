# Exercise 03

In this exercise we will try solve a common problem: updating a dependency in our project.

Imagine a situation, when a dependancy v2.0 (with a completely new API) is being released and we need to update it. In a small projects, that's not a big problem: we create a PR with necessary changes in the project.

However, for a huge projects, updating API might be time consuming, can be related to legacy parts of the projects etc. In such case, we can write **an adapter** that allows us using new version of module with old API (or the other way around)

___

1) Copy solution from Exercise 02 (`color-generator-v2.0.mjs`).

2) Copy tests from Exercise 01.

3) Implement a functional adapter:

- Adapter should have the same API as `color-generator.mjs` in Exercise 01
- Imported should be only `color-generator-v2.0.mjs`

Use **default export**.

4) Run tests from Exercise 01