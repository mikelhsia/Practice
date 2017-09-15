import React from 'react'
import Card from './card'
import { Link } from 'react-router-dom'

const itemStyle = {
	width: '50%',
	display: 'inline-block'
}

export default class List extends React.Component {

	componentWillMount () {

		let ctx = this
		fetch('http://localhost:3001/products').then( resposne => {

			return resposne.json()

		} ).then( data  => {

						console.log(data)
						ctx.setState( { 
							products: data
						} )

		}

		)
	}

	render () {
		return (
			<ul style={{padding: '0px'}}>
				{


					this.state && this.state.products ? 
						this.state.products.map( product => 
						<Link to={`/products/${product.id}`}><div style={itemStyle }>	<Card  product={product} /></div></Link>
							) : null
				}
				
				
			</ul>
		)


	}

}