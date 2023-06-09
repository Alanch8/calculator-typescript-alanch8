## Calculator Library

> For educational use

[Link to npm library](https://www.npmjs.com/package/calculator-typescript-alanch8)

---

# Instalation

- Use the following command to install the library in your project

```javascript 
npm i calculator-typescript-alanch8
```

- Import the library into your project like this

```javascript 
import {Calculator} from 'calculator-typescript-alanch8';
```

## Methods

```javascript 
add(a:number,b:number):number
```
addition of a and b variables (muest be numbers). 
returns a + b.

```javascript 
subs(a:number,b:number):number
```
substraction of a and b variables (muest be numbers). 
returns a - b.

```javascript 
multiply(a:number,b:number):number
```
multiplication of a and b variables (muest be numbers). 
returns a * b.

```javascript 
div(a:number,b:number):number
```
division of a and b variables (muest be numbers). 
returns a / b.

If the b variable is a zero (0) number the program will throw a math error.

# How this library was built

In order to create and upload this library to Npm, we have used [C-J Kihl](https://medium.com/@carljohan.kihl)'s [tutorial](https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c) from Medium.

Important things to keep in mind;
- [x] Start the project
- [x] Configure it.
- [x] Create a build (transpile it with tsc).
- [x] format it and paint it with Prettier and Tlint.
- [ ] Test it with Jest in the best case.

Once the library is finished, we create a commit and upload it to github using git push in order to continue with the steps to upload it to npm.

Let's publish the lib to npm with:

```javascript
npm publish
```

And that's all  🎉. It's interstingt to know we can make diferent versions with:

```javascript
npm version patch
```


Thanks for reading! 






---

Aitor Lancharro "Alanch8" ☕

