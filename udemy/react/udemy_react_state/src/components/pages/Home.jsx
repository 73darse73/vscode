import { DefaultLayout } from "../templates/DefaultLayout"
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate();
    const onClickAdmin = () => {
        navigate("/userlist", {state: { isAdmin: true }})
    };
    const onClickGeneral = () => {
        navigate("/userlist", {state: { isAdmin: false }})
    };
    return(
        <DefaultLayout>
            <h1>Home</h1>
            <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
            <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
        </DefaultLayout>
    )
}