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
            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `} >
                <table class="shadow-2x1 font-[Poppins] border-2 border-cyan-200 w-6/12">
                    <thead className='text-white'>
                        <tr className='text-white'>
                            <td>Rank</td>
                            <td>Coin</td>
                            <td>name</td>
                            <td>symbol</td>
                            <td>Price</td>
                            <td>MarketCap</td>

                            <td>Volumen</td>
                            <td>Supply</td>
                        </tr>

                    </thead>
                    <tbody>
                        {saveCryptos.map((c) => {
                            return (
                                <tr className='text-white'>
                                    <td >
                                        {c.rank}
                                    </td>
                                    <td >
                                        <img src={c.image} className="w-[28px] h-[27px]" />
                                    </td>
                                    <td >
                                        {c.name}
                                    </td>

                                    <td >
                                        {c.symbol}
                                    </td>
                                    <td >
                                        {c.price}
                                    </td>
                                    <td >
                                        {c.marketCap}
                                    </td>
                                    <td >
                                        {c.volumen}
                                    </td>
                                    <td >
                                        {c.supply}
                                    </td>

                                </tr>
                            )
                        }
                        )}
                    </tbody>

                </table>
                <div className='absolute z-[0] w-[20%] h-[20%] top-0 pink__gradient ' />
                <div className='absolute z-[1] w-[30%] h-[30%] rounded-full bottom-40 pink__gradient ' />
                <div className='absolute z-[0] w-[30%] h-[40%] right-20 bottom-20 blue__gradient ' />
            </div>


            <div className='h-[40px] w-[30px] bg-black-gradient' >
                <Link to="/"  >
                    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins 
                          font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`} >
                        Back
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Cryptos