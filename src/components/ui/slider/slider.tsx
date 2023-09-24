import {} from 'react'
import { Root, Track, Range, Thumb } from '@radix-ui/react-slider'
import { clsx } from 'clsx'

import s from './slider.module.scss'

export type SliderProps = {}

export const Slider = () => {
  const classNames = {
    container: clsx(s.container),
    value: clsx(s.value),
    root: clsx(s.root),
    track: clsx(s.track),
    range: clsx(s.range),
    thumb: clsx(s.thumb),
  }

  return (
    <div className={classNames.container}>
      <div className={classNames.value}>{0}</div>
      <Root
        className={classNames.root}
        defaultValue={[0, 10]}
        max={10}
        step={1}
        minStepsBetweenThumbs={1}
      >
        <Track className={classNames.track}>
          <Range className={classNames.range} />
        </Track>
        <Thumb className={classNames.thumb} />
        <Thumb className={classNames.thumb} />
      </Root>
      <div className={classNames.value}>{10}</div>
    </div>
  )
}
