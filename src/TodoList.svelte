<script>
  import TodoListItem from './TodoListItem.svelte'
  import { createId } from './createId.js'
  let list = []
  let editItem
  let editId = -1
  let nextTextVal
  const onAdd = () => {
    const id = createId()
    list.push({ id, _id: id, value: id})
    list = list
  }
  const onTextChange = (event, id) => {
    nextTextVal = event.target.value
  }
  const onEdit = (id) => {
    if (editId === id) {
      editId = -1
      return
    }
    editId = id
  }
  const onSave = (id, listItem) => {
    const editIndex = list.findIndex( item => item.id === id)
    if (editIndex > -1) {
      // internal "_id" is contrived to force the list to re-render on list item update
      list[editIndex] = {id: listItem.id, _id: createId(), value: nextTextVal || listItem.value}
      nextTextVal = ''
      editId = -1
    }
  }
  const onRemove = (id) => {
    const foundIndex = list.findIndex( item => item.id === id)
    list = list.filter(item => item.id !== id)
  }
</script>

<div>
  <button on:click={onAdd}>Add Item</button>
  {#each list as listItem (listItem._id)}
    <TodoListItem
      onSave={onSave}
      onTextChange={onTextChange}
      canEdit={listItem.id === editId}
      listItem={listItem}
      onRemove={onRemove}
      onEdit={onEdit}
    />
  {/each}
</div>