import { Card } from "../atoms/card/Card"
import { useLocation } from "react-router-dom"

const users = [...Array(10).keys()].map((val) => {
    return {
        key: val,
        name: `${val}_darse`,
        src: "https://user0514.cdnw.net/shared/img/thumb/wanwanAPP90128_TP_V.jpg",
    }
})

console.log(users);


export const CardList = () => {
    const { state } = useLocation();
    const isAdmin = state ? state.isAdmin : false;
    console.log(isAdmin);
    
    
    return(
        <>
            { users.map((user) => {
                return( 
                    <Card key={user.key} name={user.name} src={user.src}/>
                )
            })}
        </>
    )
}