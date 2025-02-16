import Image from 'next/image'

type AvatarProps = {
  src?: string
  name?: string
}

export const Avatar = ({ src, name }: AvatarProps) => {
  return src ? (
    <Image
      className="flex items-center justify-center rounded-full bg-gray-200 w-[40px] h-[40px]"
      src={src}
      alt="avatar"
      width={40}
      height={40}
    />
  ) : (
    <div className="flex items-center justify-center rounded-full bg-blue-600 text-gray-100 w-[40px] h-[40px]">
      {name?.charAt(0)}
    </div>
  )
}
