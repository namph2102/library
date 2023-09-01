## Description


react-swisskit is a collection of tools, validators to solve problems in Front End programming with Reactjs

```
# npm install react-swisskit
# yarn add react-swisskit
```

## Features

- handleSort
- createLogger
- capitalizeText
- coverSlug
- timeFormatComment
- Validator
- Debounced
- cn

### Usage

#### Sort
```
import {handleSort} from "react-swisskit";
const list = [8, 9, 8, 5, 7, 4, 5, 2, 4, 4, 5, 4, 7];
handleSort(list);
console.log(list);
==>[ 5, 8, 8, 9 ]

const students = [
  { name: "Hoài Nam", age: 20 },
  { name: "jessica", age: 30 },
  { name: "Tony toàn", age: 82 },
];
handleSort(students, "age");
console.log(students);
==> [
  { name: 'Hoài Nam', age: 20 },
  { name: 'jessica', age: 30 },
  { name: 'Tony toàn', age: 82 }
]
```

#### Validator

```
import { Validator } from "react-swisskit";

console.log(Validator.isEmail("namagmail.com")); // false
console.log(Validator.isEmail("nama@gmail.com")); //true

and more...
 emailRegex
 phoneRegex
 imageRegex
 filePath
 isPhone
 isEmail
 isMinlength
 isMaxLength
 isImageExtend
```

#### Debounced
```
import { Debounced } from "react-swisskit";

const handleSerach = () => {
  console.log("Delay 200ms");
};
Debounced(handleSerach, 200); 
```
[Debounced Demo][https://blog.zecky.online/debounce-toi-uu-hoa-cong-cu-tim-kiem-trong-reactjs]
And more read...."# library" 
