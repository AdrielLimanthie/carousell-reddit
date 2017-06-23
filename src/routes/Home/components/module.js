// ------------------------------------
// Constants
// ------------------------------------
export const ADD_TOPIC = 'ADD_TOPIC'

// ------------------------------------
// Actions
// ------------------------------------
export function addTopic (topic = '') {
  return {
    type    : ADD_TOPIC,
    payload : topic
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  topics: []
}

export default function topicReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TOPIC:
      return Object.assign({}, state, {
        topics: [...state.topics, {
          name: action.payload,
          upvote: 0,
          downvote: 0
        }]
      })
    default:
      return state
  }
}
