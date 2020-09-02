import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }
    render () {
        return(
            <React.Fragment>
                <button onClick={()=> this.setState({isOpen: true})}>Open surprise!</button>

                {this.state.isOpen && (
                    <div className='modal'>
                    <div className='modal-body'>
                        <h1>Oops! You are here...</h1>
                        
                        <button onClick={()=> this.setState({isOpen: false})} >*%#$! GO BACK!</button>
                    </div>
                </div>
                )}
            </React.Fragment>
        )
    }
}