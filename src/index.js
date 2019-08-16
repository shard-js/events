function createEventEmitter () {
  const self = {}
  const listeners = {}

  self.addListener = function addListener (name, fn) {
    if (typeof listeners[name] === 'undefined') {
      listeners[name] = [fn]
    } else {
      listeners[name] = [...listeners[name], fn]
    }
  }

  self.emit = function emit (name, ...payload) {
    if (Array.isArray(listeners[name])) {
      Array.prototype.forEach.call(listeners[name], (l) => {
        try {
          l(...payload)
        } catch (e) {
          if (typeof self.onError === 'function') {
            try {
              self.onError(e)
            } catch (_) {
              // noop
            }
          }
        }
      })
    }
  }

  return self
}

export default createEventEmitter
