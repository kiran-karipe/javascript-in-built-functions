// Debouncing and throttling techniques are used to limit the number of times a function can execute

const inputField = document.getElementById('input');
inputField.addEventListener('keypress',  myDebounce(greet, 300))

function myDebounce(func, waitTime) {
    let timer;
    return function() {
        const args = arguments; // arguments is javascript keyword of type array like object
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args); // apply is used to pass arguments as an array,
        }, waitTime); //context refers to 'this', we can pass null incase you don't need 'this'
    }
}

function greet(name, title, age) {
    // console.log(this.value); // call from inputField
    console.log(name + ', ' + title + ', ' + age);
}

/* const debouncedGreet = myDebounce(greet, 5000);
debouncedGreet('kiran', 'karipe', '29');
debouncedGreet('kiran', 'karipe', '29');
debouncedGreet('kiran', 'karipe', '29');
debouncedGreet('kiran', 'karipe', '29'); */