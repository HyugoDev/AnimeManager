import React, { useState } from 'react'
import { Formulario, SearchIcon } from '../../styles/Navbar/search.js'
import { useNavigate } from 'react-router-dom'
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt'


const Search = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${search}`)
  }

  return (
    <Formulario onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Buscar"
        onChange={handleChange}
      />
      <SearchIcon onClick={handleSubmit} >
        <SearchAlt size={25} />
      </SearchIcon>
    </Formulario>
  )
}

export default Search

