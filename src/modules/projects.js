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

const url = 'http://localhost:4000';

export const requestAllProjects = () => dispatch => {
  dispatch ({ type: PROJECTS_REQUESTED });

  return setTimeout(() => {
    axios
    .get(`${url}/api/projects`)
    .then(res => {
      dispatch({ 
        type: PROJECTS_DELIVERED, 
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: PROJECTS_DENIED,
        payload: err.response
      })
    })
  }, 2000)
}

