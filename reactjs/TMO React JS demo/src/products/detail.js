import React from 'react'
import Card from './card'


export default class Detail extends React.Component {

	constructor(props ) {
		super(props) 
		this.state = {
			id : props.match.match.params.id
		}

	}


	componentWillMount () {

		let ctx = this
		fetch('http://localhost:3001/products').then( resposne => {

			return resposne.json()

		} ).then( data  => { 
						ctx.setState( { 
							product: data.find( d => d.id == ctx.state.id)
						} )

		}

		)
	}

	componentWillReceiveProps (props) {
		
	}

	render () {
		return (
			<div>
		{

			this.state && this.state.product ? 
						<Card product={this.state.product} />: null
		}
			</div>		
		)


	}

}