import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <main className='md:flex '>
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </main>
    
    </>
  )
}

export default App
