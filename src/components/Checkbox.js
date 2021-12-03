import React from 'react'

function Checkbox() {
    return (
        <div
        className='foo'>
        <label>
          <input
          data-testid="checkbox-checked" 
            className='checkbox'
            name='bar'
            type='checkbox'
            checked={true}
          />
          <input
            className='checkbox'
            name='bar'
            type='checkbox'
            checked={false}
          />
        </label>
      </div>
    )
}

export default Checkbox
