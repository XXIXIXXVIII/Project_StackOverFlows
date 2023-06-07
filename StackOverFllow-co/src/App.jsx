import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import {publicRouter} from './router/index'

function App() {


  return (
    <Router>
      <Routes>
      {publicRouter.map((item,index)=>{
        let Page = item.component
        let Layout = item.layout
        return <Route key={index} path={item.path} element={<Layout><Page/></Layout>}/>
      })}
      </Routes>
    </Router>
  )
}

export default App
