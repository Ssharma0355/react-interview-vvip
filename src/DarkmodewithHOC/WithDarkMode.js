export const WithDarkMode=(Component)=>{
    const styles={
        backgroundColor:"#212529",
        color:"#eee"

    };
   return (props)=>{
        return <div className={styles}><Component {...props}/></div> 
    }
}