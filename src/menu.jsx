import { useState } from 'react'
import React from "react";
import academyLogo from '/academy-img.png'
import './App.css'
import tela_principal from './App.jsx'
import tela_palatines from './App.jsx'
import tela_maldições from './App.jsx'
import tela_habilidades from './App.jsx'
import tela_sistema from './App.jsx'

let open_menu;

export function Menu(){
    return (
        <>
        <header>
        <a onClick={tela_principal} href='' id='logo'>
            <img src={academyLogo} alt="Academy Logo" />
            <h1>ACADEMY</h1>
        </a>
        <nav>
            <button>Palatines</button>
            <button>Maldições</button>
            <button>Habilidades</button>
            <button>Sistema</button>
            </nav>
        </header>
        </>
    )
}

export function FloatingMenu(){
    open_menu = () => {
        if (document.getElementById('openned').style.display === "none"){
            document.getElementById('openned').style.display = "Block"
        } else {
            document.getElementById('openned').style.display = "none"
        }
    }
    return (
        <>
        <button onClick={open_menu} class='mobile'>
            <img src={academyLogo} alt="Academy Logo" />
        </button>
        </>
    )
}
export function MobileMenu() {
    return (
        <nav id='openned'>
            <button onClick={open_menu} class='mobile2'>
                <img src={academyLogo} alt="Academy Logo" />
            </button>
            <h1>Blades and Magic</h1>
            <h2>The Academy Menu</h2>
            <button>Palatines</button>
            <button>Maldições</button>
            <button>Habilidades</button>
            <button>Sistema</button>
        </nav>
    )
}