import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'

import {
  requestAllProjects
} from '../../modules/projects'

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>

    <p>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async
      </button>
    </p>

    <p>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
        Decrement Async
      </button>
    </p>

    <p>
      <button onClick={() => props.goToAboutPage()}>
        Go to about page via redux
      </button>
    </p>

    <p>
      <button onClick={() => props.goToProjectsPage()}>
        Go to projects page via redux
      </button>
    </p>
  </div>
)

const mapStateToProps = ({ counter, projects }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing,
  projects: projects.projects,
  requestingProjects: projects.requestingProjects,
  error: projects.error
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      requestAllProjects,
      goToAboutPage: () => push('/about-us'),
      goToProjectsPage: () => push('/projects')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
