import { todoListFilterState } from "./todoListFilterState";
import {RecoilRoot, useRecoilState} from 'recoil';

function TodoListFilters(){
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const updatefilter = ({target: {value}}) =>{
    setFilter(value);
  };
  return(
    <>
    Filter:
    <select value={filter} onChange={updatefilter}>
      <option value="Show all">All</option>
      <option value="Show Completed">Completed</option>
      <option value="Show Uncompleted">Uncompleted</option>
    </select>
    </>
  );
}

export default TodoListFilters