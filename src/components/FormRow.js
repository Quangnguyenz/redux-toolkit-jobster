import React from 'react'

const FormRow = () => {
    return (
        <div className="form-row">
            <label htmlFor="name" className='form-label'>Name</label>
            <input type="text" name='name' value={values.name} onChange={handleChange} />
        </div>
    )
}

export default FormRow