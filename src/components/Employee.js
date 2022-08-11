import React, { Fragment } from 'react'

const Employee = ({idx, employee, updateEmployee}) => {
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [salary, setSalary] = React.useState(employee.salary);

  const cancelEdit = (ev) => {
    setIsEditMode(false);
    setSalary(employee.salary);
  }

  const save = (ev) => {
    updateEmployee({
      ...employee,
      salary
    });
    setIsEditMode(false)
  }
  
  return (
    <Fragment>
      <td>{employee.name}</td>
      <td className='pl-20'>{employee.position}</td>
      <td className='pl-20'>
      {!isEditMode ? 
        <div
          data-testid={'employee-salary-div-' + idx}
          onClick={() => setIsEditMode(true)}
        >
          {salary}
        </div>
      :
        <input
          autoFocus
          value={salary}
          onChange={(ev) => setSalary(parseInt(ev.target.value))}
          onFocus={(ev) => ev.target.select()}
          data-testid={ 'employee-salary-input-' + idx }
          type='number'
        />
      }
      </td>
      <td className='pl-20'>
        <button
          className={ 'x-small w-45 ma-0 px-25 mr-5' }
          data-testid={ 'employee-save-button-' + idx }
          disabled={salary === employee.salary}
          onClick={save}
        >
          Save
        </button>
        <button
          className={ 'x-small w-45 ma-0 px-25' }
          data-testid={ 'employee-cancel-button-' + idx }
          disabled={!isEditMode}
          onClick={cancelEdit}
        >
          Cancel
        </button>
      </td>
    </Fragment>
  )
}


export default Employee
