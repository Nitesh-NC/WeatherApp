/* eslint-disable react/prop-types */


const Forecast = ({data}) => {
    return(
        <>
        <div className="flex gap-5">
        <div className=" bg-gradient-to-r from-orange-50 to to-orange-100 w-14 p-2 w rounded-full mt-4">
            <p className="text-slate-600 text-center"> {data.list[0].dt_txt.split(" ")[1].slice(0,5)}</p>
            <img src={`icons/${data.list[0].weather[0].icon}.png`} alt="" />
            <p className="text-center">{Math.round(data.list[0].main.temp)}<span className="text-sm align-top">°C</span></p>
        </div>
        <div className=" bg-gradient-to-r from-orange-50 to to-orange-100 w-14 p-2 w rounded-full mt-4">
            <p className="text-slate-600 text-center"> {data.list[1].dt_txt.split(" ")[1].slice(0,5)}</p>
            <img src={`icons/${data.list[1].weather[0].icon}.png`} alt="" />
            <p className="text-center">{Math.round(data.list[1].main.temp)}<span className="text-sm align-top">°C</span></p>
        </div>
        <div className=" bg-gradient-to-r from-orange-50 to to-orange-100 w-14 p-2 w rounded-full mt-4">
            <p className="text-slate-600 text-center"> {data.list[2].dt_txt.split(" ")[1].slice(0,5)}</p>
            <img src={`icons/${data.list[2].weather[0].icon}.png`} alt="" />
            <p className="text-center">{Math.round(data.list[2].main.temp)}<span className="text-sm align-top">°C</span></p>
        </div>
        <div className=" bg-gradient-to-r from-orange-50 to to-orange-100 w-14 p-2 w rounded-full mt-4">
            <p className="text-slate-600 text-center"> {data.list[3].dt_txt.split(" ")[1].slice(0,5)}</p>
            <img src={`icons/${data.list[3].weather[0].icon}.png`} alt="" />
            <p className="text-center">{Math.round(data.list[3].main.temp)}<span className="text-sm align-top">°C</span></p>
        </div>
        <div className=" bg-gradient-to-r from-orange-50 to to-orange-100 w-14 p-2 w rounded-full mt-4">
            <p className="text-slate-600 text-center"> {data.list[4].dt_txt.split(" ")[1].slice(0,5)}</p>
            <img src={`icons/${data.list[4].weather[0].icon}.png`} alt="" />
            <p className="text-center">{Math.round(data.list[4].main.temp)}<span className="text-sm align-top">°C</span></p>
        </div>
        <div className=" bg-gradient-to-r from-orange-50 to to-orange-100 w-14 p-2 w rounded-full mt-4">
            <p className="text-slate-600 text-center"> {data.list[5].dt_txt.split(" ")[1].slice(0,5)}</p>
            <img src={`icons/${data.list[5].weather[0].icon}.png`} alt="" />
            <p className="text-center">{Math.round(data.list[5].main.temp)}<span className="text-sm align-top">°C</span></p>
        </div>
        <div className=" bg-gradient-to-r from-orange-50 to to-orange-100 w-14 p-2 w rounded-full mt-4">
            <p className="text-slate-600 text-center"> {data.list[6].dt_txt.split(" ")[1].slice(0,5)}</p>
            <img src={`icons/${data.list[6].weather[0].icon}.png`} alt="" />
            <p className="text-center">{Math.round(data.list[6].main.temp)}<span className="text-sm align-top">°C</span></p>
        </div>
        </div>
        
        </>
    )
}

export default Forecast