import './index.less'
import familyIcon from '@/assets/images/family.png'
import educationIcon from '@/assets/images/education.png'
import positionIcon from '@/assets/images/position.png'
import point1Icon from '@/assets/images/point1.png'
import point2Icon from '@/assets/images/point2.png'
import userPhoto from '@/assets/images/user_photo.png'
import React, {useEffect, useRef, useState} from 'react'
import downloadPDF from '@/utils/html2pdf'
import {getResumeInfo} from '@/request/api'

const workStatus = {
	'0': '入职',
	'1': '转正',
	'2': '离职',
}
function PersonalResume(props) {
	const {setGrayscale} = props
	const containerContent = useRef()
	const [resumeInfo, setResumeInfo] = useState({})
	const {basicInfo, eduExperience, workExperience} = resumeInfo
	const handleDownload = () => {
		const pdfDom = containerContent.current
		pdfDom.style.background = '#FFFFFF'
		downloadPDF(pdfDom, '个人履历', () => {
			pdfDom.style.background = '#F4F7FA'
		})
	}
	const potionDiv = workExperience?.map((item, index) => {
		return (
			<div className="step_content" key={index}>
				<div className="step_item">
					<span className="position_level">{item.level}</span>
					<div className="bar">
						<p className="image"><img src={item.status === '2' ? point2Icon : point1Icon}/></p>
						<p className={['line', index === 0 && 'first-line'].join(' ')}/>
					</div>
					<span className="time">{item.time}</span>
					<div className={['org_position_box', item.status === '2' && 'leave_box'].join(' ')}>
						<span className="org_name">{item.companyName} —— </span>
						<span className="position">{item.positionName}</span>
						<span
							className={['type', item.status === '2' && 'leave'].join(' ')}> —— {workStatus[item.status]}</span>
					</div>
				</div>
			</div>)
	})
	const eduDiv = eduExperience?.map((item, index)=>{
		return (
			<tr key={index}>
				<td><span>{index + 1}</span></td>
				<td><span>{item.entranceTime}</span></td>
				<td><span>{item.graduateTime}</span></td>
				<td><span>{item.stage}</span></td>
				<td><span>{item.schoolName}</span></td>
				<td><span>{item.major}</span></td>
			</tr>)
	})
	useEffect(() => {
		// 获取数据
		getResumeInfo().then((res) => {
			setResumeInfo(res.data)
			// 传递灰度
			const {grayscale = false} = res.data
			setGrayscale(grayscale)
		})
	}, [])

	return <div className='container'>
		<div className='container_content' ref={containerContent}>
			<div id="personal_photo">
				<div className="personal_photo"><img id="topPhoto" src={userPhoto}/></div>
				<div className="user">
					<span className="user_name">{basicInfo?.name}</span>
					<span className="user_age">年龄：{basicInfo?.age}</span>
					<span className="user_tel">联系电话：{basicInfo?.tel}</span>
				</div>
			</div>
			<div id="personal_info" className="table-box">
				<div className="title">
					<i className="title_icon">
						<img src={familyIcon}/></i>
					<span className="title_span">个人信息</span>
				</div>
				<table className="personal_table">
					<tbody>
						<tr>
							<td>
								<div><span className="item_name">姓名</span><span className="item_value">{basicInfo?.name}</span></div>
							</td>
							<td>
								<div><span className="item_name">性别</span><span className="item_value">{basicInfo?.gender}</span></div>
							</td>
							<td>
								<div><span className="item_name">爱好</span><span className="item_value">{basicInfo?.hobby}</span></div>
							</td>
						</tr>
						<tr>
							<td>
								<div><span className="item_name">出生日期</span><span className="item_value">{basicInfo?.birthday}</span></div>
							</td>
							<td>
								<div><span className="item_name">年龄</span><span className="item_value">{basicInfo?.age}</span></div>
							</td>
							<td>
								<div><span className="item_name">状态</span><span className="item_value">{basicInfo?.workStatus}</span></div>
							</td>
						</tr>
						<tr>
							<td>
								<div><span className="item_name">证件类型</span><span className="item_value">{basicInfo?.idCardType}</span></div>
							</td>
							<td>
								<div><span className="item_name">证件号码</span><span className="item_value">{basicInfo?.idCardNum}</span></div>
							</td>
							<td>
								<div><span className="item_name">婚育状况</span><span className="item_value">{basicInfo?.maritalStatus}</span></div>
							</td>
						</tr>
						<tr>
							<td>
								<div><span className="item_name">手机号码</span><span className="item_value">{basicInfo?.tel}</span></div>
							</td>
							<td>
								<div><span className="item_name">紧急联系人</span><span className="item_value">{basicInfo?.emergencyContact}</span></div>
							</td>
							<td>
								<div><span className="item_name">紧急联系人电话</span><span className="item_value">{basicInfo?.emergencyContactTel}</span></div>
							</td>
						</tr>
						<tr>
							<td>
								<div><span className="item_name">户籍所在地</span><span className="item_value">{basicInfo?.householdRegistration}</span></div>
							</td>
							<td>
								<div><span className="item_name">户口性质</span><span className="item_value">{basicInfo?.registerType}</span></div>
							</td>
							<td>
								<div><span className="item_name">籍贯</span><span className="item_value">{basicInfo?.nativePlace}</span></div>
							</td>
						</tr>
						<tr>
							<td>
								<div><span className="item_name">民族</span><span className="item_value">{basicInfo?.nation}</span></div>
							</td>
							<td colSpan={2}>
								<div><span className="item_name">家庭住址</span><span className="item_value">{basicInfo?.homeAddress}</span></div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div id="education_experience" className="table-box">
				<div className="title"><i className="title_icon"><img src={educationIcon}/></i><span
					className="title_span">教育经历</span></div>
				<table className="base_table">
					<thead>
						<tr>
							<td className="td-index"><span>NO.</span></td>
							<td className="td-time"><span>入学时间</span></td>
							<td className="td-time"><span>毕业（肄业）时间</span></td>
							<td className="min-1"><span>阶段</span></td>
							<td className="min-2"><span>院校</span></td>
							<td className="min-2"><span>所学专业</span></td>
						</tr>
					</thead>
					<tbody>
						{eduDiv}
					</tbody>
				</table>
			</div>
			<div id="position_change" className="table-box">
				<div className="title"><i className="title_icon"><img src={positionIcon}/></i><span
					className="title_span">工作经历</span></div>
				{potionDiv}
			</div>
		</div>
		<div className="download_button" onClick={handleDownload}><span>下载</span></div>
	</div>
}

export default PersonalResume
