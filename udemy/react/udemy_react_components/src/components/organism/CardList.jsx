import { Card } from "../atoms/card/Card"

const users = [...Array(10).keys()].map((val) => {
    return {
        id: val,
        name: `${val}_darse`,
        image: "https://images.unsplash.com/photo-1494947665470-20322015e3a8?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
})

console.log(users);


export const CardList = () => {
    return(
        <>
            { users.map((user) => {
                return( 
                    <Card key={user.id} name={user.name} image={user.image}/>
                )
            })}
        </>
    )
}