// ------------------------------------
// Reducer for Topics
// ------------------------------------
// This is a file to contain reducer for topics.
//
// Users can add a new topic, upvote a topic and downvote a topic
//
// Some assumptions made for the data of topics are:
// 1. Users can make 2 topics with the same name, that's why unique ID is added in the state
// 2. Upvotes & Downvotes will modify a shared state called "point" instead of having
//    separate points for Upvotes & Downvotes (e.g. upvotePoint & downvotePoint)
// 3. A topic's point can be negative.

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_TOPIC = 'ADD_TOPIC'
export const UPVOTE_TOPIC = 'UPVOTE_TOPIC'
export const DOWNVOTE_TOPIC = 'DOWNVOTE_TOPIC'

// ------------------------------------
// Actions
// ------------------------------------
function addTopic (topic = '') {
  return {
    type    : ADD_TOPIC,
    payload : topic
  }
}

function upvoteTopic (id) {
  return {
    type    : UPVOTE_TOPIC,
    payload : id
  }
}

function downvoteTopic (id) {
  return {
    type    : DOWNVOTE_TOPIC,
    payload : id
  }
}

export const ACTIONS = {
  addTopic,
  upvoteTopic,
  downvoteTopic
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  topics: {},
  currentId: 0
}

export default function topicReducer (state = initialState, action) {
  if (action.type === ADD_TOPIC) {
    return Object.assign({}, state, {
      topics: Object.assign({}, state.topics, {
        [state.currentId]: {
          name: action.payload,
          point: 0
        }
      }),
      currentId: state.currentId + 1
    })
  } else if (action.type === UPVOTE_TOPIC) {
    return Object.assign({}, state, {
      topics: Object.assign({}, state.topics, {
        [action.payload]: Object.assign({}, state.topics[action.payload], {
          point: state.topics[action.payload].point + 1
        })
      })
    })
  } else if (action.type === DOWNVOTE_TOPIC) {
    return Object.assign({}, state, {
      topics: Object.assign({}, state.topics, {
        [action.payload]: Object.assign({}, state.topics[action.payload], {
          point: state.topics[action.payload].point - 1
        })
      })
    })
  } else {
    return state
  }
}
