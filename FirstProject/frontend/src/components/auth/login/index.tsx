import React from 'react'
import Greeting from './greeting'

const LoginPage = () => {
	const name = 'Matvey'
	return (
		<div>
			<h1>Login page</h1>
			<Greeting name={name} />
		</div>
	)
}

export default LoginPage