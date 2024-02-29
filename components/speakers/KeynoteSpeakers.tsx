import { Speaker } from '../../types/types'
import { SpeakerCard } from './SpeakerCard'

export const KeynoteSpeakers = () => {
  const speakers: Speaker[] = [
    {
      name: 'Greg Fawson',
      tagline: 'Chief Executive Officer at droidcon',
      biography:
        'greg_fawson@androiddev.social CEO - Mobile Seasons GmbH I kind of run the whole global droidcon & fluttercon empire.',
      avatar:
        'https://media.licdn.com/dms/image/C5603AQGwKjKNQUyAYQ/profile-displayphoto-shrink_400_400/0/1521486389381?e=1703721600&v=beta&t=SY-bKqz4lh4sL6XIGcxsoUn0gqOtHzzAFhV7uYD2k40',
      twitter: 'https://twitter.com/fawson_greg',
      linkedin: 'https://www.linkedin.com/in/gregfawson',
    },
    {
      name: 'John Kimani',
      tagline: 'Developer Ecosystem at Google',
      biography:
        'Developer Ecosystem at Google - Posts on Africa, Tech, Startups, Sports 🇰🇪',
      avatar:
        'https://media.licdn.com/dms/image/C4D03AQHsWel-ExEkbQ/profile-displayphoto-shrink_800_800/0/1652819290476?e=1703721600&v=beta&t=HkrlOwjnR6nXmhUTA-_VWwaJIsNNdcyFCS2wMBHNx5M',
      twitter: 'https://twitter.com/_jkimani',
      linkedin: 'https://www.linkedin.com/in/johnkimani/',
    },
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 gap-y-16">
      {speakers.map((speaker) => (
        <SpeakerCard speaker={speaker} key={speaker.name} />
      ))}
    </div>
  )
}
