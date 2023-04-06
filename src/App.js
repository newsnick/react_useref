import React from 'react'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'

function App() {
  return (
    <div>
      <h1>New Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default App

// useEffect(() => {
//   function onScroll() {
//     console.log(`prev: ${prev}, current: ${prev + 1}`);
//     changePrev(prev + 1);
//     document.removeEventListener("scroll", onScroll);
//   }
//
//   document.addEventListener("scroll", onScroll);
// }, [prev, changePrev]);

// const ref = useRef();
// const refDiv = {current: undefined};
//
// console.log(ref.current);

/* console.log('render') */
// <div
//   style={{ width: '100px', height: '2000px', backgroundColor: 'orange' }}
//   // ref={ref}
// />
/* useEffect(() => {
  document.addEventListener('scroll', () => {
    console.log(`prev: ${prev.current}, current: ${prev.current + 1}`)
    prev.current = prev.current + 1
  })
})
 */
// const [prev, changePrev] = useState(1);
// const prev = useRef(1)

/*  */
