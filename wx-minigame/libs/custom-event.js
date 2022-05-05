Object.defineProperty(window.document, 'createEvent', {
    get () {
        return () => {
            return {

                timeStamp: Date.now(),
                initEvent () {
                    console.log(arguments)
                },
                addEventListener (name, func, capture) {
                    window.addEventListener(name, func, capture);
                },
                dispatchEvent (e) {
                    window.dispatchEvent(this);
                }
            };
        };
    }
})

// console.log('custom-event.js', window.document.createEvent);