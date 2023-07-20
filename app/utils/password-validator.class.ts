
const regex = {
    digits: new RegExp('(\\d.*)'),
    letters: new RegExp('([a-zA-Z].*)'),
    symbols: new RegExp('([`~\\!@#\\$%\\^\\&\\*\\(\\)\\-_\\=\\+\\[\\{\\}\\]\\\\|;:\\\'",<.>\\/\\?€£¥₹§±].*)'),
    spaces: new RegExp('([\\s].*)')
  };
  
  /* The PasswordValidator class is a TypeScript class that provides methods to validate passwords
  based on various criteria. */
  class PasswordValidator {
    /* The line `private positive: boolean = false;` is declaring a private class property named
    `positive` with a default value of `false`. This property is used to determine whether the
    password validation should be positive (true) or negative (false). It is used internally by the
    methods `not()`, `has()`, and `is()` to set the validation mode. */
    private positive: boolean = false;
    /* The line `private _password: string = '';` is declaring a private class property named
    `_password` with a default value of an empty string (`''`). This property is used to store the
    password that will be validated by the methods of the `PasswordValidator` class. It is marked as
    private to ensure that it can only be accessed and modified within the class. */
    private _password: string = '';
  
    /* The `constructor(password: string)` is a constructor method of the `PasswordValidator` class. It
    is called when a new instance of the class is created. */
    constructor(password?: string) {
      this.positive = true;
      this._password = password || '';
    };
  
    /**
     * The function checks if a regular expression matches a given password, with an optional repeat
     * parameter.
     * @param {RegExp} regexp - The `regexp` parameter is a regular expression pattern that is used to
     * test against the `_password` property. It can be any valid regular expression pattern, such as
     * `/^[a-zA-Z0-9]+$/` to match alphanumeric characters.
     * @param {number} [repeat] - The `repeat` parameter is an optional parameter that specifies the
     * number of times the regular expression pattern should be repeated. It is a number that
     * represents the minimum number of repetitions.
     * @returns The method `_process` returns a boolean value.
     */
    private _process(regexp: RegExp, repeat?: number) {
      if (repeat && repeat > 1) {
        const parsedRepeat = parseInt(repeat.toString(), 10);
        return new RegExp(regexp.source + '{' + parsedRepeat + ',}').test(this._password) === this.positive;
      }
      this.positive = new RegExp(regexp.source).test(this._password) === this.positive;
      return this;
    }
  
    /**
     * The function checks if a symbol is not present and returns a boolean value.
     * @param {RegExp} [symbol] - The "symbol" parameter is a regular expression (RegExp) that is
     * optional.
     * @returns If the `symbol` parameter is truthy (not null, undefined, 0, false, or an empty
     * string), then the method will call the `_process` method with the `symbol` parameter and return
     * the result. Otherwise, it will return `true`.
     */
    not(symbol?: RegExp) {
      this.positive = false;
      if (symbol) {
        return this._process(symbol);
      }
      this.positive = true; 
      return this;
    }
  
    has(symbol?: RegExp) {
      this.positive = true;
      if (symbol) {
        return this._process(symbol);
      }
      this.positive = true; 
      return this;
    }
  
    is() {
      this.positive = true;
      return this;
    }
  
    min(num: number) {
      this.positive = this._password.length >= num;
      return this;
    }
  
    max(num: number) {
      this.positive =  this._password.length <= num;
      return this;
    }
  
    digits(repeat?: number) {
      return this._process(regex.digits, repeat);
    }
  
    letters(repeat?: number) {
      return this._process(regex.letters, repeat);
    }
  
    uppercase(repeat?: number) {
      if (repeat && repeat > 1) {
        let characterIndex = 0;
        let upperCaseLetters = 0;
  
        while ((upperCaseLetters < repeat) && (characterIndex < this._password.length)) {
          const currentLetter = this._password.charAt(characterIndex);
          if (currentLetter !== currentLetter.toLowerCase()) {
            upperCaseLetters++;
          }
          characterIndex++;
        }
  
        return (upperCaseLetters === repeat) === this.positive;
      }
      return (this._password !== this._password.toLowerCase()) === this.positive;
    }
  
    lowercase(repeat?: number) {
      if (repeat && repeat > 1) {
        let characterIndex = 0;
        let lowerCaseLetters = 0;
  
        while ((lowerCaseLetters < repeat) && (characterIndex < this._password.length)) {
          const currentLetter = this._password.charAt(characterIndex);
          if (currentLetter !== currentLetter.toUpperCase()) {
            lowerCaseLetters++;
          }
          characterIndex++;
        }
  
        return (lowerCaseLetters === repeat) === this.positive;
      }
      return (this._password !== this._password.toUpperCase()) === this.positive;
    }
  
    symbols(repeat?: number) {
      return this._process(regex.symbols, repeat);
    }
  
    spaces(repeat?: number) {
      return this._process(regex.spaces, repeat);
    }
  
    oneOf(list: string[]) {
      return list.indexOf(this._password) >= 0 === this.positive;
    }
  
    usingPlugin(fn: (password: string) => boolean) {
      try {
        const result = fn.call({}, this._password);
        return Boolean(result) === this.positive;
      } catch (err) {
        return false;
      }
    }
  }
  
  export default PasswordValidator;

  /*
  This function `validationMessages` is an exported constant in JavaScript that returns validation messages for some method. 

Let's break down its functionalities:

1. `export`: This keyword is used to make the function `validationMessages` available for import by other files or modules.

2. `const validationMessages`: It's declaring a constant named `validationMessages`.

3. `function (method, arg, inverted: boolean = false)`: This is the function declaration that takes three parameters. 

   - `method`: This is likely a string that refers to a validation method.
   
   - `arg`: This argument likely gives context for the validation method or the input to be validated.
   
   - `inverted: boolean = false`: The third argument is a boolean `inverted` with a default value of `false`. It seems that it's used to choose between positive and negative messages.

4. `const msgList = inverted ? negativeMessages : positiveMessages;`: This line is using a ternary operator to choose between two variables, `negativeMessages` and `positiveMessages`, based on the `inverted` argument. If `inverted` is true, it chooses `negativeMessages`, else it chooses `positiveMessages`. Both of these are assumed to be objects defined somewhere else in the code and they probably contain different messages for different methods.

5. `return msgList[method] && msgList[method](arg);`: This is the final line of the function and it's a bit tricky. 

   - `msgList[method]`: This is trying to access a property of the `msgList` object using the `method` parameter. 

   - `msgList[method](arg)`: This is invoking the function that's a property of `msgList` object. It assumes that `msgList[method]` is a function and it's being called with `arg` as a parameter.

   - `msgList[method] && msgList[method](arg)`: It's using a logical `AND` operator. This operator returns the second operand if the first operand is truthy, else it returns the first operand. In this case, if `msgList[method]` exists (is truthy), it calls `msgList[method](arg)` and returns the result, otherwise it returns `msgList[method]` which will be falsy (likely `undefined`).

So overall, this function seems to be returning a message (possibly a string) that is specific to a validation method and context, and whether the message is positive or negative is determined by the `inverted` argument.
*/

  type MessageFunction = (num: number) => string;

  interface IMessagesType {
    [key: string]: MessageFunction
  };

  export const validationMessages = function (method: keyof typeof positiveMessages | keyof typeof negativeMessages, arg: number & number[] & RegExp & { name: string; }, inverted: boolean = false) {
    const msgList = inverted ? negativeMessages : positiveMessages;
    return msgList[method] && msgList[method](arg);
  };

  const positiveMessages = {
    min: (num: number) => `The string should have a minimum length of ${num} character${pluralify(num)}`,
    max: (num: number) => `The string should have a maximum length of ${num} character${pluralify(num)}`,
    letters: (num = 1) => `The string should have a minimum of ${num} letter${pluralify(num)}`,
    digits: (num = 1) => `The string should have a minimum of ${num} digit${pluralify(num)}`,
    uppercase: (num = 1) => `The string should have a minimum of ${num} uppercase letter${pluralify(num)}`,
    lowercase: (num = 1) => `The string should have a minimum of ${num} lowercase letter${pluralify(num)}`,
    symbols: (num = 1) => `The string should have a minimum of ${num} symbol${pluralify(num)}`,
    spaces: (num = 1) => `The string should have a minimum of ${num} space${pluralify(num)}`,
    oneOf: (list: number[]) => `The string should be ${list.length > 1 ? `one of ${list.slice(0, -1).join(', ')} and ` : ''}${list[list.length - 1]}`,
    has: (pattern: string | RegExp) => `The string should have pattern '${pattern}'`,
    not: (pattern: string | RegExp) => `The string should not have pattern '${pattern}'`,
    usingPlugin: (fn: { name: string; }) => `The string should not violate ${fn.name || 'plugin'}`,
  };
  
  const negativeMessages = {
    min: (num: number) => `The string should have a maximum length of ${num} character${pluralify(num)}`,
    max: (num: number) => `The string should have a minimum length of ${num} character${pluralify(num)}`,
    letters: (num = 0) => `The string should ${num === 0 ? 'not have' : `have a maximum of ${num}`} letter${pluralify(num)}`,
    digits: (num = 0) => `The string should ${num === 0 ? 'not have' : `have a maximum of ${num}`} digit${pluralify(num)}`,
    uppercase: (num = 0) => `The string should ${num === 0 ? 'not have' : `have a maximum of ${num}`} uppercase letter${pluralify(num)}`,
    lowercase: (num = 0) => `The string should ${num === 0 ? 'not have' : `have a maximum of ${num}`} lowercase letter${pluralify(num)}`,
    symbols: (num = 0) => `The string should ${num === 0 ? 'not have' : `have a maximum of ${num}`} symbol${pluralify(num)}`,
    spaces: (num = 0) => `The string should ${num === 0 ? 'not have' : `have a maximum of ${num}`} space${pluralify(num)}`,
    oneOf: (list: number[]) => `The string should not be ${list.length > 1 ? `one of ${list.slice(0, -1).join(', ')} and ` : ''}${list[list.length - 1]}`,
    has: (pattern: string | RegExp) => `The string should not have pattern '${pattern}'`,
    not: (pattern: string | RegExp) => `The string should have pattern '${pattern}'`,
    usingPlugin: (fn: { name: string; }) => `The string should violate ${fn.name || 'plugin'}`,
  };
  
  function pluralify(num: number) {
    return num === 1 ? '' : 's';
  }
  