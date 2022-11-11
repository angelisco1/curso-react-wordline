import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './components/App'
import configStore from './store/config-store'

const store = configStore()

ReactDOM.createRoot(document.getElementById('app'))
  .render(
    <Provider store={store}>
      <App />
    </Provider>
  )