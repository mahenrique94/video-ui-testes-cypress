import React, { Component, Fragment } from 'react'

import { 
    Button, 
    Container, 
    Input,
    InputGroup, 
    InputGroupAddon,
    Jumbotron 
} from 'reactstrap'

import Menu from './Menu'
import Table from './Table'

class TodoList extends Component {

    state = {
        task: '',
        tasks: []
    }

    render() {
        const { task, tasks } = this.state
        return (
            <Fragment>
                <Menu/>
                <Jumbotron>
                    <h1 className="display-4" data-cy="title-component">To-Do List Component!</h1>
                </Jumbotron>
                <Container>
                    <InputGroup>
                        <Input 
                            data-cy="input-task" 
                            onChange={ this.handleChange } 
                            placeholder="O que você precisa fazer?" 
                            value={ task }
                        />
                        <InputGroupAddon addonType="prepend">
                            <Button color="success" data-cy="btn-add" onClick={ this.add }>Adicionar</Button>
                        </InputGroupAddon>
                    </InputGroup>
                    <Table tasks={ tasks }/>
                </Container>
            </Fragment>
        )
    }

    add = () => {
        const { task } = this.state
        this.setState(({ tasks }) => ({ task: '', tasks: [].concat(tasks, task.trim())}))
    }

    handleChange = ({ target: { value } }) => this.setState({ task: value })

}

export default TodoList