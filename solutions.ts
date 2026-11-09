const multiplyValue = ( value: number, multiplier?: number ) : number => {
    if ( multiplier !== undefined ){
        if ( multiplier !== 0 ){
            return value * multiplier;
        }else return 0;
    }else{
        return value * 2;
    }
}


const processInput = ( i: string | number | boolean ) : string | number => {
    if ( typeof i === "string" ) {
        return i.trim().toLowerCase();
    }else if( typeof i === "number" ) {
        return i * 10;
    }else {
        if (i){
            return "Active";
        }else{
            return "Inactive";
        }
    }
}


const formatCoordinate = ([latitude, longitude, locationName]: readonly [number, number, string]) : string => {
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}


const concatenateArrays  = <T> (...arrays: T[][]) : T[] => {
    return arrays.reduce( (acc, curr) => [...acc, ...curr], [] );
}


interface Course {
    title: string;
    students: number;
    isPublished: boolean; 
}

const getPopularCourses = (courses: Course[], minStudents: number) : Course[] => {
    return courses.filter( (course) => course.isPublished === true && course.students >= minStudents );
}


const pluckValues = <T, K extends keyof T> (items: T[], key: K) : T[K][] => {
    return items.map( item => item[key] )
}


class Employee {
    protected name: string;
    private baseSalary: number;
    
    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
        
    }
    
    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;
    
    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }
    
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}


async function validateAgeAsync(age: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        } else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
}