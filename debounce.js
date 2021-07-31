// Debouncing and throttling techniques are used to limit the number of times a function can execute

function myDebounce(func, waitTime) {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(func, waitTime);
    }
}

function myFunc() {
    console.log('this is my event');
}

const onClickEvent = myDebounce(myFunc, waitTime);

<button onclick="onClickEvent()">Click Here</button>