## Description

react-swisskit is a collection of tools, validators to solve problems in Front End programming with ReactJS and NextJS

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
- cn (Giúp tối ưu class trong taidwindcss)

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

and more ...
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

#### cn

```
import { cn } from "react-swisskit";

EX1:
<p className={cn("px-2 py-2","mt-2 mb-2")}> Format Class TailWindCss</p>
-->--------------------
 View HTML  <p class="p-2 my-2">Format Class TailWindCss</>

EX2:
const isAdmin=true;

<p className={cn("title_format-red",isAdmin?"text-red-300":"text-yellow-300")}> Trnarye operator to format class </p>
-->--------------------
 View HTML  <p class="p-2 my-2">Format Class TailWindCss</>

```

#### coverSlug

```
import { coverSlug } from "react-swisskit";

coverSlug("toi yeu   em qua  "); // toi-yeu-em
coverSlug("qua dai @#2 dsasda khơ  "); // qua-dai-kho
coverSlug("Điện thoại nè  "); // dien-thoai-ne
```

#### capitalizeText

```
import { capitalizeText } from "react-swisskit";

capitalizeText("toi yeu   em qua  "); // Tôi Yêu Em
capitalizeText("phạm hoài Nam  "); // Phạm Hoài Nam
```

#### removeVietnameseTones

```
import { removeVietnameseTones } from "react-swisskit";

removeVietnameseTones("Sài thư viện này đi xịn lắm "); // Sai thu vien nay di xin lam
removeVietnameseTones("phạm hoài Nam  "); // pham hoai Nam
```
