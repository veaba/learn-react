import React,{Component} from 'react'
function HelloMessage(props) {
	return <h1>Hello world {props.name}</h1>
}

const el = <HelloMessage name="xxxxxxxxxxx" />


class HelloWorld extends Component{
	render() {
		console.info(this);
		return el
	}
}
export  default  HelloWorld
