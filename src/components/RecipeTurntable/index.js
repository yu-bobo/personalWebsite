import React, { useState } from 'react'
import { createRandomPicker } from '@/utils/handleUtils'
import './index.less'

function RecipeTurntable (props) {
    const { title, recipe, doConfirm } = props
    const [active, setActive] = useState({})
    const [timer, setTimer] = useState(null)
    const [start, setSatrt] = useState(false)
    const randomPick = createRandomPicker(recipe)
    const goStart = () => {
        if (!start) {
            setTimer(setInterval(() => {
                setActive(randomPick())
            }, 500))
            setSatrt(true)
        } else {
            clearInterval(timer)
            setSatrt(false)
            // 回调
            doConfirm(active, title)
        }
    }
    const turnTableContent = recipe.map(item => {
        return (
            <li className={active.id === item.id ? 'select-active' : ''} key={item.id}>
                <p className='img'> <img src={item.eatImg} title={item.eatName}></img></p>
                <p className='food-name'>{item.eatName}</p>
            </li>
        )
    })

    return (
        <div className='recipe-turntable'>
            <p className='recipe-type'>{title}</p>
            <ul >
                {turnTableContent}
            </ul>
            <button className={[title.includes('荤菜') ? 'ant-btn-hun' : 'ant-btn-su', 'ant-btn'].join(' ')} onClick={goStart}>{!start ? '开始随机' : '暂停'}选菜</button>
        </div>
    )
}

export default RecipeTurntable