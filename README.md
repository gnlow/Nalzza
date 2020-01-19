# Nalzza
Parses from any date notation
```js
const nalzza = require("nalzza")

new Date("19년 1월 20일") // Invalid Date
nalzza("19년 1월 20일") // 2019-01-20T00:00:00.000Z
```
