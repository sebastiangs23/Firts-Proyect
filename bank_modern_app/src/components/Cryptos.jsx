import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getAllCryptos } from "../store/actions"

import { Link } from "react-router-dom"

const Cryptos = () => {
    const dispatch = useDispatch();
    const saveCryptos = useSelector(state => state.cryptos);

    useEffect(() => {
        dispatch(getAllCryptos())
    }, [])

    return (
        <div>
            <table className='cryptos-conteiner h-[140px] bg-blue-gradient '>
                <thead>
                    <tr>
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
                            <tr>
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

            <div className='h-[40px] w-[30px] bg-black-gradient' >
                <Link to="/"  >
                    <button >
                        Back
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Cryptos