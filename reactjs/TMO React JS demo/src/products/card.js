import React from 'react'

export default class Card extends React.Component {

	constructor(props ) {
		super(props) 

		this.state = {
			product: props.product
		}
	}

	componentWillReceiveProps (props) {
		this.setState( {
			product: props.product
		 })
		console.log(props)
	}

	render () {
		return (
			<div>
		{

			this.state && this.state.product ? 
			<div>
					<img style={{ width: '100%' }} src={this.state.product.img} />
					<p> { this.state.product.name} </p>
 				</div> : null
		}
			</div>		
		)


	}

}