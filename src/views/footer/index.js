import React from 'react'
import './index.less'
function Fooder() {
    return <footer className="footer">
        <div className='foot-left'>
            <div className='foot-logo'>
                <img></img>
                <span>town的小窝</span>
            </div>
            <div className='foot-copyright'>
                <p>townの小窝 | 苏ICP备16060150号</p>
                <p>Copyright © TOWN. All rights reserved.</p>
            </div>
        </div>
        <div className='foot-right'>
            <div className='foot-link'>
                <span>页面灵感来自</span>
                <ul className="foot-link">
                    <li><a target="_blank" href='https://www.nio.cn/?channel=f12ga1jTRm&utm_source=baidu&utm_medium=%E5%A4%A7%E6%90%9CPC%E9%80%9A%E6%A0%8F%E8%A7%86%E9%A2%91&utm_campaign=%E5%93%81%E7%89%8C%E4%B8%93%E5%8C%BA&utm_term=%E6%A0%87%E9%A2%98&utm_content=%E5%93%81%E7%89%8C%E4%B8%93%E5%8C%BANIO%E8%94%9A%E6%9D%A5'>蔚来汽车</a></li>
                    <li><a target="_blank" href='https://js.design/home/?xl=a34699377.k378129450310.c57405407932.g6646728534.p184106176.m2.d1.t0&source=baidu|3&utm_source=baidu|3&utm_medium=PPC&utm_campaign=SEM&utm_term=xiaopiu%E5%8E%9F%E5%9E%8B%E8%AE%BE%E8%AE%A1%E5%B9%B3%E5%8F%B0&bd_vid=8243827818303380708'>即时设计</a></li>
                </ul>
            </div>
            <div className='foot-link'>
                <span>页面内容参考</span>
                <ul className="foot-link">
                    <li><a target="_blank" href='http://cq1.slcjgj.com/?bd_vid=7971170177450730217&hdfshare=19922330090'>重庆玩法攻略</a></li>
                    <li><a target="_blank" href='http://cq.gov.cn/'>重庆市人民政府</a></li>
                </ul>
            </div>
            <div className='foot-link'>
                <span>联系我</span>
                <ul className="foot-link">
                    {/* <li><a target="_blank" href='https://www.nio.cn/?channel=f12ga1jTRm&utm_source=baidu&utm_medium=%E5%A4%A7%E6%90%9CPC%E9%80%9A%E6%A0%8F%E8%A7%86%E9%A2%91&utm_campaign=%E5%93%81%E7%89%8C%E4%B8%93%E5%8C%BA&utm_term=%E6%A0%87%E9%A2%98&utm_content=%E5%93%81%E7%89%8C%E4%B8%93%E5%8C%BANIO%E8%94%9A%E6%9D%A5'>蔚来汽车</a></li>
                    <li><a target="_blank" href='https://js.design/home/?xl=a34699377.k378129450310.c57405407932.g6646728534.p184106176.m2.d1.t0&source=baidu|3&utm_source=baidu|3&utm_medium=PPC&utm_campaign=SEM&utm_term=xiaopiu%E5%8E%9F%E5%9E%8B%E8%AE%BE%E8%AE%A1%E5%B9%B3%E5%8F%B0&bd_vid=8243827818303380708'>即时设计</a></li> */}
                </ul>
            </div>
        </div>
    </footer>
}
export default Fooder