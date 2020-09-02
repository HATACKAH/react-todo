import React, { useState } from 'react'
import PropTypes from 'prop-types'




function AddTodo ({onCreate}) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()

        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }
    return (
        <form style={{marginButtom: '1rem'}} onSubmit={submitHandler}>
            <input value={value} onChange={event=> setValue(event.target.value)} />
            <button type='submit'>Add task</button>

        </form>
    )
}

AddTodo.propTypes ={ 
    onCreate: PropTypes.func.isRequired 
}
export default AddTodo