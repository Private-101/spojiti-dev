
/*
const error = {
    length: 'Length should be a valid positive number',
    password: 'Password should be a valid string',
    invalidPlugin: 'Plugin should be a valid function',
  };

const regex = {
    digits: new RegExp('(\\d.*)'),
    letters: new RegExp('([a-zA-Z].*)'),
    symbols: new RegExp('([`~\\!@#\\$%\\^\\&\\*\\(\\)\\-_\\=\\+\\[\\\{\\}\\]\\\\\|;:\\\'",<.>\\/\\?€£¥₹§±].*)'),
    spaces: new RegExp('([\\s].*)')
  };



  const regex = {
    digits: /\d+/,
    letters: /[a-z]+/i,
    symbols: /[!@#$%^&*()]+/,
    spaces: /\s+/,
  }; 
  
  function _process(regexp: RegExp, repeat?: number): boolean {
    if (repeat && repeat > 1) {
      const parsedRepeat = parseInt(repeat.toString(), 10);
      return new RegExp(regexp.source + '{' + parsedRepeat + ',}').test(this.password) === this.positive;
    }
    return new RegExp(regexp.source).test(this.password) === this.positive;
  }
  
  export const PasswordValidator = {
  
    positive: true,
    password: "",
  
    not(symbol?: RegExp): boolean {
      this.positive = false;
      if (symbol) {
        return _process.call(this, symbol);
      }
      return true;
    },
  
    has(symbol?: RegExp): boolean {
      this.positive = true;
      if (symbol) {
        return _process.call(this, symbol);
      }
      return true;
    },
  
    is(): boolean {
      this.positive = true;
      return true;
    },
  
    min(num: number): boolean {
      return this.password.length >= num;
    },
  
    max(num: number): boolean {
      return this.password.length <= num;
    },
  
    digits(repeat?: number): boolean {
      return _process.call(this, regex.digits, repeat);
    },
  
    letters(repeat?: number): boolean {
      return _process.call(this, regex.letters, repeat);
    },
  
    uppercase(repeat?: number): boolean {
      if (repeat && repeat > 1) {
        let characterIndex = 0;
        let upperCaseLetters = 0;
  
        while ((upperCaseLetters < repeat) && (characterIndex < this.password.length)) {
          const currentLetter = this.password.charAt(characterIndex);
          if (currentLetter !== currentLetter.toLowerCase()) {
            upperCaseLetters++;
          }
          characterIndex++;
        }
  
        return (upperCaseLetters === repeat) === this.positive;
      }
      return (this.password !== this.password.toLowerCase()) === this.positive;
    },
  
    lowercase(repeat?: number): boolean {
      if (repeat && repeat > 1) {
        let characterIndex = 0;
        let lowerCaseLetters = 0;
  
        while ((lowerCaseLetters < repeat) && (characterIndex < this.password.length)) {
          const currentLetter = this.password.charAt(characterIndex);
          if (currentLetter !== currentLetter.toUpperCase()) {
            lowerCaseLetters++;
          }
          characterIndex++;
        }
  
        return (lowerCaseLetters === repeat) === this.positive;
      }
      return (this.password !== this.password.toUpperCase()) === this.positive;
    },
  
    symbols(repeat?: number): boolean {
      return _process.call(this, regex.symbols, repeat);
    },
  
    spaces(repeat?: number): boolean {
      return _process.call(this, regex.spaces, repeat);
    },
  
    oneOf(list: string[]): boolean {
      return list.indexOf(this.password) >= 0 === this.positive;
    },
  
    usingPlugin(fn: (password: string) => boolean): boolean {
      try {
        const result = fn.call({}, this.password);
        return Boolean(result) === this.positive;
      } catch (err) {
        return false;
      }
    }
  };
  */