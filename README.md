# Events

`Events` is a simple library to create an event emitter

## installation


for npm:

```
npm i @shards/events
```

for yarn:

```
yarn add @shards/events
```

to require:

```
const Maybe = require('@shards/events').default
```

to import (es6 modules):

```
import Maybe from '@shards/events'
```

for node:

```
import Maybe from '@shards/events/dist/events.node.js'
```

## usage

```
const events = Events()

events.addListener('success', (msg) => {
  console.log(msg)
})

events.emit('success', 'my payload') // "my payload"
```
