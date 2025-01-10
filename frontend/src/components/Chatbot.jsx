import React from 'react'

export default function Chatbot() {
  return (
    <div className="chatbot fixed right-6 bottom-6">
      <a href="/insightbot">
        <button className="p-2 h-[4rem] w-[4rem] rounded-full text-2xl bg-emerald-600 text-white"><i class="fa-solid fa-message"></i></button>
      </a>
    </div>
  )
}
