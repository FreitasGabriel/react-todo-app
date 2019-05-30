import React from 'react'

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navar-header'>
                <a className='navbar-brand' href='#'>
                    <i className='fa fa-calendar-check-o'></i> Todo App
                </a>
            </div>

            <div id='navbar' className='navbar-collapse collapse'>
                <ul className='nav navbar-nav'>
                    <li><a href='#/todos'>Tarefas</a></li>
                    <li><a href='#/about'>About</a></li>
                </ul>
            </div>
        </div>
    </nav>
)