import {combineReducers, configureStore, createSlice} from '@reduxjs/toolkit'
import O1 from '../img/01.png'
import O2 from '../img/02.png'
import O3 from '../img/03.png'
import O4 from '../img/04.png'
import O5 from '../img/05.png'
import O6 from '../img/06.png'

const projects = [
  {id: Math.random().toString(36).slice(2), img: O1, title: 'Gaming streaming portal'},
  {id: Math.random().toString(36).slice(2), img: O2, title: 'Video service'},
  {id: Math.random().toString(36).slice(2), img: O3, title: 'Video portal'},
  {id: Math.random().toString(36).slice(2), img: O4, title: 'Dating app'},
  {id: Math.random().toString(36).slice(2), img: O5, title: 'Landing'},
  {id: Math.random().toString(36).slice(2), img: O6, title: 'Gaming community'}
]

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projectsState: projects
  },
  reducers:{}
})

const {reducer} = projectsSlice

export const getProjects = () => state => state.reducer.projectsState

const rootReducer = combineReducers({reducer})

export function createStore() {
  return configureStore({
    reducer: rootReducer
  })
}