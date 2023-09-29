import { FC } from 'react'

import { clsx } from 'clsx'

import { Typography } from '@/components/ui/typography/typography.tsx'

import s from './DropdownAvatar.module.scss'

export type DropdownWithAvatarProps = {
  name?: string
  mail?: string
  avatar?: string
}

export const DropdownWithAvatar: FC<DropdownWithAvatarProps> = ({
  name,
  mail,
  avatar,
  ...rest
}) => {
  const classNames = {
    root: clsx(s.root),
    avatarContainer: clsx(s.avatarContainer),
    avatar: clsx(s.avatar),
    mail: clsx(s.mail),
    name: clsx(s.name),
  }

  return (
    <div className={classNames.root} {...rest}>
      <div className={classNames.avatarContainer}>
        <img className={classNames.avatar} src={avatar} />
      </div>
      <div>
        <Typography variant={'subtitle2'} className={classNames.name}>
          {name}
        </Typography>
        <Typography variant={'caption'} className={classNames.mail}>
          {mail}
        </Typography>
      </div>
    </div>
  )
}
