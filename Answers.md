# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a component based library that uses JSX  to make DOM elements easier to access and uses state to react to data changes, updating the DOM on the fly.

1. Describe component state.

    Component State is a javascript object with a default value. (like a light bulb "on/off") State is used to track component information between renderings and can only be created/managed internally

1. Describe props.

    Components are data that is passed from a parent component to a child component that way react can update the child component when changes are made. 

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side effects are anything that changes something outside the scope of the function being executed. Inside of react we can use the effect hook to tell React that a component needs to do execute a sideffect.  