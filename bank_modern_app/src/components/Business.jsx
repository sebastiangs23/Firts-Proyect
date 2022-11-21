import React from 'react'
import styles, { layout } from '../style'
import Button from "./Button"
import { features } from "../constants"

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="learn" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You have the possibility , <br className="sm:block hidden" /> to learn how to trade properly.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `} >
          Improve your finantial life, investing in the best projects and protocols that are changing the world throgh their new tecnologies.
          You can have a part of your portfolio in stablecoins until you feel confident with the inverst you will make.
        </p>

        <Button styles={`mt-10`}  />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>



    </section>
  )
}

export default Business