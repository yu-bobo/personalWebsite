import {isEnterViewport} from '@/utils/handleUtils'
import {useEffect, useState} from 'react'

export const useViewpoint = (el) => {
	const [isShow, setIsShow] = useState(false)
	useEffect(() => {
		$(window).on('scroll', () => {
			setIsShow(isEnterViewport(el))
		})
	}, [])
	return [isShow, setIsShow]
}
