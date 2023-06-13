import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { publicRoutes } from './routes'
import DefaultLayout from './components/Layout/DefaultLayout/DefaultLayout'

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component
          const Layout = DefaultLayout

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            ></Route>
          )
        })}
      </Routes>
    </Router>
  )
}

export default App
