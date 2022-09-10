// import { useUser } from '@auth0/nextjs-auth0'
// import styled from 'styled-components'
// import { Image } from 'react-bootstrap'
// import React from 'react'
// import Link from 'next/link'

// const Profil = () => {
//   const { user } = useUser()
//   return (
//     <>
//       <DivImages>
//       {
//          user.picture
//            ? (
//           <Image
//           src={user.picture}
//           height="85"
//           width="90"
//           alt=""
//           roundedCircle
//           loading="lazy"
//         />
//              )
//            : (
//                null
//              )
//       }

//       </DivImages>
//       <DivName>
//         <h1>{user.name}</h1>
//         <Link href="/perfil/animes/ver-despues">
//           <a>Ver Después</a>
//         </Link>
//         <Link href="/perfil/animes/favoritos">
//           <a>Favoritos</a>
//         </Link>
//         <Link href="/perfil/animes/vistos">
//           <a>Vistos</a>
//         </Link>
//         <Link href="/api/auth/logout">
//           <a>Cerrar Sesión</a>
//         </Link>
//       </DivName>
//     </>
//   )
// }

// export default React.memo(Profil)

// const DivImages = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 50px;
// `

// const DivName = styled.div`
//   display: grid;
//   justify-content: center;
//   text-align: center;

//   h1 {
//     font-size: 20px;
//     margin-top: 5px;
//     font-weight: bold;
//   }

//   a {
//     font-weight: bold;
//     text-decoration: none;
//     color: #fff;
//     margin-top: 10px;
//   }
// `
