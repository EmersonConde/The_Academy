import { useState } from 'react'
import React from "react";
import academyLogo from '/academy-img.png'
import './App.css'
import tela_principal from './App.jsx'

export function Menu(){
    return (
        <>
        <header>
        <a onClick={tela_principal} href='#' id='logo'>
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

export function MenuMobile(){
    return (
        <>
        <header>
        <a onClick={tela_principal} href='#' id='logo'>
            <img src={academyLogo} alt="Academy Logo" />
        </a>
        </header>
        </>
    )
}