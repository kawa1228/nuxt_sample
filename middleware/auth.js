import Cookies from 'universal-cookie'

export default ({
  req,
  route,
  redirect
}) => {
  if (['/'].includes(route.path)) return

  const cookies = req ? new Cookies(req.headers.cookie) : new Cookies()
  const credential = cookies.get('credential')
  // top > authed-route > loginへリダイレクト
  // loginをクリック > top > authed-routeへアクセス可能に
  if (credential && route.path === '/login') {
    return redirect('/')
  }
  if (!credential && route.path !== '/login') {
    return redirect('/login')
  }
}
