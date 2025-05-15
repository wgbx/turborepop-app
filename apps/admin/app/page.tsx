import { routerKeys } from 'constant'
import { redirectTo } from 'utils'

export default function Home() {
  redirectTo(routerKeys.HOME)
  return null
}
