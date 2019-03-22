import React, { useEffect, useState } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  requestAllProjects
} from '../../modules/projects'

function Lifecycle() {
  // It takes a function
  useEffect(() => {
    // This gets called after every render, by default
    // (the first one, and every one after that)
    console.log('render!');

    // If you want to implement componentWillUnmount,
    // return a function from here, and React will call
    // it prior to unmounting.
    return () => console.log('unmounting...');
  })

  return "I'm a lifecycle demo";
}

function Projects (props) {
  useEffect(() => {
    // This gets called after every render, by default
    // (the first one, and every one after that)
    console.log('render!');
    props.requestAllProjects();

    // If you want to implement componentWillUnmount,
    // return a function from here, and React will call
    // it prior to unmounting.
    return () => console.log('unmounting...');
  })

  return (
    <div>
    <h1>Projects</h1>

    <div>
      {props.projects.map(project => {
        return (
          <ul key={project.id} >
            <li>{`Project: ${project.name}`}</li>
            <li>{`Description: ${project.description}`}</li>
            <li>{`Completed: ${project.completed}`}</li>
        </ul>
        )
      })}
    </div>

    <p>
      <button onClick={() => props.goToAboutPage()}>
        Go to about page via redux
      </button>
    </p>

    <p>
      <button onClick={() => props.goToHomePage()}>
        Go to home page via redux
      </button>
    </p>
  </div>
  )
}

const mapStateToProps = ({ projects }) => ({
  projects: projects.projects,
  requestingProjects: projects.requestingProjects,
  error: projects.error
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestAllProjects,
      goToAboutPage: () => push('/about-us'),
      goToHomePage: () => push('/')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects)
