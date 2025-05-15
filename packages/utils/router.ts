import { redirect } from 'next/navigation'

export const redirectTo = (url: string) => {
  redirect(url)
}
