'use client'

import Image from 'next/image'
import {useState, useEffect} from 'react'
import { initSuperflow } from '@usesuperflow/client'


export default function Home() {
  let [selected,setSelected] = useState(0)
  let [color,setColor] = useState("linear-gradient(indigo,red)")

  useEffect(()=>{
    initSuperflow('ae90zQEl8AktXcIVNzGg', {
      projectId: '8632958633006737'
    });
  },[])

  return (
    <div class="flex h-screen w-screen items-center justify-center" style={{background:`${color}`}}>
    <div class="relative flex w-[40rem] flex-col justify-center overflow-hidden rounded-lg bg-white/50 py-32">
      <span class="absolute top-0 h-1 w-1/6 bg-blue-600"></span>
  
      <div class="flex flex-col items-center">
        <p class="text-lg font-medium text-gray-600">Hello, Oliver!</p>
        <h1 class="text-4xl font-medium text-gray-600">Let's get started</h1>
  
        <p class="mt-10 text-sm uppercase text-gray-600">Color Scheme</p>
        <div class="mt-3 flex space-x-3">
          <div onClick={() => setColor("linear-gradient(indigo, black)")} class="relative h-8 w-8 cursor-pointer overflow-hidden rounded-full bg-slate-800 shadow-lg shadow-gray-400/60 hover:scale-110">
            <span class="absolute h-full w-1/2 bg-indigo-600"></span>
          </div>
          <div onClick={() => setColor("linear-gradient(red, white)")} class="relative h-8 w-8 cursor-pointer overflow-hidden rounded-full bg-white shadow-lg shadow-gray-400/60 hover:scale-110">
            <span class="absolute h-full w-1/2 bg-rose-600"></span>
          </div>
          <div onClick={() => setColor("linear-gradient(black, orange)")} class="relative h-8 w-8 cursor-pointer overflow-hidden rounded-full bg-orange-600 shadow-lg shadow-gray-400/60 hover:scale-110">
            <span class="absolute h-full w-1/2 bg-slate-800"></span>
          </div>
        </div>
  
        <div class="mt-10 space-y-2">
          <h2 class="text-center text-sm uppercase text-gray-600">What role best fits you?</h2>
          <div onClick={()=>setSelected(0)} class="relative flex w-56 items-center justify-center rounded-full bg-gray-50 py-3 px-4 font-medium text-gray-700">
            <input class="peer hidden" type="radio" name="framework" id="framework1" checked={selected === 0}/>
            <label class="absolute top-0 h-full w-full cursor-pointer rounded-full border peer-checked:border-[#625df5]" for="framework1"> </label>
            <div class="absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-[#625df5] ring-offset-2 peer-checked:border-transparent peer-checked:bg-[#625df5] peer-checked:ring-2"></div>
            <span>Founder</span>
          </div>
          <div onClick={()=>setSelected(1)} class="relative flex w-56 items-center justify-center rounded-full bg-gray-50 py-3 px-4 font-medium text-gray-700">
            <input class="peer hidden" type="radio" name="framework" id="framework2" checked={selected === 1}/>
            <label class="absolute top-0 h-full w-full cursor-pointer rounded-full border peer-checked:border-blue-700" for="framework2"> </label>
            <div class="absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-700 ring-offset-2 peer-checked:border-transparent peer-checked:bg-[#625df5] peer-checked:ring-2"></div>
            <span>Marketer</span>
          </div>
          <div onClick={()=>setSelected(2)} class="relative flex w-56 items-center justify-center rounded-full bg-gray-50 py-3 px-4 font-medium text-gray-700">
            <input class="peer hidden" type="radio" name="framework" id="framework3" checked={selected === 2}/>
            <label class="absolute top-0 h-full w-full cursor-pointer rounded-full border peer-checked:border-blue-700" for="framework3"> </label>
            <div class="absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-700 ring-offset-2 peer-checked:border-transparent peer-checked:bg-[#625df5] peer-checked:ring-2"></div>
            <span>Designer</span>
          </div>
        </div>
  
        <button class="group mt-10 flex w-40 items-center justify-center rounded-lg bg-[#625df5] py-2 text-center font-bold text-white transition">
          Continue
          <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 h-4 w-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  
  )
}
