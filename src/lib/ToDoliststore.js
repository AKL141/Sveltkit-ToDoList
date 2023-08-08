import { writable } from "svelte/store";
import supabase from "../lib/supabase/config";
export const HandleInput = writable([]);
export const HandleOutput = writable("");

export const fetchTodo = async () =>{

}
export const addTodo = async (todo) =>{
    await supabase.from('ToDoList').insert([{content:todo.content, checked:todo.checked, id:todo.id, created_at: todo.created_at}]);
    HandleInput.update((cur)=>[...cur,todo]);
}
