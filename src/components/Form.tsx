import React from "react";
const btn = "border rounded-md border-slate-300 w-24";
const input = " border rounded-md mb-2 border-slate-300 w-32 ";
function Form() {
  return (
    <div className="gap grid grid-cols-3 rounded-md   bg-sky-100 p-5 shadow-md">
      <form className="row-auto grid" action="/registration" method="POST">
        <label className="" htmlFor="username">
          Username:<br></br>
        </label>
        <input
          placeholder="  username"
          className={input}
          type="text"
          name="username"
        />
        <label className="" htmlFor="password">
          Password:<br></br>
        </label>
        <input placeholder="  password" className={input} type="password" />
        <a>
          <input type="submit" className={btn} name="" id="" />
        </a>
      </form>
    </div>
  );
}

export default Form;
