Repro for vitest issue

```
npm install
npm test
```

```
➜  vitestsourcemapbug git:(svgUserEvent) npm test

> test
> vitest


 DEV  v2.0.0-beta.12 /Users/kevinwojcik/ontra/eng/vitestsourcemapbug
      Browser runner started at http://localhost:5173/

stderr | test/Svg.test.tsx > can hover svg using vitest userEvent
Warning: `ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.
 ❯ test/Svg.test.tsx (4) 1124ms
   × can hover svg using vitest userEvent 1091ms
   ✓ can hover svg using TL userEvent
   ✓ can hover button using vitest userEvent
   ✓ can hover button using TL userEvent

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  test/Svg.test.tsx > can hover svg using vitest userEvent
TimeoutError: locator.hover: Timeout 1000ms exceeded.
Call log:
  - waiting for frameLocator('[data-vitest="true"]').locator('xpath=HTML/BODY[1]/DIV[1]/svg[1]')

 ❯ Receiver.receiverOnMessage node_modules/ws/lib/websocket.js:1211:20
 ❯ Receiver.dataMessage node_modules/ws/lib/receiver.js:594:14
 ❯ Receiver.getData node_modules/ws/lib/receiver.js:496:10
 ❯ Receiver.startLoop node_modules/ws/lib/receiver.js:167:16
 ❯ Receiver._write node_modules/ws/lib/receiver.js:94:10
 ❯ Socket.socketOnData node_modules/ws/lib/websocket.js:1305:35

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

 Test Files  1 failed (1)
      Tests  1 failed | 3 passed (4)
   Start at  10:39:35
   Duration  2.18s (transform 0ms, setup 374ms, collect 12ms, tests 1.12s, environment 0ms, prepare 173ms)


 FAIL  Tests failed. Watching for file changes...
       press h to show help, press q to quit
```