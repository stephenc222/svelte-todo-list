<script>
  export let onRemove;
  export let onTextChange;
  export let onEdit;
  export let listItem;
  export let canEdit
  let { value, id } = listItem

</script>

<div class='todo-list-item'>
  {#if canEdit}
    <input on:input={event => onTextChange(event, id)}  type='text'/>
  {/if}
  {#if !canEdit}
    <div>{value}</div>
  {/if}
  <button on:click={() => onEdit(id)}>edit</button>
  <button on:click={() => onRemove(id)}>remove</button>
</div>

<style>
	.todo-list-item {
    display: flex;
    flex-direction: row;
	}
</style>