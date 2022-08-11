import React from 'react'
import 'h8k-components'

import { AddEmployee, Employee } from './components';
import { fetchEmployees } from './services/FakeBackendService';
import Nav from './components/Nav';
import ThemeProvider from './services/ThemeProvider';

function sortByKey(a, b, field, desc){
  if (a[field] < b[field]){
    return desc ? 1 : -1;
  }
  if (a[field] > b[field]){
    return desc ? -1 : 1;
  }
  return 0;
}

const App = () => {
  const [isFetching, setIsFetching] = React.useState(true);
  const [employees, setEmployees] = React.useState([]);
  const [error, setError] = React.useState();

  const [order, setOrder] = React.useState('name');
  const [filter, setFilter] = React.useState('');

  /* 
   * The original project didn't require many react hooks (which are encouraged)
   * so I added a fake backend service and pretending I'm fetching the data from it
  */

  const fetch = () => {
    setIsFetching(true);
    setError();
    fetchEmployees().then(response => {
      setEmployees(response);
    }).catch(err => {
      setError(err);
    }).finally(() => {
      setIsFetching(false);
    });
  }
  React.useEffect(() => {
    fetch();
  }, [])

  const updateEmployee = (updatedEmployeeData) => {
    /* 
    * Using map to mutate the state
    */ 
    setEmployees( eList => eList.map(e => e.id === updatedEmployeeData.id ? updatedEmployeeData : e) );
  }

  const saveNewEmployee = (newEmployeeData) => {
    /* 
    * Note: although not necessary for this simple use case, I am passing a function to setEmployees
    * to make sure the employee list is up to date, as I am using it to create the next ID.
    * React, process state updates in batches, so in an app where the state could change in multiple places,
    * this will ensure that the state is updated and that the next ID is correct.
    */ 
    setEmployees( eList => [...eList, {...newEmployeeData, id: eList[eList.length-1].id + 1}] );
  }

   /* 
    * I could have used two different states to represent sortField and sortDirection.
    * However, for no particular reason, I decided to use the same logic used in django
    * where a descending ordering is just the field name with '-' as prefix
    * 
    * order = 'name' => Sorting by name ascending
    * order = '-name' => Sorting by name descending 
    */ 
  const sortDirectionDesc = order[0] === '-';
  const sortField = sortDirectionDesc ? order.slice(1) : order;
  const filteredEmployees = employees.filter(
    employee => employee.name.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1)
      .sort((a,b)=>sortByKey(a, b, sortField, sortDirectionDesc));

  const changeSort = (field) => {
    if(sortDirectionDesc || order !== field){
      setOrder(field);
    }else{
      setOrder(`-${field}`);
    }
  }

  return (
    <ThemeProvider>
      <Nav />
      <div className='container w-100 px-10 mx-auto'>
        <main className='pt-100'>
          {isFetching
          ? 
            <div>Fetching employees...</div>
          : 
            <>
              {error ? <div data-testid='error-msg'>{error}</div>
              :
                <>
                <input className='mb-25' placeholder='Filter by name' value={filter} onChange={ev => setFilter(ev.target.value)} />
                <div className="card pb-5">
                  <table data-testid='table'>
                    <thead>
                      <tr>
                        {/* A lot of repetition here, would be better to create a TableHeader component */}
                        <th className='sortable' onClick={() => changeSort('name')}>
                          Name
                          {sortField === 'name' && (sortDirectionDesc ? <span>&#8595;</span> : <span>&#8593;</span>)} 
                        </th>
                        <th className='sortable' onClick={() => changeSort('position')}>
                          Position
                          {sortField === 'position' && (sortDirectionDesc ? <span>&#8595;</span> : <span>&#8593;</span>)} 
                        </th>
                        <th className='sortable' onClick={() => changeSort('salary')}>
                          Salary
                          {sortField === 'salary' && (sortDirectionDesc ? <span>&#8595;</span> : <span>&#8593;</span>)} 
                        </th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      { filteredEmployees.map((employee, idx) => (
                        <tr key={ employee.id } data-testid={ `row-${idx}` }>
                          <Employee
                            idx={ idx }
                            employee = { employee }
                            updateEmployee = {updateEmployee}
                          />
                        </tr>
                      ))}
                      <tr>
                        <AddEmployee saveNewEmployee={saveNewEmployee} />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>}
              <button
                data-testid='employees-refresh-button'
                className='x-small ma-0 px-25 mt-5'
                onClick={fetch}
              >
                Refresh
              </button>
            </>
          }
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App