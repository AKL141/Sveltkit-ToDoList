import { all } from "axios";
import supabase from "../lib/supabase/config.js";
export const load = async () => {
    const { data, error } = await supabase.from('ToDoList').select('*').order('created_at', { ascending: true });
    return{todolist: data}
}