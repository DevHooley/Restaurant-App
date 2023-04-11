import React from "react"
import Menu from "./Menu"
import { Route, Routes, Link } from "react-router-dom"
import ToGoMenu from "./ToGoMenu"
import Form from "./Form"
import People from "../SparrowCoffee/Coffee"
import { useState } from "react"

const Nav =
  "text-center grid grid-cols-4 lg:grid-cols-4 gap mx-auto   rounded-md shadow-md bg-[#A99765] p-1 "
const header = "text-2xl text-center  text-slate-800 capitalize"

function Header() {
  return (
    <div className="mx-auto  p-5">
      <nav className={Nav}>
        <Link to="/" className={header}>
          coffee
        </Link>
        <Link to="/Main-menu" className={header}>
          Main menu
        </Link>
        <Link to="/to-go-menu" className={header}>
          To go Menu
        </Link>
        <Link to="/User" className={header}>
          User
        </Link>
      </nav>
      <Routes>
        <Route path="/Main-menu" element={<Menu />} />
        <Route path="/to-go-menu" element={<ToGoMenu />} />
        <Route path="/User" element={<Form />} />
        <Route path="/" element={<People />} />
      </Routes>
    </div>
  )
}

export default Header
