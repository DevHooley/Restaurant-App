import React from "react"
import falafel from "../../assets/images/falafel.jpg"
import pastaSalad from "../../assets/images/pastaSalad.jpg"

const section = "rounded-md  mx-auto bg-sky-200 shadow-md"
const H2 =
  "text-slate-800 text-xl text-center mx-auto w-64 capitalize"
const Paragraph =
  "rounded-sm text-center grid grid-cols-2 text-left text-sm "
const imgFalafel = "w-64 p-2"
const pasta = "w-64 p-2"

function Menu() {
  return (
    <div className="mx-auto mt-5 w-8/12">
      <section className={section}>
        <h2 className={H2}>falafel</h2>
        <p className={Paragraph}>
          <img
            className={imgFalafel}
            src={falafel}
            alt="A plate of falafel"
          />
          deep-fried balls made from chickpeas & fava beans,
          plus fresh herbs and spices.
        </p>
        <h2 className={H2}>pasta salad</h2>
        <p className={Paragraph}>
          <img src={pastaSalad} className={pasta} alt="" />A
          mashup between Greek and Italian pasta salad,
          Kalamata olives, green olives, mozzarella cheese,
          three herb italian pasta{" "}
        </p>
      </section>
    </div>
  )
}

export default Menu
