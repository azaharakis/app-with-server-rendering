# Problem 
### Render a Hello world component on both client and server


# Tips
- [How to create a react component](https://github.com/azaharakis/ui-training/tree/master/src/3.%20React/1.%20Stateless%20Components)
- We can use react to create the same component that can be rendered on the client and the server
    - Create a `./src/components` directory to place this component into.    
- to create react markup on the server we can store the markup string in a variable
`
import ReactDOMServer from 'react-dom/server';
const applicationString = ReactDOMServer.renderToString(<App />);
` 
- We then need to inject it into the page module, so it can be sent to the browser.
- If all we cared about was the markup we would be done but often we want to make these components 
 interactive on the client ad often we want to bind different types of events to these components
 this needs to be done on the client.
- to output a react component on the client we do this: 
`
import reactDOM from 'react-dom';
ReactDOM.render(<MyComponent />, document.getElementById("wrapper"));
`

### Bonus 
- Can you make the component alert 'hello world' when you click it? 