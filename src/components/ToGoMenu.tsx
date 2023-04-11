import React from "react";
const section = "rounded-md  mx-auto bg-sky-200 shadow-md";
const H2 = "text-slate-800 text-xl text-center mx-auto w-64 capitalize";
const Paragraph = "text-center text-sm";

function ToGoMenu() {
  return (
    <div>
      <div className="mt-5">
        <section className={section}>
          <h2 className={H2}>falafel</h2>
          <p className={Paragraph}>
            deep-fried balls made from chickpeas & fava beans, plus fresh herbs
            and spices.
          </p>
          <h2 className={H2}>pasta salad</h2>
          <p className={Paragraph}>
            at, quidem cum excepturi autem minus doloremque? Sed minima nesciunt
            porro officia atque, in amet natus voluptas similique cum? Dolore
            minima assumenda optio accusamus nesciunt, delectus doloribus
            laudantium id dolorem, porro unde deserunt iusto animi neque a nulla
            tenetur consectetur consequuntur obcaecati provident rerum. Veniam
            magni quisquam a!
          </p>
        </section>
      </div>
    </div>
  );
}

export default ToGoMenu;
