import React from 'react'
import { CgSync } from 'react-icons/cg'
import { TbClock } from 'react-icons/tb'
import { formatDate } from '../../libs/formatDate'

type Props = {
  date: string
  type: 'publishedAt' | 'revisedAt'
}

const DateText: React.FC<Props> = ({ date, type }) => {

  return (
    <div className={'flex items-center space-x-1 justify-start'}>
      {type === 'publishedAt' ? (
        <TbClock size={'14'} />
      ) : (
        <CgSync size={'14'} />
      )}
      <span className={'text-sm'}>{formatDate(date)}</span>
    </div>
  )
}

export default DateText
