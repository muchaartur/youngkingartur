import data from 'data/data.json'
import Icon from './icons'
import Button from './button'
import UserImages from './user_images'
export default function UserInfo() {
  const { name, images, bio, location, } = data
  return (
    <div className="flex flex-col items-center justify-center space-y-6 rounded-2xl bg-white px-4 pt-4 pb-6">
      <div className="mb-12">
        <UserImages images={images} alt={name} />
      </div>
      <div className="px-4 text-center">
        <h1 className="mb-3 flex flex-col text-2xl font-bold text-stone-800">
          {name}
          {location && <span className="text-sm font-medium text-gray-400">{location}</span>}
        </h1>
        <p className="font-medium text-stone-500">{bio}</p>
      </div>
    </div>
  )
}
