import React from 'react'
import { data } from '../restApi.json'


const Menu = () => {
    return (
        <section className='menu' id='menu'>
            <div className='container'>
                <div className='heading_section'>
                    <h1 className='heading'>POPULAR DISHES</h1>
                    <p>Voluptate consectetur nostrud elit aliqua cillum do id tempor cupidatat in elit.</p>
                </div>
                <div className='dishes_container'>
                    {
                        data[0].dishes.map(ele => {
                            return (
                                <div className='card' key={ele.id}>
                                    <img src={ele.image} alt={ele.title} />
                                    <h3 className='title'>{ele.title}</h3>
                                    <button>{ele.category}</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Menu