import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom'
import Header from '@/views/header'
import Footer from '@/views/footer'
import Waves from '@/components/theWaves'
// 导入必要组件
import {lazy, Suspense} from 'react'
// 按需导入路由组件
const PersonalResume = lazy(() => import('@/views/personalResume'))
const Hometown = lazy(() => import('@/views/hometownIntroduce'))
const EduExperience = lazy(() => import('@/views/eduExperience'))

function AllRouter() {
	return (
		<div className="App">
			<Router>
				<Header/>
				<Suspense
					fallback={
						<div
							style={{
								textAlign: 'center',
								marginTop: 200
							}}
						>
							loading...
						</div>
					}>
					<Routes>
						<Route index element={<PersonalResume/>}/>
						<Route path="/personalResume" element={<PersonalResume/>}/>
						<Route path="/eduExperience" element={<EduExperience/>}/>
						<Route path="/hometownIntroduce" element={<Hometown/>}/>
					</Routes>
				</Suspense>
				<Footer/>
				<Waves/>
			</Router>
		</div>
	)
}

export default AllRouter
