/*                                      "MODULES"
 Module is a file that contains related code which can be exported and imported into other files or modules.
Modules help in organizing code by splitting it into smaller, reusable pieces,
each responsible for a specific functionality. This improves maintainability and readability,
and it allows for easier management of dependencies.

1) Exporting: This is the process of making functions, objects,
 or variables available to other modules.
 You can export multiple items using named exports or a single default export.

2) Importing: This is the process of including exported functions, objects,
or variables from one module into another so that they can be used.*/
export let nameFunc = (value) => {
    console.log("Hello" + " " + value);
};
export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}
