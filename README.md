Repro for vitest issue, incorrect line number on stack trace

```
npm install
npm run test
```

```
 FAIL  test/basic.test.tsx > DocumentRepositoryPage > renders a table with rows
Error: oops

Failure screenshot:
  - test/__screenshots__/basic.test.tsx/DocumentRepositoryPage-renders-a-table-with-rows-1.png

 ❯ Bar components/Bar.tsx:2:9
      1| function Foo() {
      2|   return <>hi</>;
       |         ^
      3| }
      4| export default function Bar() {
```