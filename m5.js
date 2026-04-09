//Create a makeGreeter function that takes a language ("en" or "es") and returns a function that greets a name in that language.
function makeGreeter(lang) {
    return function (name) {
        if (lang === "en") {
            console.log("Hello " + name)
        } else {
            console.log("Hola " + name);
        }

    }
}

const greetEn = makeGreeter("en");
greetEn("Alex");

const greetEs = makeGreeter("es");
greetEs("Alex");

