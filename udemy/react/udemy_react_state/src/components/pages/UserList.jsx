import { HeaderOnly } from "../templates/HeaderOnly"
import { CardList } from "../organism/CardList"
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

export const UserList = () => {
    const { userInfo, setUserInfo } = useContext(UserContext);
    const onClickSwitch = () => {
        setUserInfo({ isAdmin: !userInfo.isAdmin });
    }
    return(
        <HeaderOnly>
            <h1>UserList</h1>
            <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
            <CardList></CardList>
        </HeaderOnly>
    )
}