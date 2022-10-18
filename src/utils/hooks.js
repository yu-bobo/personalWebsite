import {isEnterViewport} from '@/utils/handleUtils'
import {useEffect, useState, useCallback, useRef, useMemo} from 'react'

export const useViewpoint = (el) => {
	const [isShow, setIsShow] = useState(false)
	useEffect(() => {
		$(window).on('scroll', () => {
			setIsShow(isEnterViewport(el))
		})
	}, [])
	return [isShow, setIsShow]
}
export const useThrottle = (fn, delay) => {
	const timer = useRef(-1)
	return useCallback(() => {
		if (timer.current > -1) {
			return
		}
		timer.current = setTimeout(() => {
			fn()
			timer.current = -1
			clearTimeout(timer.current)
		}, delay)
	}, [fn, delay])
}
