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
                        </tr>
                    )
                }
                )}
            </tbody>

        </table>
    )
}

export default Cryptos