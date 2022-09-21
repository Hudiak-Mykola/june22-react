import {carService} from "../../services";

function Car({car,setCars}) {
    const {id,year,price, model} = car;
    const deleteCar = async () => {
      await carService.deleteById(id)
        setCars(cars=>{
           const index  = cars.findIndex(value => value.id === id)
            cars.splice(index,1)
            return[...cars]

        })
    }
   return(
        <div>
          id: {id} <br/> price: {price} <br/>  year: {year} <br/>model: {model}
            <button onClick={()=>deleteCar( )}>delete</button>
            <button>update</button>

        </div>
    );
}

export default Car;