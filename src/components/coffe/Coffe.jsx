import { React, useEffect, useState } from 'react'
import "./coffe.css"
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

    return (
        <>
            <div className="cardss">
                <h2 className="title-cards">Novedades</h2>
                <div className="card-wrapper2">
                    {coffes?.slice(0, 4).map((coffe, i) => {
                        return (
                            <div className='product-card card' key={i}>
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