import Footer from './Footer/Footer'
import Input from './Input'
import List from './List'

function Todo() {
  return (
    <>
      <div className="rounded-lg relative shadow-xl">
        <Input />
        <List />
        <Footer />
      </div>
    </>
  )
}

export default Todo
