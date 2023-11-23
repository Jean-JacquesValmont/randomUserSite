"use client"

import React, { useState } from "react"
import useFetch from "./CustomHook/UseFetch"
import Card from "./Components/Card"

export default function Home() {
  const dataRamdomUsers = useFetch("https://randomuser.me/api/?results=2")

  if (!dataRamdomUsers.results || dataRamdomUsers.results.length === 0) {
    // Les données ne sont pas encore disponibles
    return <div>Loading...</div>;
  }

  const cardsUser = dataRamdomUsers.results.map(item => {
    return (
        <Card
            key={dataRamdomUsers.results.indexOf(item)}
            item={item}
        />
    )
  })

  return (
    <main>
      <div>
        {cardsUser}
      </div>
    </main>
  )
}
