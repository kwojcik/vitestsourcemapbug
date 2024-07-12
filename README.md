Repro for vitest issue. Press `r` to re-run the test to cause it to trigger

```
npm install
npm run test
```

```
TypeError: [Function redirect2] is not a spy or a call to a spy!

Failure screenshot:
  - test/__screenshots__/test1.test.tsx/test-with-broken-spy-returns-redirect-response-if-key-not-included-in-param-validation-schema-1.png

 ❯ test/test1.test.tsx:27:49
     16|     expect(vi.mocked(redirect)).toHaveBeenCalledOnce();
     17|   });
     18| });
       |              ^
     19|
```