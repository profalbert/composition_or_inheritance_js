// Наследование — это создание новых «классов» на основе
// существующих (родительских), при этом свойства и функциональность
// родительского класса заимствуются новым классом.

// Отличия композиции и наследования: основное отличие
// между ними состоит в том, что композиция позволяет
// переиспользовать код без его расширения.
// Наследование при этом требует расширения существующего класса.

class Programmer {
  constructor(name) {
    this.name = name
  }

  code() {
    console.log(`${this.name} is coding...`)
  }
}

class Frontend extends Programmer {
  react() {
    console.log(`${this.name} is creating React app...`)
  }
}

class Backend extends Programmer {
  nodejs() {
    console.log(`${this.name} is creating Node.js app...`)
  }
}

class Fullstack extends Frontend {
  nodejs() {
    // идет дублирование кода из класса Backend - bad practice
    console.log(`${this.name} is creating Node.js app...`)
  }
}

const programmer = new Programmer('Programmer')
programmer.code()

const frontend = new Frontend('Frontend')
frontend.code()
frontend.react()

const backend = new Backend('Backend')
backend.code()
backend.nodejs()

const fullstack = new Fullstack('Fullstack')
fullstack.code()
fullstack.react()
fullstack.nodejs()
