import { React, useEffect, useState } from 'react'
//import "./coffe.css"
import Arrow from "../../assets/icon/Arrow.png";
import { getData } from "../helpers/Data.js";
import Button from './Button.jsx';
import Show from './Show';


const Coffe = () => {
    const [coffes, setCoffes] = useState([]);

    //console.log(coffes);
    const apiCoffe = `https://cafe-de-altura.vercel.app/api/products`;

    useEffect(() => {
        getData(apiCoffe).then(data => setCoffes(data));
    }, []);

    const handleClick = () => {
        //console.log('hola');
    };
    //cardss
    return (
        <>
            <div className="flex flex-col p-4 gap-10">
                <h2 className="flex justify-center text-[rgb(42,91,69)] font-medium text-xl leading-7 ">Novedades</h2>
                <div className="flex justify-center gap-6 p-6">
                    {coffes?.slice(0, 4).map((coffe, i) => {
                        return (
                            <div className='flex p-6 rounde-lg border border-sky-[rgb(227, 211, 215)]
                             transition-all duration-300 hover:bg-slate-200' 
                             key={i}>
                                <div className='flex flex-col items-center gap-6'>
                                    <img className='' src={coffe.img_url} alt="coffe" />
                                    <div className='flex flex-col items-center gap-3'>
                                        <p className='font-semibold text-sm leading-4 text-slate-950 '>{coffe.brand}</p>
                                        <p className='flex w-[54px] h-[24px] text-slate-950'>{coffe.price},00 €</p>
                                    </div>

                                    <Button
                                        className={'bg-[#2a5b45b2] rounded-sm p-2 border-none text-slate-50 hover:bg-[#2a5b4] button-cafe'}
                                        label={'Añadir'}
                                        handleClick={handleClick}
                                    />
                                </div>
                            </div>
                        )
                    })}

                </div>

                <Show
                    className={'flex justify-center items-center gap-1 decoration-slate-950'}
                    link={'Tienda'}
                    label={'Ver Todos'}
                    icon={Arrow}
                />
            </div>
        </>
    )
}

export default Coffe