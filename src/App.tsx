// ** import useDispatch & useSelector from 'react-redux'
import { useDispatch, useSelector } from "react-redux";
import {
   decrement,
   increment,
   incrementByValue,
} from "./redux/features/countSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
   // ** call the selector to get the state value:
   //  const { count } = useSelector((state) => state.counter);
   const { count } = useAppSelector((state) => state.counter);

   // **  if we call the useDispatch hook is return a function:

   //  const dispatch = useDispatch();
   const dispatch = useAppDispatch();

   return (
      <div className="flex items-center justify-center h-screen">
         <div className=" h-[200px] w-2/5  bg-violet-500 px-10 py-7 rounded-2xl flex items-center justify-center gap-4">
            <button
               onClick={() => dispatch(incrementByValue({ value: 5 }))}
               className="text-lg capitalize font-medium bg-white px-4 py-2 rounded-lg hover:bg-blue-300 duration-500"
            >
               increment
            </button>
            <h1 className="text-2xl font-bold uppercase text-white ">
               {count}
            </h1>
            <button
               onClick={() => dispatch(decrement())}
               className="text-lg capitalize font-medium bg-white px-4 py-2 rounded-lg  hover:bg-blue-300 duration-500"
            >
               decrement
            </button>
         </div>
      </div>
   );
}

export default App;
