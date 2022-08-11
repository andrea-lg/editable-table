import React, { Fragment } from 'react'

const AddEmployee = ({saveNewEmployee}) => {
  const [newEmployeeData, setNewEmployeeData] = React.useState({});

  const add = (ev) => {
    saveNewEmployee(newEmployeeData);
    setNewEmployeeData({});
  }

  return (
    <Fragment>
      <td className='pl-30'>
        <input
          data-testid='new-employee-name-input'
          placeholder='Enter Name'
          value={newEmployeeData['name'] || ''}
          onChange={(ev) => setNewEmployeeData({
            ...newEmployeeData,
            name: ev.target.value
          })}
        />
      </td>
      <td className='pl-20'>
        <input
          data-testid='new-employee-position-input'
          placeholder='Enter Position'
          value={newEmployeeData['position'] || ''}
          onChange={(ev) => setNewEmployeeData({
            ...newEmployeeData,
            position: ev.target.value
          })}
        />
      </td>
      <td className='pl-20'>
        <input
          data-testid='new-employee-salary-input'
          type='number'
          placeholder='Enter Salary'
          value={newEmployeeData['salary'] || 0}
          onFocus={ev => ev.target.select()}
          onChange={(ev) => setNewEmployeeData({
            ...newEmployeeData,
            salary: parseInt(ev.target.value)
          })}
        />
      </td>
      <td className='pl-20'>
        <button
          data-testid='add-new-employee-button'
          className='x-small w-45 ma-0 px-25'
          onClick={add}
          disabled={!newEmployeeData['name'] || !newEmployeeData['position'] || !newEmployeeData['salary']}
        >
          Add
        </button>
      </td>
    </Fragment>
  )
}

export default AddEmployee
