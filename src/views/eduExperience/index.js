import React, {useEffect, useState} from "react";
import {isEnterViewport} from "@/utils/handleUtils"
import 'animate.css';
import "./index.less"

function EduExperience() {
    const youthImgList = ['https://www.ntit.edu.cn/_upload/article/images/4a/bb/02132ff048728dafe81d67d1554a/97d6aca4-fd0e-400b-81cf-42751d2af8f9.jpg', 'https://www.ntit.edu.cn/_upload/article/images/4a/bb/02132ff048728dafe81d67d1554a/336f8aca-face-4ce0-89a0-9a710fbbf675.jpg', 'https://www.ntit.edu.cn/_upload/article/images/4a/bb/02132ff048728dafe81d67d1554a/2ef41355-6810-4af6-b9b3-466bd096984a.jpg', 'https://www.ntit.edu.cn/_upload/article/images/4a/bb/02132ff048728dafe81d67d1554a/ee2f29b3-c89e-42d3-9450-1356428f1cfc.jpg']
    const [viewpointArr, setViewpointArr] = useState([])
    const getYouthImgClassName = (index) => {
        let youthImgClassName = 'youth-img animate__animated '
        if (index % 2 === 0) {
            youthImgClassName += viewpointArr[index] ? 'animate__fadeInLeft' : 'animate__fadeOutLeft'
        } else {
            youthImgClassName += viewpointArr[index] ? 'animate__fadeInRight' : 'animate__fadeOutRight'
        }
        return youthImgClassName
    }
    useEffect(() => {
        const $targets = $(".youth-img")
        $(window).on("scroll", () => {
            const targetStatus = []
            $targets.each((index, element) => {
                targetStatus.push(isEnterViewport(element))
            })
            setViewpointArr(targetStatus)
        });
        // return () => {
        //     window.removeEventListener('onscroll')
        // };
    }, [])
    const youthImgDom = youthImgList.map((imgSrc, index) => {
        return (
            <div key={index} className={getYouthImgClassName(index)}>
                <img src={imgSrc} alt="youth campus"/>
            </div>
        )
    })
    return (
        <div className="edu-content">
            <div className="edu-school">
                <h1 className="school-name">关于南通理工学院</h1>
                <div className="school-img-box">
                    <img className="school-logo animate__animated animate__bounce"
                         src="https://www.ntit.edu.cn/_upload/site/00/05/5/logo.png"
                         alt="南通理工学院"/>
                    <img className="school-img"
                         src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.anmoyi98.com%2Fcunchu7%2F2022-01-18%2F35_16425006023472.png&refer=http%3A%2F%2Fimg.anmoyi98.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662795961&t=1c287a4bbcd8f6b32afa12a284c20bbe"
                         alt="海安校区"/>
                </div>
                <div className="school-description">
                    <p>南通理工学院（Nantong Institute of Technology），简称“通理工” ，位于江苏省南通市，是经国家教育部批准建立的一所全日制普通本科高校。</p>
                    <p>学校前身为紫琅职业技术学院，创始于2000年；2014年5月，升格为本科院校南通理工学院。</p>
                    <p>据2022年7月学校官网显示，学校有南通和海安两个校区，占地面积1200余亩，建筑面积60万平米；教学科研仪器设备总值1.5亿元；图书馆馆藏纸质图书100多万册，电子图书191万种，纸质期刊1539种，电子期刊15500种；设有11个二级学院，设置本科专业38个；有全日制在校学生1.8万人。</p>
                </div>
            </div>
            <div className="edu-youth">
                <h1 className="youth-title">青春校园</h1>
                <div className="youth-img-box">{youthImgDom}</div>
            </div>
        </div>
    )
}

export default EduExperience
