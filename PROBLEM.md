# Problem
We are now making an API call to populate a list of properties. But this can be a bit slow 
for the user as the following has to happen 
- wait for the page to comeback from the server; then
- wait for the client javascript bundle to finish loading; then
- wait for the api request to be made; which finally
- renders the list of results.
Instead of making the API on the client, make the API call on the server and send
the full results to the browser, just like we did in [lesson_5](https://github.com/azaharakis/app-with-server-rendering/blob/lesson_5/PROBLEM.md)

# Tips
- React lifecycle methods aren't the right choice here as making a fetch request is async.
We need a way to have the data available before attempting to render the react tree  
From a high level we can imagine the call stack for these 3 different implementations like this:
<div><img src="./docs/output.png" /></div>
- Instead make a static method `fetchData` on the App component which returns the fetch Promise
- in `./src/server/middleware` call this static method and after the promise has resolved render the app 
```js
App.fetchData().then(data => {
    //Render application passing `data` in as props   
})
```

# Bonus
Chances are if you haven't made any changes to `./src/client/index` you'll be getting a javascript error in the browser
<div><img src="./docs/output2.png" /></div> 
Although the page has shown the correct results
This is because we are trying to 'hydrate' the App on the client side without any data! This makes sense
all the server is doing is sending a html response to the browser. When we re-render the app again 
on the client it has no way of knowing what that data was, unless we tell it...

#Tip
- Can you serialize the data that came back from the API and send it as part of the html, using
`JSON.stringify(data);`

## Solution
- [Solution](https://github.com/azaharakis/app-with-server-rendering/compare/0bc5c27...09c9e80)
