function someAsyncAction() {  
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
}

// note the `async label`
export async function helloWorldDelayed() {  
  return await someAsyncAction();
}
