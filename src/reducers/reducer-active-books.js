//State argument is not applicationstate, only the state
//this reducer is responsible for. 
//set state = null as argument, so if the state is undefinted, it will actually be null
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload
  }

  return state
}