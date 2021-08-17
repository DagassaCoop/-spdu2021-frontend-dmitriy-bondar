import './styles/style.scss'
import React from 'react'
import {render} from 'react-dom'

class Main extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.counter = 0
    }

    handleClick(){
        console.log(this.counter)
        this.counter++
    }

    render() {
        return (
            <main className="main" >
                <Avatar />
                <Context />
            </main>
        ) 
    }
}

class Avatar extends React.Component {
    render(){
        return (
            <div className="main__avatar-box">
                <div className="main__avatar"></div>
            </div>
        )
    }
}

class Context extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            inputValue: '',
            texts: []
        }
    }

    buttonClick = () =>{
        const { inputValue, texts } = this.state;
        if (inputValue) {
        const nextState = [...texts, inputValue];
        this.setState({ texts: nextState, inputValue: '' });
        }
    }

    inputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    }

    render() {
        return (
            <div className="main__context">
                <h1 className="main__context-title">My Tasks</h1>
                <div className="main__tasks-box" id="mainTasksBox">
                    <TaskList texts={this.state.texts} />
                </div>
                <div className="main__active-box">
                    <Form actionB={this.buttonClick} actionI={this.inputChange} inputValue={this.state.inputValue}/>
                </div>
            </div>
        )
    }
}

class TaskList extends React.Component {
    constructor (props){
        super(props)

    }

    render(){
        return(
            this.props.texts.map((text,i) => <Task key={i} counter={i} text={text} />)
        )
    }
}

class Form extends React.Component {
    constructor (props){
        super(props)
    }
    render() {
        return(
            <form className ="main__form">
                <input onChange={this.props.actionI.bind(this)} type="text" className="main__input main__input_text" id="inputText" value={this.props.inputValue} />
                <input onClick={this.props.actionB.bind(this)} type="button" value="Add task" className="main__input main__input_submit" id="inputSubmit" />
            </form>
        )
    }
}

class Task extends React.Component {

    constructor (props) {
        super(props)
        this.state = {labelStatus: false}
        this.index = `task_${props.counter}`  
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        if (e.target.tagName === 'INPUT'){
            this.setState(prevState =>({
                labelStatus: !prevState.labelStatus
            }))
        }
    }

    render(){
        return(
            <div className="main__tasks-input" onClick={this.handleClick}>
                <input type="checkbox" name={this.index} />
                <label className={this.state.labelStatus ? 'checked' : ''} htmlFor={this.index} id={this.index}>{this.props.text}</label>
            </div>
        )
    }
}

render(<Main />,document.getElementById('app'))