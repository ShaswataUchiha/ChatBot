import React, { useContext, useState } from 'react'
import "./Sidebar.css"
import { assets } from '../../assets/assets'
import { Context } from '../../context/ContextAPI'
import { TiThMenu } from "react-icons/ti";
import { FaRegMessage } from "react-icons/fa6";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdHistory } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

const Sidebar = () => {

  const [extended, setExtended] =  useState(false)  
  const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context)

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className='sidebar'>
        <div className='top'>
            <TiThMenu onClick={() => setExtended(value => !value)} className='menu' />
            <div onClick={() => newChat()} className='new-chat'>
                <img src={assets.plus_icon}/>
                {extended ? <p>New Chat</p> : null}
            </div>
            {
                extended ?
                <div className='recent'>
                 <p className='recrnt-title'>Recent</p>
                  {
                    prevPrompts.map((item, index) => {
                        return (
                            <div onClick={() => loadPrompt(item)} className='recent-entry'>
                                <FaRegMessage />
                                <p>{item.slice(0, 18)} ...</p>
                            </div>
                        )
                    })
                  }  

                
                </div>
                : null
            }
        </div>
        <div className='bottom'>
            <div className='bottomm-item recent-entry'>
                <IoIosHelpCircleOutline className='icon' />
                {extended ? <p>Help</p> : null}
            </div>
            <div className='bottomm-item recent-entry'>
                <MdHistory className='icon'/>
                {extended ? <p>Activity</p> : null}
            </div>
            <div className='bottomm-item recent-entry'>
                <CiSettings className='icon'/>
                {extended ? <p>Settings</p> : null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar