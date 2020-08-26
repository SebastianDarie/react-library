import React, { Component } from 'react'

class ModalForm extends Component {
	state = {
		title: '',
		author: '',
		pages: '',
		read: false,
	}

	changeRead = () => this.setState({ read: !this.state.read })

	onChange = (e) => this.setState({ [e.target.name]: e.target.value })

	onSubmit = (e) => {
		this.props.addBook(
			this.state.title,
			this.state.author,
			this.state.pages,
			this.state.read
		)

		e.target.reset()
		e.target.parentNode.parentNode.parentNode.style.display = 'none'

		e.preventDefault()
	}

	// formSubmit = (e) => {
	// 	const form = e.target
	// 	const title = form.elements['title'].value
	// 	const author = form.elements['author'].value
	// 	const pages = form.elements['pages'].value
	// 	const read = form.elements['read'].value

	// 	form.reset()
	// 	form.parentNode.parentNode.parentNode.style.display = 'none'

	// 	e.preventDefault()
	// }

	render() {
		return (
			<form className='form' onSubmit={this.onSubmit}>
				<div className='fields'>
					<div>
						<label htmlFor='title'>Title</label>
						<input
							placeholder='Title'
							className='field'
							type='text'
							name='title'
							required
							autoFocus
							value={this.state.title}
							onChange={this.onChange}
						/>
					</div>
					<div>
						<label htmlFor='author'>Author</label>
						<input
							placeholder='Author'
							className='field'
							type='text'
							name='author'
							required
							value={this.state.author}
							onChange={this.onChange}
						/>
					</div>
					<div>
						<label htmlFor='pages'>Pages</label>
						<input
							placeholder='Pages'
							className='field'
							type='number'
							min='0'
							name='pages'
							value={this.state.pages}
							onChange={this.onChange}
						/>
					</div>
				</div>

				<div className='read'>
					<p>I have read this book</p>
					<input
						type='radio'
						name='read'
						value={this.state.read}
						onClick={this.changeRead}
					/>
				</div>

				<button className='submit' type='submit'>
					Submit
				</button>
			</form>
		)
	}
}

export default ModalForm
