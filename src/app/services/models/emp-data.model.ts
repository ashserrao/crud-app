interface IEmployeeObject{
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    dob: string,
    gender: string,
    education: string,
    company: string,
    experience: number,
    package: number
}

export interface IEmployee extends Array<IEmployeeObject>{}