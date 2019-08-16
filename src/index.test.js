/* global test, expect, jest */

import Events from '.'

test('listener is triggered on emit', () => {
  const events = Events()
  const listener = jest.fn()
  events.addListener('event-name', listener)
  events.emit('event-name')
  expect(listener).toHaveBeenCalledTimes(1)
})

test('onError is triggered on error', () => {
  const events = Events()
  const listener = () => { throw new Error('error event') }
  const onError = jest.fn()
  events.onError = onError
  events.addListener('event-name', listener)
  events.emit('event-name')
  expect(onError).toHaveBeenCalledTimes(1)
  expect(onError.mock.calls[0][0].message).toEqual('error event')
})

test('delivers payload to listener', () => {
  const events = Events()
  const listener = jest.fn()
  events.addListener('event-name', listener)
  events.emit('event-name', 'payload')
  expect(listener).toHaveBeenCalledTimes(1)
  expect(listener.mock.calls[0][0]).toEqual('payload')
})
