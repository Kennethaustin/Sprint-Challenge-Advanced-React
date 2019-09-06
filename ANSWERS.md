- [ ] Why would you use class component over function components (removing hooks from the question)?
If state and reusability are factors, I’d use class components over functional components.
- [ ] Name three lifecycle methods and their purposes.
ender() is used in every React class component. It returns your component to the DOM. 
componentDidMount() happens after the component has mounted (the initial render and state are ready to be updated/rerendered
componentDidUpdate() happens after an update occurs. It updates the DOM in response to changes in state or props.
- [ ] What is the purpose of a custom hook?
A custom hook keeps stateful logic clean and dry that can be created for your custom purpose and used anywhere in your code.
- [ ] Why is it important to test our apps?
Testing our apps save us time in having to go back and refactor code over and over to make sure the app works as it’s supposed to.