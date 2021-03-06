# Redux

Is in charge of managing our application state and that state is a single plain javascript object. Application state is different/seperate from component state. No tie/connection whatsoever

## Tinder/Redux example

- Data/State/Application State
  1 - Users(w/ images and chat logs)
  2 - list of current users with a conversation
  3 - list of users to be reviewed
  4 - currently viewed conversation
  5 - currently viewed user for image swiping
- Views/React/UI/Components/Containers
  1 - ImageCard
  2 - ConversationList (open conversations)
  3 - Like/Dislike Button
  4 - TextList (chat messages)
  5 - TextItem (individual message)

### Reducer

- A function that returns a piece of the application state. Since our application can have many pieces of state, we can have many reducers. You can have as many reducers as pieces of state. At the end of the day, reducer should just return an array of objects
- Application state is formed by reducers. For each key in `combineReducers`, we assign one reducer
- Reducers are in charge of changing state overtime with `Actions`. Whenever an action is dispatched, it flows through all the different reducers in our application, reducers have option to return a different piece of state than usual

### Containers

- A Container is a React Component that has a direct connection to the state managed by Redux.
- React-Redux
  - forms the bridge between both libraries
  - the only time we get the bridge available is in Containers.
- Containers are referred to as "Smart Components" as opposed to a normal/dumb component, which does not have any direct connection to Redux
- Only the most parent component that uses a particular piece of state needs to be connected to Redux.

- `import { connect } from 'react-redux'`: connect() takes a function and component and produces a container. The container is a component that is aware of the state is contained by Redux. The mapStateToProps takes state as argument and returns and object that is the props
- If state ever changes, mapStateToProps() will instantly re-render.

### Actions

- Actions and Action creators are for having active state aka changing state.
- `Action Creator` is just a function that returns an object. The object is then automatically sent to all of the different reducers inside the app. Reducers can choose to return a different piece of state depending on what the action is. The newly returned piece of state then gets piped into the app state/react app and causes to re-render.
- once all reducers process action and return state, they notify containers of change to state and re-render with new props.
- Actions always contain a type and sometimes a payload. Type is always UPPER_CASE, usually a string, always separated by _:

### Container/Action/Reducer Cycle

- User has some interaction with UI aka clicks on something, which calls action creator
- Action Creator is a function that returns an action with type and data from UI
- Action automatically sent to all reducers
- In this case, activeBook property on state set to the value returned from the active book reducer
- All reducers processed the action and returned new state. New state has been assembled. Notify containers of the changes to state. On notification, containers will rerender with new props
