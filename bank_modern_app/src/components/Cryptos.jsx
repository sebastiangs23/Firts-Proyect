import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getAllCryptos } from "../store/actions"

const Cryptos = () => {
    const dispatch = useDispatch();
    const saveCryptos = useSelector(state => state.cryptos);

    useEffect(() => {
        dispatch(getAllCryptos())
    }, [])

    return (
        <table className='cryptos-conteiner h-[140px] bg-blue-gradient '>
            <thead>
                <tr>
                    <td>name</td>
                    <td>symbol</td>
                    <td>Price</td>
                    <td>MarketCap</td>
                    <td>Rank</td>
                    <td>Volumen</td>
                    <td>Supply</td>
                </tr>

            </thead>
            <tbody>
                {saveCryptos.map((c) => {
                    return (
                        <tr>
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
                                {c.rank}
                            </td>
                            <td >
                                {c.volumen}
                            </td>
                            <td >
                                {c.supply}
                            </td>

                            <td >
                                <img src={c.image} />
                            </td>
                        </tr>
                    )
                }
                )}
            </tbody>

        </table>
    )
}

export default Cryptos