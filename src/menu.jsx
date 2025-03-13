import { useState } from 'react'
import React from "react";
import academyLogo from '/academy-img.png'
import './App.css'
import tela_principal from './App.jsx'
import tela_palatines from './App.jsx'
import tela_maldições from './App.jsx'
import tela_habilidades from './App.jsx'
import tela_itens from './App.jsx'

let open_menu;

export function Menu({tela_principal, tela_palatines, tela_maldições, tela_habilidades, tela_itens}){
    return (
        <>
        <header>
        <a onClick={tela_principal} href='' id='logo'>
            <img src={academyLogo} alt="Academy Logo" />
            <h1>ACADEMY</h1>
        </a>
        <nav>
            <button onClick={tela_palatines}>Palatines</button>
            <button onClick={tela_maldições}>Maldições</button>
            <button onClick={tela_habilidades}>Habilidades</button>
            <button onClick={tela_itens}>Itens</button>
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
export function MobileMenu({tela_principal, tela_palatines, tela_maldições, tela_habilidades, tela_itens}) {
    return (
        <nav id='openned'>
            <button  onClick={open_menu} class='mobile2'>
                <img src={academyLogo} alt="Academy Logo" />
            </button>
            <h1>Blades and Magic</h1>
            <h2>The Academy Menu</h2>
            <button class="buttoni" onClick={tela_principal}>Principal</button>
            <button class="buttoni" onClick={tela_palatines}>Palatines</button>
            <button class="buttoni" onClick={tela_maldições}>Maldições</button>
            <button class="buttoni" onClick={tela_habilidades}>Habilidades</button>
            <button class="buttoni" onClick={tela_itens}>Itens</button>
            <h3 class="mt-100 mb-5">v0.1.2 - By Émerson Conde</h3>
        </nav>
    )
}