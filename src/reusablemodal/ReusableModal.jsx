import React from 'react'

const ReusableModal = ({isOpen, isClose, value}) => {
    if(!isOpen) return null
  return (
    <div style={styles.overlay} onClick={isClose}>
        <div style={styles.modal} onClick={(e)=> e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={isClose}>X</button>
        <h1>{value}</h1>
        </div>
    </div>
  )
}

const styles ={
    overlay:{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(0,0,0,0.3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        background: "#fff",
        padding: "20px",
        borderRadius: "8px",
        position: "relative",
        minWidth: "300px",
      },
      closeBtn: {
        position: "absolute",
        top: "10px",
        right: "10px",
        cursor: "pointer",
      },
}

export default ReusableModal
