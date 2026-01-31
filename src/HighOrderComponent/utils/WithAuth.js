export const WithAuth=(Component)=>{
    const isAuth = true;
    return function(props){
        if(isAuth){
            return <Component {...props} />
        }
        else{
          return  <p>Please Login</p>
        }
    }
}