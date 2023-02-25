import React, { useEffect, useState } from 'react'
import { isEnterViewport } from '@/utils/handleUtils'
import { getSchoolInfo } from '@/request/api'
import 'animate.css'
import './index.less'
import RecipeTurntable from '@/components/RecipeTurntable'

const recipeList = [
    {
        "id": 0,
        "eatName": "重庆小面",
        "eatImg": "https://yuanaliu.com/assets/website/images/xiaomian.png",
        "ingredients": "豌豆尖、葱花、面"
    },
    {
        "id": 1,
        "eatName": "火锅",
        "eatImg": "https://yuanaliu.com/assets/website/images/hotpot.png",
        "ingredients": "肥牛、羊肉、丸子、蔬菜若干"
    },
    {
        "id": 2,
        "eatName": "万州烤鱼",
        "eatImg": "https://yuanaliu.com/assets/website/images/fish.png",
        "videoUrl": "https://www.nio.cn/cdn-static/www/index/video/et7.mp4",
        "videoTitle": "WANZHOU GRILL FISH"
    },
    {
        "id": 3,
        "eatName": "辣子鸡",
        "eatImg": "https://yuanaliu.com/assets/website/images/laziji.png",
        "videoUrl": "https://www.nio.cn/cdn-static/www/index/video/et7.mp4",
        "videoTitle": "PEPPERY CHICKEN"
    }, {
        "id": 4,
        "eatName": "重庆小面",
        "eatImg": "https://yuanaliu.com/assets/website/images/xiaomian.png",
        "videoUrl": "https://www.nio.cn/cdn-static/www/index/video/et7.mp4",
        "videoTitle": "CHONGQING NOODLES"
    },
    {
        "id": 5,
        "eatName": "火锅",
        "eatImg": "https://yuanaliu.com/assets/website/images/hotpot.png",
        "videoUrl": "https://www.nio.cn/cdn-static/www/index/video/et7.mp4",
        "videoTitle": "HOT POT"
    },
    {
        "id": 6,
        "eatName": "万州烤鱼",
        "eatImg": "https://yuanaliu.com/assets/website/images/fish.png",
        "videoUrl": "https://www.nio.cn/cdn-static/www/index/video/et7.mp4",
        "videoTitle": "WANZHOU GRILL FISH"
    },
    {
        "id": 7,
        "eatName": "辣子鸡",
        "eatImg": "https://yuanaliu.com/assets/website/images/laziji.png",
        "videoUrl": "https://www.nio.cn/cdn-static/www/index/video/et7.mp4",
        "videoTitle": "PEPPERY CHICKEN"
    },
    {
        "id": 8,
        "eatName": "万州烤鱼",
        "eatImg": "https://yuanaliu.com/assets/website/images/fish.png",
        "videoUrl": "https://www.nio.cn/cdn-static/www/index/video/et7.mp4",
        "videoTitle": "WANZHOU GRILL FISH"
    },
]

function LoveRecipe () {
    const [hunCai, setHunCai] = useState(
        {
            "eatName": "",
            "eatImg": "",
            "ingredients": ""
        })
    const [suCai, setSuCai] = useState({
        "eatName": "",
        "eatImg": "",
        "ingredients": ""
    })

    const doConfirm = (item, title) => {
        if (title == '荤菜系列') {
            setHunCai(item)
        }
        if (title == '素菜系列') {
            setSuCai(item)
        }
    }

    return (
        <div className="recipe-content">
            <RecipeTurntable title="荤菜系列" recipe={recipeList} doConfirm={doConfirm} />
            <div className='today-recipe'>
                <div className='title'>今天吃勒个菜</div>
                <div className='recipe-box'>
                    <img src={hunCai.eatImg} alt="荤菜" title="荤菜"></img>
                    <p>菜名：{hunCai.eatName}</p>
                    <p>配料：{hunCai.ingredients}</p>
                </div>
                <div ><span className='add'>+</span></div>
                <div className='recipe-box'>
                    <img src={suCai.eatImg} alt="素菜" title="素菜"></img>
                    <p>菜名：{suCai.eatName}</p>
                    <p>配料：{suCai.ingredients}</p>
                </div>
            </div>
            <RecipeTurntable title="素菜系列" recipe={recipeList} doConfirm={doConfirm} />
        </div>
    )
}

export default LoveRecipe
