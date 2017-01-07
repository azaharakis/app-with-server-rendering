# Problem 
Now that we have our markup on the page, we need to make it look presentable to our consumers.
We need be able to style our components and page to look like this:
<div><img src="./docs/output.png" height="500"/></div>


# Tips
- We can use webpack to parse css using another loader we'll need to target css files in our dependency tree to apply this loader
[this is how we could use it](https://github.com/webpack/style-loader#recommended-configuration)
`yarn add style-loader` and `yarn add css-loader` in this case we need 2 loaders.
- Is the server throwing errors? 
<div><img src="./docs/output2.png" height="500"/></div>  
It looks like node is trying to read these files, but really these are a client only concern and really we only want 
webpack to deal with these files. We should ignore these files on the server.
- you can ignore file extensions in node by monkey patching require 
```js
const noop = () => null;

require.extensions['.css'] = noop;
```
Place that in a file and import it into the project as early as possible.

# Bonus
- It looks like the css is created using javascript!! If the user has disabled javascript
they wont get any of our css? Can you think of a way we can put our css into a css file and load
it into the browser? [Here's a tip](https://github.com/webpack/extract-text-webpack-plugin/blob/webpack-1/README.md) 

# Solution 
- [Solution](https://github.com/azaharakis/app-with-server-rendering/compare/02e78fc...b648ff2)
