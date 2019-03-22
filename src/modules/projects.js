export const PROJECTS_REQUESTED = 'projects/PROJECTS_REQUESTED'
export const PROJECTS_DELIVERED = 'projects/PROJECTS_DELIVERED'
export const PROJECTS_DENIED = 'projects/PROJECTS_DENIED'

const initialState = {
  projects: [],
  requestingProjects: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS_REQUESTED:
      return {
        ...state,
        requestingProjects: true,
      }

    case PROJECTS_DELIVERED:
      return {
        ...state,
        projects: action.payload,
        requestingProjects: false,
        error: null,
      }

    case PROJECTS_DENIED:
      return {
        ...state,
        requestingProjects: false,
        error: action.payload
      }

    default:
      return state
  }
}

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    dispatch({
      type: INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 3000)
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      })
    }, 3000)
  }
}
