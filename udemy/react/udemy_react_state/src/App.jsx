import { Router } from "../routes/Router"
import { UserProvider } from "./providers/UserProvider"
export const App = () => {
  return (
    <UserProvider>
      <Router></Router>
    </UserProvider>
  )
}