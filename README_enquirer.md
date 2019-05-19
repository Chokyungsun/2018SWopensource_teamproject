<h1 align="center">Autocomplete</h1>

<br>
<br>

<p align="center">
<b>choices들 중에서 선택하는 기능</b><br>
<sub>>_선택지에 대해 여러 작업이 가능하다.▌</sub>

</p>

<br>


![autocoplete](/uploads/76e0419b9aa7c6dae2edad2d525240a0/autocoplete.gif)

<br>
<h3>> HOW TO IMPLEMENT</h3>

1. prompt에서 `enquirer-master/examples/autocomplete` 파일로 들어간다.<br>
2. **node _원하는 파일 이름_.js**을 입력하면 실행된다.

<h3>> OPTIONS</h3>
<sub>>>_각각 다른 옵션들이 들어가있는 autocomplete js 파일들</sub><br><br>

* **enquirer.js** - 기본적인 template 제공. choices 들 중에서 flavor에 들어갈 단 하나의 값을 선택한다. Enter키로 선택하거나 키보드를 통해 알파벳들을 입력하여 선택지를 줄인 후 선택할 수 있다.<br>
* option-format.js - format 함수를 통해, 선택한 값을 a-l-m-o-n-d 식으로 return하게 한다.<br>
* option-header.js<br>
* option-highlihgt.js - 키보드를 통해 입력되는 알파벳들의 색을 green으로 한다.<br>
* option-initial.js - 맨 처음 선택되어 있는 값을 choice의 4번째 단어로 설정한다. scroll up/down으로 값을 변경할 수 있다.
ex) initial:3 ---> cherry <br>
* option-limit.js - prompt창에 보여지는 choices의 단어의 개수를 제한한다.
ex) limit: 7 ---> 7개의 선택지만 prompt창에 보여진다.
* option-ㅡmultiple.js - 선택 가능한 단어의 개수가 복수이다. 숫자 키보드를 입력하여 단어를 여러 개 선택한다.
ex) 1,2,3 ---> apple, banana, cherry 선택된다.<br>
* option-result.js -result 함수를 통해, 선택된 flavor의 값이 대문자로 return 되도록 한다. <br>
* option-styles.js - scroll up/down으로 선택 중인 단어의 색깔을 파란색으로 한다. <br>
* option-suggest.js - enquirer.js와 유사하다. <br>
* prompt.js - 1.const {prompt} = require('enquirer');
              prompt({type: 'automatic'})
              2.const {Autocomplete} = require('enquirer');
                comst prompt = new Autocomplete({})
              표현 방식만 다를 뿐 enquirer.js와 동일하다. <br>

<h3>> CODE</h3>
<h5>>>basic code</h5>

```js
'use strict';

const { prompt } = require('enquirer');

prompt({
  type: 'autocomplete',
  name: 'flavor',
  message: 'Pick your favorite flavor',
  limit: 10,
  choices: [
    'Almond',
    'Apple',
    'Banana',
    'Blackberry',
    'Blueberry',
    'Cherry',
    'Chocolate',
    'Cinnamon',
    'Coconut',
    'Cranberry',
    'Grape',
    'Nougat',
    'Orange',
    'Pear',
    'Pineapple',
    'Raspberry',
    'Strawberry',
    'Vanilla',
    'Watermelon',
    'Wintergreen'
  ]
})
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);

```

<h5>>>optional code</h5>
format

```js
format(value = '') {
      return value.split('').join('-').toLowerCase();
    },
```

highlihgt

```js
highlight: colors.green,
```

initial

```js
initial: 3,
```

limit

```js
limit: 3,
```

multiple

```js
  multiple: true,
```

result

```js
result(value) {
    return value.toUpperCase();
  }
```

<h1 align="center">Boolean</h1>

<br>
<br>

<p align="center">
<b>질문에 대해 true/false를 선택하는 기능</b><br>
<sub>>_TRUE or FALSE?▌</sub>
</p>

<br>

![bool](/uploads/823350a431f8eaa91cad0cded248a863/bool.gif)

<br>
<h3>> HOW TO IMPLEMENT</h3>

1. prompt에서 `enquirer-master/examples/boolean` 파일로 들어간다.<br>
2. **node _원하는 파일 이름_.js**을 입력하면 실행된다.

<h3>> OPTIONS</h3>
<sub>>>_각각 다른 옵션들이 들어가있는 boolean js 파일들</sub><br><br>

* **option-initial.js** - 기본적인 template 제공. answer의 값이 false로 초기화 되어 있다.
                      키보드로 t 또는 f를 입력하여 answer의 값이 true 또는 false로 되게 한다.<br>
* prompt.js - 초기값 설정이 되어있지 않다. 나머지는 option-initial.js와 동일하다.<br>

<h3>> CODE</h3>
<h5>>>basic code</h5>

```js
const { BooleanPrompt } = require('enquirer');

const prompt = new BooleanPrompt({
  name: 'answer',
  message: 'Want to answer?',
  initial: false
});

prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);

```

<h1 align="center">Comfirm</h1>

<br>
<br>

<p align="center">
<b>질문에 대해 true/false를 선택하는 기능</b><br>
<sub>>_TRUE or FALSE?▌</sub>
</p>

<br>

![comfirm](/uploads/c92503ecb3578286ce2fb70cd83c306a/comfirm.gif)

<br>
<h4>> HOW TO IMPLEMENT</h4>

1. prompt에서 `enquirer-master/examples/confirm` 파일로 들어간다.<br>
2. **node _원하는 파일 이름_.js**을 입력하면 실행된다.

<h4>> OPTIONS</h4>
<sub>>>_각각 다른 옵션들이 들어가있는 confirm js 파일들</sub><br><br>

* **option-initial-false.js** - 기본적인 template 제공. toast의 값이 false로 초기화 되어 있다.
                            키보드로 y 또는 n를 입력하여 toast의 값이 true 또는 false로 되게 한다.<br>
* option-initial-true.js - toast의 값이 true로 초기화 되어 있다.
                           키보드로 y 또는 n를 입력해도 toast의 값은 초기값인 true로 된다. <br>
* option-styles.js - option-initial-true.js와 동일하나, 초기 설정으로 prompt에 뜨는 글자의 색   이 파란색이다. <br>
* prompt.js - 초기값이 설정 되어 있지 않다. 나머지는 위와 동일하다.<br>

<h4>> CODE</h4>
<h5>>>basic code</h5>

```js
'use strict';

const { Confirm } = require('enquirer');

const prompt = new Confirm({
  name: 'toast',
  message: 'Do you like toast?',
  initial: false
});

prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);

```

<h5>>>optional code</h5>
styles

```js
  styles: { primary: colors.blue },
  initial: true
```


<h1 align="center">Editable</h1>

<br>
<br>

<p align="center">
<b> user의 information을 수정</b><br>
<sub>>_수정하는 기능으로 사용자 정보수정 외에도 적용할 수 있는 부분이 많다.▌</sub>
</p>

<br>

![editableh](/uploads/1b292264f4fb91ab8cdc2ea4d7f83ed6/editableh.gif)

![editablev](/uploads/49ecd0482be1b376e1ef1b47e103da1d/editablev.gif)

<br>
<h4>> HOW TO IMPLEMENT</h4>

1. prompt에서 `enquirer-master/examples/editable` 파일로 들어간다.<br>
2. **node _원하는 파일 이름_.js**을 입력하면 실행된다.

<h4>> OPTIONS</h4>
<sub>>>_각각 다른 옵션들이 들어가있는 editable js 파일들</sub><br><br>

* **prompt-add-choice.js** - 기본적인 template 제공. user의 firstname/lastname 값을 수정한다.
                          firstname/lastname의 초기값은 각각 Jon/Schlinkert 이며, 이를 키보드 입력을 통해, 수정할 수 있다.<br>
* choices-headings.js - log-keypress.js와 header함수를 사용하여 누른 키 값을 return 한다.
                        user.author의 firstname/lastname/username/email의 값을 수정한다.
                        user.colors에 green/blue/Orange/purple 중 하나 혹은 여러개를 숫자 키보드를 눌러 값을 선택한다.<br>
* choices-headings.js - _:x:author/colors의 값이 제대로 들어가지 않아 undefined로 뜨는 문제가 생  김. : const {prompt}=require('enquirer');
      prompt({type: editable, ... })       ---->   const { Editable } = require('enquirer');
                                                   const  prompt = new Editable({...})
으로 수정하여 해결_<sub>editted by @jooyeon</sub><br>
* choices-validate.js - choices-headings.js와 유사하나, email 부분에 validate 함수를 사용하여   email의 값이 jon을 포함하면 invalid msg 가 뜨게 한다. <br>
* prompt.js - prompt-add-choice.js와 유사하나, email 부분에 validate 함수를 사용하여 email의 값이 @sellside.com을 포함하지 않으면 invalid msg가 뜨게 한다.<br>

<h4>> CODE</h4>
<h5>>>basic code</h5>

```js
'use strict';

const { Editable } = require('enquirer');

const prompt = new Editable({
  name: 'user',
  message: 'Please provide the following information:',
  choices: [
    {
      name: 'firstname',
      message: 'First Name',
      initial: 'Jon',
      editable: true
    },
    {
      name: 'lastname',
      message: 'Last Name',
      initial: 'Schlinkert',
      editable: true
    }
  ]
});

prompt
  .run()
  .then(value => console.log('ANSWERS:', value))
  .catch(console.error);

```

<h5>>>optional code</h5>

choices-headings

```js
const log = require('../log-keypress');
header() {
  return 'Keypress: ' + log(this) + ' ';
},
choices: [
    {
      name: 'author',
      role: 'heading',
      message: colors.underline.bold('Author information'),
      indicator: colors.cyan('?'),
      choices: [
      ..................
      ]
    },
    {
      name: 'colors',
      role: 'heading',
      message: colors.underline.bold('Favorite colors?'),
      indicator: colors.cyan('\n?'),
      choices: [
      ..................
      ]
    }
  ]
})

```
validate

```js
validate(value) {
          if (value.includes('jon')) {
            this.error = 'Invalid email address';
            return false;
          }
          this.error = void 0;
          return true;
        }
```

<h1 align="center">Enquirer</h1>

<br>
<br>

<p align="center">
<b>선택/수정을 통해 정보를 입력하고, 출력한다. </b>
<br>
<sub>>_로그인과 유사한 기능이 들어있다.▌</sub>
<br>

</p>

<br>


![e-p](/uploads/9137a4df0fbc4ae934369b0c88081606/e-p.gif)
![autofill](/uploads/24fa777ba9c11f3f24013ddffffe36c6/autofill.gif)
![class](/uploads/8d0bccf0d956bb736213d352e83cffa4/class.gif)
![standalone](/uploads/975bc56efd7cfe225509735b635d57c1/standalone.gif)
<br>



<h4>> HOW TO IMPLEMENT</h4>

1. prompt에서 `enquirer-master/examples/enquirer` 파일로 들어간다.<br>
2. **node _원하는 파일 이름_.js**을 입력하면 실행된다.

<h4>> OPTIONS</h4>
<sub>>>_각각 다른 옵션들이 들어가있는 enquirer js 파일들</sub><br><br>

* questions.js - colors / module: actor의 choices들 선택, comfirmed 선택(초기값이 true여서, 어떤 선택을 해도 true가 confirmed 값이 됨), twitter 값 입력, hidden 값 입력(invisible 타입으로, 키보드로 누르는 값이 창에 보이지 않음), keyword 입력, password 입력(password 타입으로, 창에 ***로 표시됨), color 선택(위의 colors애 있는 색들 중 하나 선택:숫자키보드로 입력해야 함), multicolor 선택(위의 colors에 있는 색들 중 다수 선택:숫자키보드로 입력해야 함)<br>
* questions.js - _:x:type: number 사용불가 오류_ ---> 지워서 오류 해결 <sub>editted by @jooyeon</sub><br>
* **enquirer-prompt.js** - questions.js 에 대한 값들을 출력한다.<br>
* option-autofill.js - 질문에 대한 name/username/email/phone 값을 출력한다.
                    autofill:'show'로 모든 질문들을 한꺼번에 prompt 창에 보여준다.
                    name과 username의 값은 고정되어 있다.<br>
* custom-prompt-class.js - Haikarate class를 생성: method: up/down/render
                        initial 값 설정 -> contructer: value가 초기값 || 0 ->
                        render: 질문 msg와 value가 출력메세지로 뜨게 함.
                        value값 수정 불가(initial값으로 고정)<br>
* custom-prompt-class.js - _:x:initial값을 설정헤주지 않아 undefined로 값이 뜸_ -> initail 설정.<sub>editted by @jooyeon</sub><br>
* custom-prompt-standalone.js - CustomPrompt class 생성: method: dispatch/delete/render
                             initial값 설정('') -> dispatch: value가 ''+입력값 ->
                             render: 질문 msg와 value가 출력메세지로 뜨게 함.<br>
* custom-prompt-standalone.js - 1.this.renderMessage() is not function 오류발생 --->
                                 질문과 답을 prompt창에 보여주기 위하여 위 함수 대신에
                                 this.write(`${this.state.message}: ${this.value}`); 사용.
                                 2. undefined와 입력값이 붙어서 출력 ---> 초기값을 공백으로 설정해줌.<sub>editted by @jooyeon</sub>
* custom-prompt-plugin-class - custom-prompt-standalone.js와 유사하나, CustomPrompt를 'custom-input'이라는 이름으로 enquirer에 register하여 type을 custom-input으로 사용한다.<br>
* custom-prompt-plugin-function: _:x:더 이상 지원하지 않아 뜨는 error가 발생 --> edit필요_<br>

<h4>> CODE</h4>
enquirer-prompt

```js
const { prompt } = require('enquirer');

prompt(require('./questions'))
  .then(answers => console.log('ANSWERS:', answers))
  .catch(console.error);

```
standalone

```js
const { Prompt } = require('enquirer');

class CustomPrompt extends Prompt {
  dispatch(ch) {
    if (!ch) return this.alert();
    this.value += ch;
    this.cursor += 1;
    this.render();
  }
  delete() {
    this.value = this.value.slice(0, -1);
    this.cursor = this.value.length;
    this.render();
  }
  render() {
    this.clear();
    this.write(`${this.state.message}: ${this.value}`);
  }
}

const prompt = new CustomPrompt({
  type: 'input',
  name: 'username',
  message: 'What is your username?',
  initial:''

});

prompt.run()
  .then(answer => console.log('ANSWER:', answer))
  .catch(console.error);
```
autofill

```js
const options = { autofill: 'show' };
const answers = { name: 'Jon Schlinkert', username: 'jonschlinkert' };
```

<h1 align="center">Select</h1>

<br>
<br>

<p align="center">
<b>제시된 보기 중에 하나를 고르면 그에 따른 답이 나오는 선택지.</b><br>
<sub>>_ 가장 흔하게 사용되고 다른 기능들과  융합하는 경우가 많다▌</sub>
</p>

<br>

<p align="center">
<img src="/img/select.gif" alt="Enquirer Select Prompt" width="1100" ><br>
</p>
<br>
<h3>> HOW TO IMPLEMENT</h3>

1. prompt에서 `enquirer-master/examples/select` 파일로 들어간다.<br>
2. **node _원하는 파일 이름_.js**을 입력하면 실행된다.

<h3>> OPTIONS</h3>
<sub>>>_각각 다른 옵션들이 들어가있는 select.js 파일들</sub><br><br>

* choices-separators.js - 리스트를 나누어 표시할 수 있다.<br>
* option-elements.js - pointer를 emoji 🍬🍎👄로 대신한다.<br>
* option-footer.js - 리스트 밑에 추가 코멘트를 달 수 있다. 
E.x) (Scroll up and down to reveal more choices)<br>
:warning: 이 코드에는 footer의 예시를 보여준 것뿐 실제로 scroll한다고 다른 보기들이 나타나진않는다.<br>
* option-format.js - 리스트를 고를 때 어떤 보기를 골랐는지 실시간으로 보여준다.<br>
* option-header-footer.js - footer와 header가 존재하며 리스트 앞뒤로 코멘트가 있다. <br>
* option-header.js - 리스트 앞에 추가 코멘트를 달 수 있다. <br>
* option-hint.js - hint를 보여줄 수 있다. 
<sub>changed name from option-separator-color-state.js to option-hint by @summer213</sub><br>
* option-limit.js - 보여지는 리스트의 갯수를 정할 수 있다. 밑으로 계속 내리면 다른 보기들이 보여짐. _Default number = 3_<br>
* option-multiple-footer.js - space 바를 눌러 보기를 선택할 수 있고, 사용법을 footer로 보여준다. 
<sub>made by @summer213</sub><br>
* option-multiple.js - space 바를 눌러 보기를 여러개 선택할 수 있다. <br>
* option-pointer.js - pointer의 이미지를 바꿀 수 있다. <br>
* option-prefix.js - 질문 앞에 emoji를 추가해 상태에 따라 다른 emoji를 넣을 수 있다. <br>
* option-scroll-false.js - scroll이 막아져 있다.<br>
* option-symbols.js - 리스트의 각 보기 앞에 emoji를 넣을 수 있다. <br>
* option-theme.js - 리스트의 각 보기 앞에 emioji를 넣을 수 있고, 답변에 각 선택에 따라 다른 답을 출력할 수 있다.<br>
* **prompt.js** - 가장 기본적인 코드가 들어있는 파일<br>
* select-long.js - footer, header, 그리고 limit 모두 포함되어 있는 파일. scroll 할 때마다 선택된 보기에 따라 색이 변한다.<br>
* select-values.js - 답변에 각 선택에 따라 다른 답을 출력할 수 있다.

<h3>> CODE</h3>
<h5>>>basic code</h5>

```js
const { Select } = require('enquirer');

const prompt = new Select({
  name: 'color',
  message: 'Pick a flavor',
  choices: ['apple', 'grape', 'watermelon', 'cherry', 'orange']
});
```

<h5>>>optional code</h5>
footer

```js
footer: colors.blue('(Scroll up and down to reveal more choices)')
```

symbols

```js
symbols: {
    pointer: {
        on: () => frame(rhythm, i)('❤'),
        off: ' '
    }
}
```
 
styles

```js
styles: { primary: colors.yellow }
```

separator

```js
separator(state) {
    let { middot, ellipsis } = prompt.symbols;
    return colors.dim(state.status === 'submitted' ? middot : ellipsis);
}
  ```

pointer

```js
pointer(state, choice, i) {
    return state.index === i ? ['🍬', '🍎', '👄', '🖕'][i] : '  ';
}
```

prefix

```js
prefix(state) {
    switch (state.status) {
      case 'pending': return '🎃';
      case 'cancelled': return '⚰️ ';
      case 'submitted': return '💀';
    }
}
```

<h1 align="center">Snippet</h1>

<br>
<br>

<p align="center">
<b>기본적으로 주어지는 temaplate 채우고 저장하는 기능</b><br>
<sub>>_ 웹이나 코드의 정보를 저장하는데 유용하다. 기본적인 template을 지정해주면 같은 변수가 들어가야하는 공간에는 동시에 내용이 채워진다. 추가적으로 완성도또한 표시 가능하다▌</sub>
</p>

<br>

<p align="center">
<img src="/img/snippet.gif" alt="Enquirer Snippet Prompt" width="1100"><br>
</p>

<h3>> HOW TO IMPLEMENT</h3>

1. prompt에서 `enquirer-master/examples/snippet` 파일로 들어간다.<br>
2. **node _원하는 파일 이름_.js**을 입력하면 실행된다.

<h3>> OPTIONS</h3> 
<sub>>>_각각 다른 옵션들이 들어가있는 snippet.js 파일들</sub><br><br>

* form-template.js - 기본적인 template 제공.<br>
* json-fillin.js - package.json의 template을 제공.<br>
* option-defaults.js - 각 옵션의 default 값들이 정해져 있다.<br>
* option-fields-format.js - 저장되는 format을 직접 정해줄 수 있다.<br>
* ~~option-fields-validate.js~~ - field 속에 변수들이 가능한지 아닌지를 설정할 수 있다.
_:x: `semver` module error 때문에 변수가 가능한 변수인지 아닌지 검사할 때 오류가 난다. Edit 필요_ <br>
* option-fields.js - field 속에 변수들이 가능한지 아닌지를 설정할 수 있다.<br>
* option-format.js - 변수들을 작성할 때 어떻게 작성하는지 보여준다.<br>
* option-initial.js - 변수들을 미리 초기화시킬 수 있다.<br>
* option-items.js - 설정해주는 변수에게 각각 제한하는 설정을 할 수 있다.<br>
* ~~option-limit.js~~<br>
* option-newline.js - 질문 뒤에 새로운 코멘트를 쓸 수 있다.<br>
* option-required-array.js - 꼭 필요한 변수들을 설정할 수 있다. 설정된 리스트를 적지 않으면 저장이 되지 않는다.<br>
* option-required-true.js - required list값이 true로 설정되어 있는데, 모든 변수들을 입력하지 않으면 저장되지 않는다.<br>
* option-template-fn.js -  answer.rendered 정보를 추가로 제공해준다.<br>
* option-validate.js - defaults, required list, initial 그리고 validate가 포함된다. _:x: `semver` module error 때문에 변수가 가능한 변수인지 아닌지 검사할 때 오류가 난다. Edit 필요_ <br>
* option-values.js - package에 저장되어 있는 정보를 불러와 initialise 시킨다. <br>
* **prompt.js** - 가장 기본적인 코드가 들어있는 파일 _:x: `semver` module error 때문에 변수가 가능한 변수인지 아닌지 검사할 때 오류가 난다. Edit 필요_<br>
* snippet-async-composition.js - multiple select에서 사용한 것처럼 spacebar를 이용하여 설정하고 싶은 리스트를 select하고 순서를 설정한다. 그리고 변수에 입력값을 넣는다. select, sort, 그리고 snippet가 병합된 코드. :heavy_exclamation_mark: 오류 설정이 미흡하다. Edit 필요.<sub>editted by @summer213</sub><br> 
* **yaml-template.js** - 가장 기본적인 코드가 들어있는 파일. prompt.js 대신에 사용하는 것이 좋다.

<h3>> CODE</h3>
<h5>>>basic code</h5>

```js
const prompt = new Snippet({
  name: 'username',
  message: 'Fill out the fields in package.json',
  values: {
    name: 'awesome-lib'
  },
  styles: {
    primary: colors.blue
  },
  template: `
  name: "#{name}"
  description: "#{description:This is a great project}"
  version: "#{version}"
  homepage: "https://github.com/#{username}/#{name}"
  author: "#{author_name} (https://github.com/#{username})"
  repository: "#{username}/#{name}"
  bugs:
    url: "https://github.com/#{username}/#{name}/issues"
  license: "#{license:MIT}"
  scripts:
    test: mocha
  keywords:

`
});
```

<h5>>>optional code</h5>
defaults

```js
defaults: { name: 'awesome-lib', version: '0.1.0', license: 'MIT' }
```

validate

```js
fields: [
  {
    name: 'version',
    validate(value, state, item, index) {
      if (item && item.name === 'version' && !semver.valid(value)) {
        return colors.red('version should be a valid semver value');
      }
      return true;
    },
  },
  {
    name: 'name',
    validate(value) {
      return value !== '' && value !== 'Jon';
    }
  },
  {
    name: 'username',
    validate(value) {
      return value !== '' && value !== 'jon';
    }
  },
  {
    name: 'license',
    validate(value) {
      return value !== 'MIT';
    }
  }
]
```
format
```js
format(value) {
  return colors.blue(value);
},
```
initial
```js
initial: 'description'
```
required
```js
required: ['name', 'version', 'description']
```

<h1 align="center">Sort</h1>

<br>
<br>

<p align="center">
<b>리스트를 원하는대로 정렬할 수 있는 기능.</b><br>
<sub>>_ 직접 조작하여 리스트를 정렬할 수 있다.▌</sub>
</p>

<br>

<p align="center">
<img src="/img/sort.gif" alt="Enquirer Sort Prompt" width="1100"><br>
</p>


<h4>> HOW TO IMPLEMENT</h4>

1. prompt에서 `enquirer-master/examples/sort` 파일로 들어간다.<br>
2. **node _원하는 파일 이름_.js**을 입력하면 실행된다.

<h4>> OPTIONS</h4>
<sub>>>_각각 다른 옵션들이 들어가있는 sort js 파일들</sub><br><br>

* prompt-ranking.js - list에 number가 들어가 ranking할 수 있다.<br>
* **prompt.js** - 가장 기본적인 코드가 들어있는 파일<br>
<sub>editted by @ahnppeng (hint section)</sub>

<h4>> CODE</h4>
<h5>>>basic code</h5>

```js
const prompt = new Sort({
  name: 'colors',
  message: 'Sort the colors in order of preference',
  hint: 'Top is best, bottom is worst (to sort, Shift + Direction Key + Space)',
  numbered: true,
  choices: ['red', 'white', 'green', 'cyan', 'yellow'].map(n => ({
    name: n,
    message: colors[n](n)
  }))
});
```

<h5>>>optional code</h5>
number

```js
numbered: true
```


<h1 align="center">String</h1>

<br>
<br>

<p align="center">
<b>string을 입력하는 입력기.</b><br>
<sub>>_각 질문에 답하여 대답을 저장하여 보여준다▌</sub>
</p>

<br>

<p align="center">
<img src="/img/string.gif" alt="Enquirer String Prompt" width="1100"><br>
</p>


<h4>> HOW TO IMPLEMENT</h4>

1. prompt에서 `enquirer-master/examples/string` 파일로 들어간다.<br>
2. **node _원하는 파일 이름_.js**을 입력하면 실행된다.

<h4>> OPTIONS</h4>
<sub>>>_각각 다른 옵션들이 들어가있는 select js 파일들</sub><br><br>

* option-hint.js - 질문 옆에 hint를 주어 무엇을 해야할 지 알려준다.<br>
* option-initial-hint.js - initial string과 hint 모두 있는 코드.<br>
* option-initial.js - 질문자가 원하고자하는 답을 미리 보여주며 다른 답을 쓰면 즉시 사라지지만, 그대로 쓰면 initial string이 그대로 보여진다.<br>
* **prompt.js** - 가장 기본적인 코드가 들어있는 파일<br>

<h4>> CODE</h4>
<h5>>>basic code</h5>

```js
const { StringPrompt } = require('enquirer');

const prompt = new StringPrompt({
  message: 'What is your username?'
});
```

<h5>>>optional code</h5>
initial & hint

```js
initial: 'chokyungsun',
hint: '...start typing'
```

<h1 align="center">Survey</h1>

<br>
<br>

<p align="center">
<b>보기 문항을 준 후 질문에 답할 수 있는 척도 형식의 설문지. </b><br>
<sub>>_ 설문 조사 형식을 이용하여 prompt에서 바로 답하고 바로 그에 대한 대답을 출력하는 기능▌</sub>
</p>

<br>

<p align="center">
<img src="/img/survey.gif" alt="Enquirer Survey Prompt" width="1100"><br>
</p>


<h4>> HOW TO IMPLEMENT</h4>

1. prompt에서 `enquirer-master/examples/survey` 파일로 들어간다.<br>
2. **node _원하는 파일 이름_.js**을 입력하면 실행된다.

<h4>> OPTIONS</h4>
<sub>>>_각각 다른 옵션들이 들어가있는 survey.js 파일들</sub><br><br>

* **prompt.js** - 가장 기본적인 코드가 들어있는 파일<br>

<h4>> CODE</h4>

```js
const prompt = new Survey({
  name: 'experience',
  message: 'Please rate your experience',
  choices: [
    {
      name: 'interface',
      message: 'The website has a friendly interface.'
    },
    {
      name: 'navigation',
      message: 'The website is easy to navigate.'
    },
    {
      name: 'images',
      message: 'The website usually has good images.'
    },
    {
      name: 'upload',
      message: 'The website makes it easy to upload images.'
    },
    {
      name: 'colors',
      message: 'The website has a pleasing color palette.'
    }
  ]
});
```
<h1 align="center">Form</h1>

<br>
<br>

<p align="center">
<b>터미널에서 여러가지 입력을 도와주는 기능.</b><br>
<sub>>_ 여러가지 입력의 형태를 다양하게 설정할 수 있으며, 무엇을 입력할지 사전에 수정이 가능하다.▌</sub>
</p>

<br>

<p align="center">
<img src="/img/form.gif" alt="Enquirer Form Prompt" width="1100"><br>
</p>


<h4>> HOW TO IMPLEMENT</h4>

1. prompt에서 `enquirer-master/examples/form` 폴더로 들어간다.<br>
2. **node _원하는 파일 이름_.js**을 입력하면 실행된다.

<h4>> OPTIONS</h4>
<sub>>>_각각 다른 옵션들이 들어가있는 form js 파일들</sub><br><br>

* **prompt.js** - 가장 기본적인 코드가 들어있는 파일<br>
* async-choices.js - prompt 처럼 모든 항목이 바로 나오지 않고, 입력을 완료할때마다 새로 입력할 부분이 추가되는 기능이 있는 파일.<br>
* choice-format.js - 기타 추가적인 기능이 있는 파일.<br>

<h4>> CODE</h4>
<h5>>>basic code</h5>

```js
'use strict';

const { Form } = require('enquirer');

const prompt = new Form({
  name: 'user',
  message: 'Please provide the following information:',
  choices: [
    { name: 'firstname', message: 'First Name', initial: 'Jon' },
    { name: 'lastname', message: 'Last Name', initial: 'Schlinkert' },
    { name: 'username', message: 'GitHub username', initial: 'jonschlinkert' }
  ]
});

prompt.run()
  .then(value => console.log('ANSWERS:', value))
  .catch(console.error);
```
<h1 align="center">Fun</h1>

<br>
<br>

<p align="center">
<b>여러가지 재미있는 기능</b><br>
<sub>>_ 일종의 게임의 역할을 한다.▌</sub>
</p>

<br>

<p align="center">
<img src="/img/fun.gif" alt="Enquirer Form Prompt" width="1100"><br>
</p>


<h4>> HOW TO IMPLEMENT</h4>

1. prompt에서 `enquirer-master/examples/fun` 폴더로 들어간다.<br>
2. **node _원하는 파일 이름_.js**을 입력하면 실행된다.

<h4>> OPTIONS</h4>
<sub>>>_각각 다른 옵션들이 들어가있는 fun js 파일들</sub><br><br>

* countdown.js - 5초안에 답을 써야하는 기능이 있는 파일.<br>
* easter-egg.js - 스페이스 바를 누르면 최종 반영이 됨. 해당 기능을 이용하려면 npm install yosay 라는 명령어를 통해 추가적인 모듈을 설치해야 한다.<br>
* heartbeat.js  - 선택지가 여러개가 제공되는데, 스페이스바를 누르고 난 다음 엔터키를 눌러야 최종 반영이됨.<br>
* heartbeats.js  - heartbeat 파생버전.<br>
* multispinner.js - 여러가지 선택지가 제공됨. <br>
* play.js - 해당 기능을 실행하면 터미널이 더이상 동작하지 않음 사용불가<br>
* play-steps.js - 해당 기능을 실행하면 터미널이 더이상 동작하지 않음 사용불가 <br>
* record.js - 키워드를 타이핑 하면 해당 키워드가 있는 단어만 필터링됨. 해당 기능을 이용하려면 npm install data-store 라는 명령어를 통해 추가적인 모듈을 설치해야 한다.<br>

<h4>> CODE</h4>
<h5>>>basic code</h5>

```js
const { dim, green, red, yellow } = require('ansi-colors');
const { Input } = require('enquirer');
const color = t => t >= 7 ? green(t) : t > 3 ? yellow(t) : red(t);
let time = 5;
let int;

const prompt = new Input({
  name: 'name',
  header() {
    return `${dim('You have')} ${color(time)} ${dim('seconds left to answer!')}`;
  },
  separator() {
    return ''; // hide separator
  },
  message(state) {
    if (state.submitted && !state.input) return 'Really? Your own name?';
    return state.submitted ? 'Well done,' : 'What is your full name!!!';
  }
});

prompt.once('close', () => clearInterval(int));
prompt.once('run', () => {
  int = setInterval(() => {
    if (time-- === 0) {
      prompt.state.input = '';
      prompt.cancel();
    } else {
      prompt.render();
    }
  }, 1000);
});

prompt.run()
  .catch(console.error);
```

<h1 align="center">Input</h1>

<br>
<br>

<p align="center">
<b>사용자의 입력에 대한 편의성을 증진시키는 기능들</b><br>
<sub>>_ hint, history 등 다양한 기능 포함.▌</sub>
</p>

<br>

<p align="center">
<img src="/img/input.gif" alt="Enquirer Input Prompt" width="1100"><br>
</p>


<h4>> HOW TO IMPLEMENT</h4>

1. prompt에서 `enquirer-master/examples/input` 폴더로 들어간다.<br>
2. **node _원하는 파일 이름_.js**을 입력하면 실행된다.

<h4>> OPTIONS</h4>
<sub>>>_각각 다른 옵션들이 들어가있는 input js 파일들</sub><br><br>

* option-header-footer.js  <br>
* option-header-footer-initial.js  <br>
* option-hint.js  - 입력에 대한 힌트를 제공한다.<br>
* option-history.js   - 이전에 입력했던 문자열이 표시되어 이전 기록을 확인할 수 있다.<br>
* option-initial.js  <br>
* option-multiline.js  - 엔터를 연달아 두번 누르기 이전에는 계속해서 라인을 바꿔가며 문자열 입력이 가능하다. 엔터를 연달아 두번 누르면 지금까지 입력하였던 결과들이 출력된다.<br>
* option-state.js - 현재 입력되는 문자열에 대한 정보가 실시간으로 아래에 표시된다.<br>
* option-styles.js - 입력을 하는 도중에는 파란색이다가, 입력이 완료되면 결과물이 노란색으로 표시되며 색상은 변경 가능하다.<br>
* option-symbols.js -입력을 하는 도중에는 노란색이다가, 입력이 완료되면 결과물이 파란색으로 표시되며 색상은 변경 가능하다.<br>
* prompt.js - 가장 기본적인 기능.<br>


<h4>> CODE</h4>
<h5>>>basic code</h5>

```js
'use strict';

const { Input } = require('enquirer');
const prompt = new Input({
  message: 'What is your username?',
  initial: 'jonschlinkert'
});

prompt.run()
  .then(answer => console.log('ANSWER:', answer))
  .catch(console.log);



```
<h1 align="center">Invisible</h1>

<br>
<br>

<p align="center">
<b>사용자가 입력하는 문자열의 출력을 방지한다.</b><br>
<sub>>_ 입력이 끝나고 난 후에 결과물은 보여진다.▌</sub>
</p>

<br>

<p align="center">
<img src="/img/invisible.gif" alt="Enquirer Invisible Prompt" width="1100"><br>
</p>


<h4>> HOW TO IMPLEMENT</h4>

1. prompt에서 `enquirer-master/examples/invisible` 폴더로 들어간다.<br>
2. **node _원하는 파일 이름_.js**을 입력하면 실행된다.

<h4>> OPTIONS</h4>
<sub>>>_각각 다른 옵션들이 들어가있는 invisible js 파일들</sub><br><br>

* option-separator.js - 입력이 시작되면 입력 시작부분의 색이 바뀌며 입력이 되고 있다는것을 알려준다.<br>
* prompt.js - 가장 기본적인 기능.<br>


<h4>> CODE</h4>
<h5>>>basic code</h5>

```js
'use strict';

const { Invisible } = require('enquirer');
const prompt = new Invisible({
  name: 'secret',
  message: 'What is your secret?'
});

prompt.run()
  .then(answer => console.log('Answer:', { secret: answer }))
  .catch(console.error);




```
<h1 align="center">List</h1>

<br>
<br>

<p align="center">
<b>사용자가 입력한 부분을 구별하여 출력한다.</b><br>
<sub>>_ comma 같은 구분자를 기준으로 구별하여 출력한다.▌</sub>
</p>

<br>

<p align="center">
<img src="/img/list.gif" alt="Enquirer List Prompt" width="1100"><br>
</p>


<h4>> HOW TO IMPLEMENT</h4>

1. prompt에서 `enquirer-master/examples/list` 폴더로 들어간다.<br>
2. **node _원하는 파일 이름_.js**을 입력하면 실행된다.

<h4>> OPTIONS</h4>
<sub>>>_각각 다른 옵션들이 들어가있는 list js 파일들</sub><br><br>


* prompt.js - 가장 기본적인 기능.<br>


<h4>> CODE</h4>
<h5>>>basic code</h5>

```js
'use strict';

const { List } = require('enquirer');
const prompt = new List({
  name: 'keywords',
  message: 'Type comma-separated keywords'
});

prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);





```


