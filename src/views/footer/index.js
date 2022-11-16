import React from 'react'
import './index.less'
import wechat from '@/assets/images/wechat.png'
import mail from '@/assets/images/mail.png'
import wechatCode from '@/assets/images/wechatCode.jpg'
import beiAn from '@/assets/images/beian.png'

function Footer() {
	return <footer className="footer">
		<div className='foot-left'>
			<div className='foot-quotes'>
				<p>“成就感是由己及他的满足，幸福感是由他及己的福报”</p>
			</div>
			<div className='foot-copyright'>
				<p>鱼啵啵の小窝 | Copyright ©2022 yu-bobo All rights reserved</p>
				<p>
					<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32010402001419" rel="noreferrer"><img src={beiAn} style={{float: 'left'}} alt="苏公网安备"/>苏公网安备 32010402001419号</a>
					<a target="_blank" href='https://beian.miit.gov.cn/' rel="noreferrer" style={{marginLeft: '10px'}}>苏ICP备2022043090号</a>
				</p>
			</div>
		</div>
		<div className='foot-right'>
			<div className='foot-link'>
				<span>灵感来自</span>
				<ul>
					<li><a target="_blank"
						   href='https://www.nio.cn/?channel=f12ga1jTRm&utm_source=baidu&utm_medium=%E5%A4%A7%E6%90%9CPC%E9%80%9A%E6%A0%8F%E8%A7%86%E9%A2%91&utm_campaign=%E5%93%81%E7%89%8C%E4%B8%93%E5%8C%BA&utm_term=%E6%A0%87%E9%A2%98&utm_content=%E5%93%81%E7%89%8C%E4%B8%93%E5%8C%BANIO%E8%94%9A%E6%9D%A5'
						   rel="noreferrer">蔚来汽车</a>
					</li>
					<li><a target="_blank"
						   href='https://js.design/home/?xl=a34699377.k378129450310.c57405407932.g6646728534.p184106176.m2.d1.t0&source=baidu|3&utm_source=baidu|3&utm_medium=PPC&utm_campaign=SEM&utm_term=xiaopiu%E5%8E%9F%E5%9E%8B%E8%AE%BE%E8%AE%A1%E5%B9%B3%E5%8F%B0&bd_vid=8243827818303380708'
						   rel="noreferrer">即时设计</a>
					</li>
				</ul>
			</div>
			<div className='foot-link'>
				<span>内容参考</span>
				<ul>
					<li><a target="_blank" href='http://cq.gov.cn/' rel="noreferrer">重庆市人民政府</a></li>
					<li><a target="_blank"
						   href='http://cq1.slcjgj.com/?bd_vid=7971170177450730217&hdfshare=19922330090' rel="noreferrer">重庆玩法攻略</a></li>
					<li><a target="_blank" href='https://www.ntit.edu.cn/' rel="noreferrer">南通理工学院官网</a></li>
					<li><a target="_blank" href='https://www.ntit.edu.cn/2019/0603/c3561a26780/page.htm' rel="noreferrer">通理工青春校园</a>
					</li>
				</ul>
			</div>
			<div className='foot-link'>
				<span>联系我</span>
				<ul>
					<li>
						<a><img src={wechat} alt='微信'/></a>
						<div className="hover-img"><img src={wechatCode} alt='微信二维码'/></div>
					</li>
					<li>
						<a target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=FiMnJyUnISEiIVZnZzh1eXs" rel="noreferrer"><img src={mail} alt="QQ邮箱" title="向我写邮件"/></a>
					</li>
				</ul>
			</div>
		</div>
	</footer>
}

export default Footer
