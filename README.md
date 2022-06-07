# is-valid-email
A single javascript function to check whether a provided email is in a valid form.

### Example
```js
import isValidEmail from './isValidEmail';


const email = "myemail27@gmail.com";
console.log(isValidEmail(email));
```
```bash
>true
~$
```

```js
import isValidEmail from './isValidEmail';


const invalid_email = "$myemail27@gmail.com";
console.log(isValidEmail(invalid_email));
```
```bash
>false
~$
```
