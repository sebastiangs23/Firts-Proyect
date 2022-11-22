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



        <div className='bg-primary overflow-hidden  '>
            <div className='absolute z-[0] w-[25%] h-[10%] right-550 bottom-20 top-50 pink__gradient' />
            <div className='absolute z-[1] w-[25%] h-[20%] right-250 bottom-20 top-50 rounded-full bottom-40 pink__gradient ' />



            <div class="flex justify-center items-center h-[112px] " >
                <Link to="/" >
                    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins 
                          font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`} >
                        Back
                    </button>
                </Link>
            </div>

            <div className='overflow-auto rounded-lg shadow hidden md:block'>
                <div class="flex justify-center overflow-auto rounded-lg ">
                    <table class="shadow-2x1 font-[Poppins]  w-6/12">
                        <thead className='text-white '>
                            <tr className='text-white  hover:bg-cyan-100 hover:scale-105 flex flex-row p-6 rounded-[20px] feature-card font-bold'>
                                <td className='py-8 px-4 text-white-800 bg-gray-200 rounded-lg bg-opacity-50 whitespace-nowrap'>Rank</td>
                                <td className='py-8 px-4 whitespace-nowrap '>Coin</td>
                                <td className='py-8 px-4 whitespace-nowrap'>Name</td>
                                <td className='py-8 px-4 whitespace-nowrap'>Symbol</td>
                                <td className='py-8 px-4 whitespace-nowrap'>Price</td>
                                <td className='py-8 px-4 whitespace-nowrap'>MarketCap</td>
                                <td className='py-8 px-4 whitespace-nowrap'>Volumen</td>
                                <td className='py-8 px-4 whitespace-nowrap'>Supply</td>
                            </tr>

                        </thead>
                        <tbody>
                            {saveCryptos.map((c) => {
                                return (
                                    <tr className='text-white sm:mr-5 mr-0  hover:bg-cyan-100 hover:scale-105 flex flex-row p-6 rounded-[20px]  feature-card'>
                                        <td className='py-8 px-4 font-semibold  whitespace-nowrap'>
                                            {c.rank}
                                        </td  >
                                        <td className='py-8 px-4 whitespace-nowrap'>
                                            <img src={c.image} className="w-[28px] h-[27px]" />
                                        </td>
                                        <td className='py-8 px-4 font-semibold  whitespace-nowrap'>
                                            {c.name}
                                        </td>

                                        <td className='py-8 px-4 font-semibold whitespace-nowrap'>
                                            {c.symbol}
                                        </td>
                                        <td className='py-8 px-4 whitespace-nowrap'>
                                            {c.price}
                                        </td>
                                        <td className='py-8 px-4 whitespace-nowrap'>
                                            {c.marketCap}
                                        </td>
                                        <td className='py-8 px-4 whitespace-nowrap'>
                                            {c.volumen}
                                        </td>
                                        <td className='py-8 px-4 whitespace-nowrap'>
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


            <div className='grid grid-cols-1 gap-4 md:hidden' >
                <div className='absolute z-[0] w-[75%] h-[80%]  blue__gradient ' />


                <div className=' p-4 rounded-lg shadow' > //chage
                    <div className='text-white sm:mr-5 mr-0 hoverscale-105 flex flex-row p-6 rounded-[20px] feature-card space-x-5' >
                        <div>Rank</div>
                        <div>Coin</div>
                        <div>Name</div>
                        <div>Symbol</div>
                        <div>Price</div>
                    </div>
                    <div className='flex items-center space-x-2 text-sm' >
                        <div>
                            {saveCryptos.map((c) => {
                                return (
                                    <div className='text-white sm:mr-5 mr-0 hoverscale-105 flex flex-row p-6 rounded-[20px] feature-card space-x-9'>
                                        <div  >
                                            {c.rank}
                                        </div  >
                                        <div  >
                                            <img src={c.image} className="w-[23px] h-[22px]" />
                                        </div>
                                        <div >
                                            {c.name}
                                        </div>

                                        <div  >
                                            {c.symbol}
                                        </div>
                                        <div  >
                                            {c.price}
                                        </div>

                                    </div>
                                )
                            }
                            )}
                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default Cryptos