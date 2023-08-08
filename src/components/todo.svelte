<script>
import {HandleInput,HandleOutput} from "../lib/ToDoliststore"
import supabase from "..//lib/supabase/config.js";

export let todo, i;
const deleteTodo = async (item) => {
    let text = 'Вы точно хотите удалить?';
    if (confirm(text)==true){
        $HandleInput = $HandleInput.filter((todo)=> todo.id!== item.id);
        await supabase.from('ToDoList').delete().eq('id', item.id);
    }else {
        return;
    }};

    const setcheckedtrue = async (id) => {
        await supabase.from('ToDoList').update({checked: true}).eq('id', todo.id)
    }
    const setchekedfalse = async (id) => {
        await supabase.from('ToDoList').update({checked: false}).eq('id', todo.id)
    }
    $:if(todo.checked){
        setcheckedtrue(todo.id);
    }
    $:if(todo.checked){
        setchekedfalse(todo.id);
    }
</script>

<section class="todolist">
    <input type="checkbox" class="checkbox" bind:checked={todo.checked}>
    <h4>{todo.content}</h4>
    <h6>{todo.created_at}</h6>
    <button on:click={()=>deleteTodo(todo)}>DELETE</button>

</section>

<style>
    .todolist{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #ccc;
    }
    .checkbox{
        padding: 10px;
        border-bottom: 1px solid #ccc;
    }
</style>