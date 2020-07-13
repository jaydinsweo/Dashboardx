import React from "react"
import styled from "styled-components"

const MiniChart = ({ children }) => {
	return <Div>{children}</Div>
}

export default MiniChart

const Div = styled.div`
	/* width: 40vw; */
	width: 45vw;
	min-width: 450px;
	height: 600px;
	margin: 0 1rem;
	background-color: #fff;
	border-radius: 2px;
	box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
		0 10px 10px -5px rgba(0, 0, 0, 0.04);
`