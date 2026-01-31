import React, { lazy, Suspense } from 'react'
// import GetUsersapi from './GetUsersapi'

const GetUsersapi = lazy(()=> import("./GetUsersapi"))
const ShowingFile = () => {
  return (
    <div>
        <Suspense fallback={"Loading"}>
        <GetUsersapi />
        </Suspense>
    </div>
  )
}

export default ShowingFile
