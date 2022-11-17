import React from 'react'
import styles from '../style'
import { discount, robot } from "../assets"
import GetStarted from "./GetStarted"

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`} >
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `} >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 " >
          <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph}`} >
            <span className='text-white'> Security </span>
            for {" "}
            <span className='text-white'> your </span>
            Crypto
            <span className='text-white'> Wallet </span>
          </p>

        </div>


        <div className='flex flex-row justify-between items-center w-full' >
          <h1 className='flex-1 font-poppins font-semibold ss:text-[62px]
                       text-[52px] text-white ss:leading-[100px] ' >
            Best {" "}
            <span className='text-gradient'>
              Cryptocurrency <br className='sm:block hidden' /> {" "}
            </span> {" "}
            software to connect with {" "}
          </h1>

          <div className='ss:flex hidden md:mr-4 mr-0' >
            <GetStarted />
          </div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[62px]
                       text-[52px] text-white ss:leading-[100px] w-full ' >
          <span className='text-gradient'>
            BlockChain.
          </span>
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5 `} >
          The next generation of transferring digital assets through blockchain, with low gas fee costs and protocols
          that support up to 50,000 transactions per second also you can get a TREZOR to feel more secure.
        </p>

      </div>
    </section>
  )
}

export default Hero