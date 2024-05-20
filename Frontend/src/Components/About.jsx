import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const About = () => {
    return (
        <section className='about' id='about'>
            <div className='container'>
                <div className='banner'>
                    <div className='top'>
                        <h1 className='heading'>About us</h1>
                        <p>The only thing we're serious abuout is food</p>
                    </div>
                    <p className='mid'>
                        Dolore anim in aliqua aliquip anim elit voluptate qui cillum do. Elit irure velit sint cillum ea aliqua dolore aute est ullamco dolor. Deserunt sint dolore elit deserunt commodo reprehenderit consequat enim commodo. Qui minim sint velit deserunt magna ex aliquip sint ea magna. Incididunt culpa sint enim sunt exercitation cillum amet dolor enim quis.
                    </p>
                    <Link to={"/"}>Explore Menu
                        <span>
                            <HiOutlineArrowNarrowRight />
                        </span>
                    </Link>
                </div>
                <div className='banner'>
                    <img src='/about.png' alt='about'/>
                </div>
            </div>
        </section>
    )
}

export default About