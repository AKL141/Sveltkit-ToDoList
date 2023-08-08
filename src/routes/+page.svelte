<script>
    import supabase from '../lib/supabase/config.js';
    import {HandleInput, HandleOutput} from '../lib/ToDoliststore.js';
    import Todo from '../components/todo.svelte';
    export let data;
    const {todolist} = data;

    $HandleInput = todolist;
    const addtodo = async () => {
        const todo = {content: $HandleOutput, checked:false, id: crypto.randomUUID(), created_at: new Date().toLocaleDateString()}
        await supabase.from('ToDoList').insert([{content:$HandleOutput, created_at: new Date().toLocaleDateString()}]);
        $HandleInput = [...$HandleInput, todo];
        $HandleOutput = '';
    };
</script>

<section>
    <div>
        <input class="inputText" type="text" placeholder="New Task" bind:value={$HandleOutput}>
        <button class="buttonADD" on:click={addtodo}>
            Add
        </button>
    </div>
    <div>
        {#each $HandleInput as todo, i}
        <Todo {todo} {i}/>
        {/each}
    </div>
</section>


<style>
    section{
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background-color: rgb(68, 86, 201);
    }
    .inputText{
        align-items: center;
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 5px;
        outline: none;
        font-size: 20px;
        color: white;
        background-color: rgb(68, 86, 201);
    }
    .buttonADD{
        padding: 10px;
        border: none;
        border-radius: 5px;
        outline: none;
        font-size: 20px;
        color: white;
        background-color: rgb(68, 86, 201);
    }
</style>