////////////////////////////// Question 1 ////////////////////////////
/*
class vehicles {
    constructor (mile_age,price){
        this.mile_age=mile_age;
        this.price=price;
    }

}

// inherted classes from Vehicles
class Car extends vehicles {
    
    constructor(mile_age,price,ownerShip_cost,waranty_years,seating_capacity,fuel_type){
        super(mile_age,price);
        this.ownerShip_cost=ownerShip_cost;
        this.waranty_years=waranty_years;
        this.seating_capacity=seating_capacity;
        this.fuel_type=fuel_type;

    }
}


class Bike extends vehicles {
    constructor(mile_age,price,no_od_cylenders,no_of_gears,cooling_type,wheeling_type,seating_capacity,fuel_tank_size){
        super(mile_age,price)
        this.no_od_cylenders=no_od_cylenders;
        this.no_of_gears=no_of_gears;
        this.cooling_type=cooling_type;
        this.wheeling_type=wheeling_type;
        this.seating_capacity=seating_capacity;
        this.fuel_tank_size=fuel_tank_size;

    }
}


// inherted classes from Car
class Audi extends Car {
    constructor(mile_age,price,ownerShip_cost,waranty_years,seating_capacity,fuel_type,modet_type)
    {
        super(mile_age,price,ownerShip_cost,waranty_years,seating_capacity,fuel_type);
        this.modet_type=modet_type;
       
    }
}

class Ford extends Car {
    constructor(mile_age,price,ownerShip_cost,waranty_years,seating_capacity,fuel_type,modet_type)
    {
        super(mile_age,price,ownerShip_cost,waranty_years,seating_capacity,fuel_type);
        this.modet_type=modet_type;
       
    }
}

// inherted classes from Bike

class Bajaj extends Bike {
    constructor(mile_age,price,no_od_cylenders,no_of_gears,cooling_type,wheeling_type,seating_capacity,fuel_tank_size,make_type){
        super(mile_age,price,no_od_cylenders,no_of_gears,cooling_type,wheeling_type,seating_capacity,fuel_tank_size)
        this.make_type=make_type;
        
    }
}


class Tvs extends Bike {
    constructor(mile_age,price,no_od_cylenders,no_of_gears,cooling_type,wheeling_type,seating_capacity,fuel_tank_size,make_type){
        super(mile_age,price,no_od_cylenders,no_of_gears,cooling_type,wheeling_type,seating_capacity,fuel_tank_size)
        this.make_type=make_type;
        
    }
}


// store and print the information of an Audi and a Ford car (i.e. model type, ownership cost, warranty, seating capacity, fuel type, mileage and price.) Do the same for a Bajaj and a TVS bike.

let audi=new Audi("1000 Km","3000000 LE","Mansoure Showroom",4,5,"Petrol","Germany");
let ford=new Ford("500 Km","1000000 LE","Mansoure Showroom",4,5,"desil","Japan");

console.log(`
Audi Car data :

Model type: ${audi.modet_type}
Ownership cost : ${audi.ownerShip_cost}
Warranty : ${audi.waranty_years}
Seating capacity: ${audi.seating_capacity}
Fuel type : ${audi.fuel_type} 
Mileage :${audi.mile_age}
Price :${audi.price}
`);

console.log(`
Ford Car data :

Model type: ${ford.modet_type}
Ownership cost : ${ford.ownerShip_cost}
Warranty : ${ford.waranty_years}
Seating capacity: ${ford.seating_capacity}
Fuel type : ${ford.fuel_type} 
Mileage :${ford.mile_age}
Price :${ford.price}
`);





let bajaj=new Bajaj("1000 Km","3000000 LE",4,6,"air","alloys","20");
let tvs=new Tvs("500 Km","1000000 LE",4,6,"oil","spokes","20");




console.log(`
bajaj bike data :

Mileage: ${bajaj.mile_age}
Price : ${bajaj.price}
No. of Cylenders : ${bajaj.no_od_cylenders}
No. of Gears: ${bajaj.no_of_gears}
Cooling Type : ${bajaj.cooling_type} 
Wheeling Type :${bajaj.wheeling_type}
Fuel Tank Size :${bajaj.mile_fuel_tank_sizeage}
`);

console.log(`
tvs bike data :

Mileage: ${tvs.mile_age}
Price : ${tvs.price}
No. of Cylenders : ${tvs.no_od_cylenders}
No. of Gears: ${tvs.no_of_gears}
Cooling Type : ${tvs.cooling_type} 
Wheeling Type :${tvs.wheeling_type}
Fuel Tank Size :${tvs.mile_fuel_tank_sizeage}
`);

*/
/////////////////////////////////// Question 2 /////////////////////////////////
/*


class Computer {
    constructor(processor,ram,i_o_prepherals){
        this.ram=ram;
        this.processor=processor;
        this.i_o_prepherals=i_o_prepherals;
    }

    display_data (){
        console.log(`
        It's Propertirs :

        Processor : ${this.processor} Mips
        Ram : ${this.ram} Giga
        I/O Prepherals : ${this.i_o_prepherals}
        `)  
    }

    change_properties(processor,ram,i_o_prepherals){
        this.processor=processor;
        this.ram=ram;
        this.i_o_prepherals=i_o_prepherals;
    }
}

// let com=new Computer("1M ",16,["USB","Speakers"] )
// com.display_data()
// com.change_properties("2M",20,"mouse");
// com.display_data()



// inherted classes from Computer

class Labtop extends Computer {
    constructor(processor,ram,i_o_prepherals,color,screen_size,model){
        super(processor,ram,i_o_prepherals)
        this.color=color;
        this.screen_size=screen_size;
        this.model=model;
    }

    find_color (color){
        let flag=0;
        for (let i = 0; i< this.color.length; i++) {
            if (color==this.color[i]){
                console.log(`${this.color[i]} Color Exist`)
                flag=1;
        

            }
           
            
          } 
          if(flag==0){
            console.log(`${color} color doesn't Exist`)

          }
    }

    find_screenSize (screenSize){
      for (let i = 0; i< this.screen_size.length; i++) {
        if (screenSize==this.screen_size[i]){
            console.log(`Size ${this.screen_size[i]} Exist`)
        }
        
      }
    }
}


class Smart_phones extends Computer {
    constructor(processor,ram,i_o_prepherals,color,screen_size,model){
        super(processor,ram,i_o_prepherals)
        this.color=color;
        this.screen_size=screen_size;
        this.model=model;
    }

    find_color (color){
        let flag=0;
        for (let i = 0; i< this.color.length; i++) {
            if (color==this.color[i]){
                console.log(`${this.color[i]} Color Exist`)
                flag=1;
        

            }
           
            
          } 
          if(flag==0){
            console.log(`${color} color doesn't Exist`)

          }
    }

    find_screenSize (screenSize){
      for (let i = 0; i< this.screen_size.length; i++) {
        if (screenSize==this.screen_size[i]){
            console.log(`Size ${this.screen_size[i]} Exist`)
        }
        
      }
    }
}



// Create objects
let lab=new Labtop("1M ",16,["USB","Speakers"],["white","black","grey"] ,["15 inch","10 inch"],"lenovo");
let mob=new Smart_phones ("1M ",16,["USB","Speakers"],["red","black","grey","blue"] ,["15 inch","10 inch"],"Hwuawi");

mob.find_color("red")
lab.find_color("white")
*/

////////////////////////////////////// Question 3 ///////////////////////////////////
/*
class Emp {
    constructor(name,job_tittle){
        this.name=name;
        this.job_tittle=job_tittle;

    }

    display_data(){
        console.log(`
            Emp data :

            Employee Name: ${this.name}
            Job Tittle : ${this.job_tittle}
          
        `);
    }

    edit_properties(user,job_tittle){
        this.name=user;
        this.job_tittle=job_tittle;
    }

    calculateWeeklyPay(){

    }
}

// inherted classes from Emp

class HourlyEmployee extends Emp {
    constructor(name,job_tittle,pay_rate,work_hours){
        super(name,job_tittle)
        this.pay_rate=pay_rate;
        this.work_hours=work_hours;
    }
    display_data(){
        console.log(`
            Emp data :

            Employee Name: ${this.name}
            Job Tittle : ${this.job_tittle}
            Pay_rate : ${this.pay_rate}
            work_hours : ${this.work_hours} Hour/day
          
        `);
    }
    calculateWeeklyPay(){
        console.log(`Weekly Salary = ${this.pay_rate*this.work_hours} LE`)
    }
}


class SalaryEmployee extends Emp {
    constructor(name,job_tittle,week_salary,){
        super(name,job_tittle)
        this.week_salary=week_salary;
    }

    calculateWeeklyPay(){
        console.log(`Weekly Salary = ${this.week_salary} LE`)
    }
}


let hourEmp=new HourlyEmployee("Kareem","Engineer",10,20);
hourEmp.display_data();
hourEmp.calculateWeeklyPay();
*/


