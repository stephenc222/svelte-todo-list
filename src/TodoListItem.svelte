<script>
  export let onRemove;
  export let onTextChange;
  export let onEdit;
  export let onSave;
  export let listItem;
  export let canEdit
  let { value, id } = listItem

</script>

<div class='todo-list-item'>
  {#if canEdit}
    <input on:input={event => onTextChange(event, id)} value={value}  type='text'/>
    <button on:click={() => onSave(id, listItem)}>save</button>
  {/if}
  {#if !canEdit}
    <div>{value}</div>
    <button on:click={() => onEdit(id)}>edit</button>
  {/if}
  <button on:click={() => onRemove(id)}>remove</button>
</div>

<style>
	.todo-list-item {
    display: flex;
    flex-direction: row;
	}
</style>