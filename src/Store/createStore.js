import {combineReducers, configureStore, createSlice} from '@reduxjs/toolkit'
import O1 from '../img/notepad.png'
import O2 from '../img/todos.png'
import O3 from '../img/fast-company.png'
import O4 from '../img/books.png'
import big_O1 from '../img/notepad-big.png'
import big_O2 from '../img/todos-big.png'
import big_O3 from '../img/fast-company-big.png'
import big_O4 from '../img/search-book-big.png'

const projects = [
  {
    id: Math.random().toString(36).slice(2),
    img: O1,
    imgBig: big_O1,
    title: 'Full stack SPA "Notepad"',
    description: `Frontend: JavaScript, React, Redux Toolkit, Axios, Lodash ${<br/>}
                  Backend: Node.js, Express, MongoDB`,
    projectLink: 'https://notepad-2-fd8a3.firebaseapp.com',
    gitHubLink: 'https://github.com/SergeyMaxx/notepad-2.git'
  },
  {
    id: Math.random().toString(36).slice(2),
    img: O2,
    imgBig: big_O2,
    title: 'Todos application',
    description: 'TypeScript, React',
    projectLink: 'https://todo-ts-1c3bb.web.app',
    gitHubLink: 'https://github.com/SergeyMaxx/todos-ts.git'
  },
  {
    id: Math.random().toString(36).slice(2),
    img: O3,
    imgBig: big_O3,
    title: 'Social network for quick meetings',
    description: 'JavaScript, React, Redux Toolkit, Axios, Lodash',
    projectLink: 'https://fast-company-5008a.web.app/',
    gitHubLink: 'https://github.com/SergeyMaxx/fast-company_react.git'
  },
  {
    id: Math.random().toString(36).slice(2),
    img: O4,
    imgBig: big_O4,
    title: 'Search for books',
    description: 'TypeScript, React, Redux Toolkit',
    projectLink: 'https://book-search-3d91e.web.app/',
    gitHubLink: 'https://github.com/SergeyMaxx/book-search.git'
  }
]

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projectsState: projects,
    isDarkMode: localStorage.getItem('darkMode') || 'light'
  },
  reducers: {
    toggleDarkMode(state, action) {
      state.isDarkMode = action.payload.status
    }
  }
})

const {toggleDarkMode} = projectsSlice.actions

const {reducer} = projectsSlice

export const getProjects = () => state => state.reducer.projectsState
export const getDarkMode = () => state => state.reducer.isDarkMode
export const darkModeToggle = status => toggleDarkMode(status)
export const changeDarkMode = status => toggleDarkMode(status)

const rootReducer = combineReducers({reducer})

export function createStore() {
  return configureStore({
    reducer: rootReducer
  })
}