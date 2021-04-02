// Композиция - создание сложной функциональности
// за счет объединения более простых функций.
// В некотором смысле, композиция - это вложение функций,
// каждая из которых передает свой результат в качестве
// входных данных для другой функции.

// Отличия композиции и наследования: основное отличие
// между ними состоит в том, что композиция позволяет
// переиспользовать код без его расширения.
// Наследование при этом требует расширения существующего класса.

const createProgrammer = (name) => {
  const programmer = { name2 }
  return {
    ...programmer,
    ...canCode(programmer),
  }
}

const canCode = ({ name }) => {
  return {
    code: () => console.log(`${name} is coding...`),
  }
}

const canReact = ({ name }) => {
  return {
    react: () => console.log(`${name} is creating React app...`),
  }
}

const canAngularAndVue = ({ name }) => {
  return {
    angular: () => console.log(`${name} is creating Angular app...`),
    vue: () => console.log(`${name} is creating Vue app...`),
  }
}

const canNodejs = ({ name }) => {
  return {
    nodejs: () => console.log(`${name} is creating Node.js app...`),
  }
}

const createFrontend = (name) => {
  const programmer = createProgrammer(name)
  return {
    ...programmer,
    ...canReact(programmer),
    ...canAngularAndVue(programmer),
  }
}

const createBackend = (name) => {
  const programmer = createProgrammer(name)
  return {
    ...programmer,
    ...canNodejs(programmer),
  }
}

const createFullstack = (name) => {
  const programmer = createProgrammer(name)
  const frontend = createFrontend(name)
  const backend = createBackend(name)
  return {
    ...programmer,
    ...frontend,
    ...backend,
  }
}

console.log('-------------')

const programmer = createProgrammer('Programmer')
programmer.code()

console.log('-------------')

const frontend = createFrontend('Frontend')
frontend.code()
frontend.react()
frontend.angular()
frontend.vue()

console.log('-------------')

const backend = createBackend('Backend')
backend.code()
backend.nodejs()

console.log('-------------')

const fullstack = createFullstack('Fullstack')
fullstack.code()
fullstack.react()
fullstack.angular()
fullstack.vue()
fullstack.nodejs()

console.log('-------------')
