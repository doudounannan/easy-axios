# easy-axios

## 使用

```js
import axios from 'easy-axios';

async function getData () {
    const res = await axios.get({
        url: 'http://xxx'
    });

    return res;
}
```
