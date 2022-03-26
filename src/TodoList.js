import React from 'react'
import { List,ListItem,ListItemText } from '@material-ui/core'

function TodoList(props) {
  return (
    <div className='TodoList'>

        <List >
      <ListItem alignItems="flex-start">

        <ListItemText
          primary="Todo.."
          secondary={props.TodoText }
        />
      </ListItem>

    </List>
    </div>
  )
}

export default TodoList
