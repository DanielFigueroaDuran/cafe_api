import { React, useEffect, useState } from 'react'
//import "./coffe.css"
import  Arrow  from "../../assets/icon/Arrow.png";
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
                <h2 className="flex justify-center text-[rgb(42,91,69)]">Novedades</h2>
                <div className="flex justify-center gap-6 p-6">
                    {coffes?.slice(0, 4).map((coffe, i) => {
                        return (
                            <div className='flex p-6 rounde-lg border border-sky-[rgb(227, 211, 215)] ease-in hover:[rgb(227, 222, 215)]' key={i}>
                                <div className='container-card images-cafe cardCafe'>
                                    <img className='cafeImg' src={coffe.img_url} alt="coffe" />
                                    <div className='tex'>
                                        <p className='paragraph paragraph-card'>{coffe.brand}</p>
                                        <p className='price'>{coffe.price},00 €</p>
                                    </div>

                                    <Button
                                        className={'button-caja button-cafe'}
                                        label={'Añadir'}
                                        handleClick={handleClick}
                                    />
                                </div>
                            </div>
                        )
                    })}

                </div>

                <Show
                    className={'footer-card'}
                    link={'Tienda'}
                    label={'Ver Todos'}
                 icon={Arrow}
                />
            </div>
        </>
    )
}

export default Coffe