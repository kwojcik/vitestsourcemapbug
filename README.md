Repro for vitest issue, incorrect line number on stack trace

```
npm install
npm run test
```

```
Error: oops
 ❯ test/basic.test.tsx:7:11
      5| });
      6|
      7| test("fails", async () => {
       |           ^
      8|   setTimeout(() => {
      9|     throw new Error("oops");
```