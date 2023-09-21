import {} from 'react'
import { Root, Track, Range, Thumb } from '@radix-ui/react-slider'

import s from './slider.module.scss'

export type SliderProps = {}

export const Slider = () => {
  return (
    <div className={s.container}>
      <div className={s.value}>{0}</div>
      <Root className={s.root} defaultValue={[0, 10]} max={10} step={1} minStepsBetweenThumbs={1}>
        <Track className={s.track}>
          <Range className={s.range} />
        </Track>
        <Thumb className={s.thumb} />
        <Thumb className={s.thumb} />
      </Root>
      <div className={s.value}>{10}</div>
    </div>
  )
}
