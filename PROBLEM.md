# Problem
Now that we have a server responding with a HTML document, lets add additional functionality so that 
we may serve some javascript on the page that simply console logs.
<img src="./docs/output.png" />

## Bonus
Setup the tooling that will compile our client code to a public directory. rather then just creating a public directory with
 javascript in it. [Why?](https://github.com/azaharakis/ui-training/tree/master/src/2.%20Build%20Tools/2.%20Webpack)

# Tips
- We need to create a javascript package we can use in the browser lets use webpack `yarn add webpack`
    - We can do this by creating a client directory with our javascript that we want to send to the browser `./src/client/index.js` 
- We need to update our page.js module to reference the bundle that is output to the public directory
- We also need to tell express that we have a public directory for serving static assets, so it's accessible on the internet
- Finally we want to ignore the public directory in our project from being committed
  
## Solution
- [Solution](https://github.com/azaharakis/app-with-server-rendering/compare/1d3e542...a022656)


