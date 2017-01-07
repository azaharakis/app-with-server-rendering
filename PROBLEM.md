# Problem 
Within our new App component lets render some properties on the page from a hardcoded json file with the following contents
```json
[
  {
    "image": "https://i2.au.reastatic.net/400x300/d735c9ef4a3fffe6c212a8008a89f97e1e465a64461489cd6cdadb855ad7ee0d/main.jpg",
    "address": "123 Fake street",
    "type": "house"
  },
  {
    "image": "https://i2.au.reastatic.net/400x300/78505655419944e4c58c753435a6f6b6ec8934641bc724570a07733db1a48067/main.jpg",
    "address": "123 Smith street",
    "type": "house"
  },
  {
    "image": "https://i2.au.reastatic.net/400x300/be36162503aca7ddc483b2ff184853a416b4c38673def09b420ab9eeb21f8fc8/main.jpg",
    "address": "12 George street",
    "type": "apartment"
  }
]
```
The HTML should render 3 div's that look like this:
 <img src="./docs/output2.png" />
 
# Tips
- Within `./src/server` create a `mockData.json` file that has the above content:
- can you `import` it into `./src/components/App.js` ? Do you get an error in the browser?
<img src="./docs/output.png" />
You may need to tell webpack how to load json files `yarn add json-loader` is a webpack loader that will compile json files.
look at how we apply babel to js files it will be a very similar process.

- Once you have the json ready to go, we'll need to iterate over the data to display each item. 
Given our data source is an array, the `map` transformation looks like a great use case
https://github.com/azaharakis/ui-training/tree/master/src/1.%20Introduction%20to%20ES%206/7.%20Array%20Operations#map
For each object in that array can you see how we could return a React component using the object as props?

# Bonus
 - Can you think of a way we can make a module that represents a Property Card as a react component
 that we can import into App.js?
 
## Solution
- [Solution](https://github.com/azaharakis/app-with-server-rendering/compare/03dd76b...02e78fc)