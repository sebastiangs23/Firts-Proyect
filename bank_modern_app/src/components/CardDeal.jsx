import React from 'react'
import { card } from "../assets"
import styles, { layout } from '../style'
import Button from './Button'


const CardDeal = () => {
  return (
    <section className={layout.section} >
      <div className={layout.sectionInfo} >
        <h2 className={styles.heading2} >need to chage this shit<br className='sm:block hidden' /> with my company blablab bla bla.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `} >
          FIND A GOOD DESCRIPTION ABOUT THE HOW THE USER CAN SE THEIR ACTIVITY   elit. Esse, non eaque deserunt tempore ad eum
          repudiandae aliquid unde quis corporis labore iste, veritatis optio molestias maiores ex quae. Possimus, aliquid!
        </p> 

        <Button styles="mt-10" /> {/*I guess ill need to create another button component */}
      </div>

      <div className={layout.sectionImg} >
        <img src={card} alt="card" className="w-[100%] h-[100%] "  />
      </div>



    </section>
  )
}

export default CardDeal