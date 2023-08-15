

// 1.Class movie
class Movie{
        constructor(title,studio,rating){
            this.title=title;
            this.studio=studio;
            this.rating=rating;
        }
    }
    const movie = new Movie("Casino Royale","Eon Production","PG13")
    console.log(movie.title);
    console.log(movie.studio);
    console.log(movie.rating);


// 3  person Details


class personDetails{
    constructor(name,age,email,phone,city,state){
        this.name=name;
        this.age=age;
        this.email=email;
        this.phone=phone;
        this.address=city;
        this.status=state;
    }
   
}
const person1 = new personDetails("selva","26","wwwww@gmail.com","8947893892","mdu","tamilnadu")
const person2 = new personDetails("aadhan","27","wxxxw@gmail.com","8947834542","dgl","tamilnadu")


console.log(person1);
console.log(person2);


// 4 uber price






class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile) {
      this.baseFare = baseFare;
      this.costPerMinute = costPerMinute;
      this.costPerMile = costPerMile;
    }
 
    calculatePrice(distance, duration) {
      const fare = this.baseFare + (this.costPerMinute * duration) + (this.costPerMile * distance);
      return fare.toFixed(2);
    }
  }
 
  const calculator = new UberPriceCalculator(2.5, 0.3, 1.1);
  const distance = 5.2;
  const duration = 15;
 
  const price = calculator.calculatePrice(distance, duration);
  console.log(price);








// array function






function handleData(){
   let e= (JSON.parse(this.response));


   




// filter used to find countries in asia
// 1.


//-----------------------------------------------------------------------------------


   const Asia=e.filter(function(asia){
    return asia.region==="Asia";
   })
console.log(Asia)


//-----------------------------------------------------------------------------------


// 2 population less than 200000


const pop=e.filter(function(population){
    return population.population <"200000";
   })
console.log(pop)


// 4 total population


const total=e.reduce(function(total,country){
    return total+country.population;
   },0)
console.log(total)










// 3 details of countries


for (e of e){
    console.log(e.name.common,e.capital,e.flags)
}
console.lof(e)






// 5  countries using USD




const US=e.filter(country => {
    let currencies=country.currencies;
    return currencies&&currencies.USD;
}
);
    console.log(US)








}






const req = new XMLHttpRequest();
req.addEventListener("load",handleData)
req.open("GET","https://restcountries.com/v3.1/all")
req.send();

