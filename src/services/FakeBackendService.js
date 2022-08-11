/* The only reason why this is being exported is for it to be re-used in our tests */
export const employeesList = [
    { id: 0, name: 'Chris Hatch', position: 'Software Developer', salary: 130000 },
    { id: 1, name: 'Elizabeth Montgomery', position: 'Lead Research Engineer', salary: 70000 },
    { id: 2, name: 'Aiden Shaw', position: 'Machine Learning Engineer', salary: 80000 },
]

export const fetchEmployees = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.3){
                resolve(employeesList);
            }else{
                reject('Unable to fetch employees')
            }
        }, 1000)
    })
}