class Teacher{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    getInfo(){
        console.log(`${this.name} at ${this.age}`)
    }
}
let teacher1=new Teacher('xyz',50)
class Student extends Teacher{
    constructor(name,age){
        super(name,age)
    }
}
let ans=new Student('shru',20)
console.log(ans)