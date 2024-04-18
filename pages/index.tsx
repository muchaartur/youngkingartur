import { UserInfo, Section } from 'components'
import Profile from './../layouts/profile'
import data from 'data/data.json'
import QNA from 'components/qna'

export default function Home() {
  const { socials } = data
  return (
    
    <Profile>
      <UserInfo />
      {socials.display && <Section name="Socials" items={socials.items} />}
      
    
    </Profile>
  )
}
