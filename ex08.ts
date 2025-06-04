type Developer= {
    firstName: string;
    language: string;
    greeting: string
}

function greetDevelopers(list: Developer[]) {
    return list.map((person) => {
      person.greeting = `Hi ${person.firstName}, what do you like the most about ${person.language}?`
      return person
    })
  }