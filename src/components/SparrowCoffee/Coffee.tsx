import coffee from "./CoffeeData"

const Notes = "text-xs text-slate-500 text-[#a99765]"
const Info = "text-white"
export default function SparrowCoffee() {
  return (
    <div className="mx-auto  mt-5 rounded-sm">
      <ul className="mx-auto grid grid-cols-1 gap-2 rounded-md  text-center shadow-md md:grid-cols-2 xl:grid-cols-4">
        {coffee.map((coffee: any) => (
          <li key={coffee.email} className="">
            <img className="h-auto" src={coffee.image} alt="Espresso" />
            <div className="">
              <h1 className="text-sm font-medium">{coffee.name}</h1>
              <p className="text-white">{coffee.price}</p>
              <p className="w-auto text-xs text-white">{coffee.description}</p>
              <div className="grid grid-cols-3">
                <p className={Notes}>
                  Flavor: <span className={Info}>{coffee.flavor}</span>
                </p>
                <p className={Notes}>
                  Clarity: <span className={Info}>{coffee.Clarity}</span>
                </p>
                <p className={Notes}>
                  Acidity: <span className={Info}>{coffee.Acidity}</span>
                </p>
                <p className={Notes}>
                  Body: <span className={Info}>{coffee.Body}</span>
                </p>
                <p className={Notes}>
                  Development: <span className={Info}>{coffee.Development}</span>
                </p>
                <p className={Notes}>
                  After Taste: <span className={Info}>{coffee.Aftertaste}</span>
                </p>
                <p className={Notes}>
                  Processed: <span className={Info}>{coffee.Processed}</span>
                </p>
                <p className={Notes}>
                  Varietal <span className={Info}>{coffee.Varietal}</span>
                </p>
                <div>
                  <p className={Notes}>
                    Flavor Profile: <span className={Info}>{coffee.FlavorProfile}</span>
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
