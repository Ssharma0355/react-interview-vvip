import React, { useReducer } from 'react'

const initialState = {
  name: "",
  email: "",
  address: ""
}

const reducer = (state, action) => {
  return {
    ...state,
    [action.type]: action.value
  }
}

const ReducerI = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log(state)

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) =>
          dispatch({ type: "name", value: e.target.value })
        }
      />
      <br />

      <input
        type="text"
        placeholder="Email"
        onChange={(e) =>
          dispatch({ type: "email", value: e.target.value })
        }
      />
      <br />

      <input
        type="text"
        placeholder="Address"
        onChange={(e) =>
          dispatch({ type: "address", value: e.target.value })
        }
      />
    </div>
  )
}

export default ReducerI
