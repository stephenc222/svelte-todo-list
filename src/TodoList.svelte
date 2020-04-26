<script>
  import TodoListItem from './TodoListItem.svelte'
  import { createId } from './createId.js'
  let list = []
  let editItem
  let editId = -1
  const onAdd = () => {
    const id = createId()
    list.push({ id, value: id})
    list = list
  }
  const onTextChange = (event, id) => {
    const editIndex = list.findIndex( item => item.id === id)
    if (editIndex > -1) {
      editItem = { id, value: event.target.value }
    }
  }
  const onEdit = (id) => {
    if (editId === id) {
      let index = list.findIndex( item => item.id === editId)
      if (index > -1) {
        const nextList = list.map( item => {
          if (item.id === editItem.id) {
            return editItem
          }
          return item
        })
        list = nextList
      }
      editId = -1
      return
    }
    editId = id
  }
  const onRemove = (id) => {
    const foundIndex = list.findIndex( item => item.id === id)
    list = list.filter(item => item.id !== id)
  }
</script>

<div>
  <button on:click={onAdd}>Add Item</button>
  {#each list as listItem (listItem.id)}
    <TodoListItem
      onTextChange={onTextChange}
      canEdit={listItem.id === editId}
      listItem={listItem}
      onRemove={onRemove}
      onEdit={onEdit}
    />
  {/each}
</div>