import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'

// React 18
// const container = document.getElementById('root')
// // @ts-ignore
// const root = ReactDOM.createRoot(container)
// root.render(<App />)

// React 17
ReactDOM.render(<App />, document.getElementById('root'))
