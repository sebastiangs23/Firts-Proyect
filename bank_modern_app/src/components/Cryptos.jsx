import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getAllCryptos } from "../store/actions"
import styles from '../style'

import { Link } from "react-router-dom"

const Cryptos = () => {
    const dispatch = useDispatch();
    const saveCryptos = useSelector(state => state.cryptos);

    useEffect(() => {
        dispatch(getAllCryptos())
    }, [])

    return (
        <div className='bg-primary w-full overflow-hidden'>
            <div className='absolute z-[0] w-[40%] h-[40%] right-550 bottom-20 top-50 pink__gradient' />
            <div className='absolute z-[1] w-[40%] h-[50%] right-250 bottom-20 top-50 rounded-full bottom-40 pink__gradient ' />

            

            <div className='h-[60px] w-[50px] bg-black-gradient' >
                <Link to="/"  >
                    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins 
                          font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`} >
                        Back
                    </button>
                </Link>
            </div>
            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `} >
                <table class="shadow-2x1 font-[Poppins]  w-6/12">
                    <thead className='text-white '>
                        <tr className='text-white  hover:bg-cyan-100 hover:scale-105 flex flex-row p-6 rounded-[20px] feature-card'>
                            <td className='py-8 px-4'>Rank</td>
                            <td className='py-8 px-4'>Coin</td>
                            <td className='py-8 px-4'>name</td>
                            <td className='py-8 px-4'>symbol</td>
                            <td className='py-8 px-4'>Price</td>
                            <td className='py-8 px-4'>MarketCap</td>
                            <td className='py-8 px-4'>Volumen</td>
                            <td className='py-8 px-4'>Supply</td>
                        </tr>

                    </thead>
                    <tbody>
                        {saveCryptos.map((c) => {
                            return (
                                <tr className='text-white sm:mr-5 mr-0  hover:bg-cyan-100 hover:scale-105 flex flex-row p-6 rounded-[20px]  feature-card'>
                                    <td className='py-8 px-4'>
                                        {c.rank}
                                    </td  >
                                    <td className='py-8 px-4'>
                                        <img src={c.image} className="w-[28px] h-[27px]" />
                                    </td>
                                    <td className='py-8 px-4'>
                                        {c.name}
                                    </td>

                                    <td className='py-8 px-4'>
                                        {c.symbol}
                                    </td>
                                    <td className='py-8 px-4'>
                                        {c.price}
                                    </td>
                                    <td className='py-8 px-4'>
                                        {c.marketCap}
                                    </td>
                                    <td className='py-8 px-4'>
                                        {c.volumen}
                                    </td>
                                    <td className='py-8 px-4'>
                                        {c.supply}
                                    </td>

                                </tr>
                            )
                        }
                        )}
                    </tbody>
                    

                </table>

                <div className='absolute z-[0] w-[30%] h-[40%] right-20 bottom-20 blue__gradient ' />
            </div>




        </div>
    )
}

export default Cryptos