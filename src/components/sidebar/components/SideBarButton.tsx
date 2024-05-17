'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '../../ui/button'
import { useSelectedLayoutSegments } from 'next/navigation'
import { useSideBarControl } from '@/contexts/SideBarContext'


const SideBarButton = ({icon, text, link, root}:{
    icon: React.ReactNode,
    text: string,
    link: string, 
    root: string
}) => {
    const {toggle} = useSideBarControl()
    const segments = useSelectedLayoutSegments()
    const length = segments.length
    let url
    if(root==='dashboard'){
        url= `/dashboard/${link}`
    }
    else{
        url= `/project-details/${segments[1]}/${link}`;
    }
  return (
    <Link className={`${segments[length-1]==link ? 'active' : ''}`} href={url}>
        <Button onClick={toggle} variant="ghost"
            className={`${segments[length-1]==link ? 'bg-gradient-to-tr from-gray-900 to-gray-800 text-white hover:text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85]' 
            : 'text-[#607D8B] hover:bg-[#607D8B]/10 active:bg-[#607D8B]/30'} w-full h-auto flex items-center gap-4 px-4 py-3 capitalize justify-start`}>
            {
                icon
            }
            <p className="block font-sans antialiased text-base leading-relaxed text-inherit font-medium capitalize">
                {text}
            </p>
        </Button>
    </Link>
  )
}

export default SideBarButton
