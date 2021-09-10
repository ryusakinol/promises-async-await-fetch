////////////////////// FETCH-----------------------
// const done = true;

// const isDone = new Promise((resolve, rejects) =>{
//     if (done){
//         const workDone = 'I do it bb'
//         resolve(workDone)
//     }
//     else{
//         const letDoIt = 'lest do it' 
//         rejects(letDoIt)
//     }
// });

// console.log(isDone);


///////////////////////Asiync and await---------------------

//An async function returns a promise, like in this example:
  const doSomethingAsync = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 3000)
    })
  }
  
//promise is resolved or rejected.

  const doSomething = async () => {
    console.log(await doSomethingAsync())
  }
 /*A quick example
 This is a simple example of async/await used to run a function asynchronously:
  console.log('Before')
  doSomething()
  console.log('After')

  const aFunction = async () => {
    return 'test'
  }*/
  
  aFunction().then(alert) // This will alert 'test'


  const getFirstUserData = () => {
    return fetch('/users.json') // get users list
      .then(response => response.json()) // parse JSON
      .then(users => users[0]) // pick first user
      .then(user => fetch(`/users/${user.name}`)) // get user data
      .then(userResponse => userResponse.json()) // parse JSON
  }
  
  getFirstUserData()