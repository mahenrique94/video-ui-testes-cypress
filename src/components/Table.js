import PropTypes from 'prop-types'
import React from 'react'

import { Table as BootstrapTable } from 'reactstrap'

import EmptyTable from './EmptyTable'
import If from './If'

const Table = ({ tasks }) => (

    <BootstrapTable className="mt-5" data-ty="table-tasks">
        <thead data-cy="table-tasks-header">
            <tr>
                <th data-cy="tasks-tasks-column-tarefa">Tarefa</th>
            </tr>
        </thead>
        <tbody data-cy="table-tasks-body">
            <If condition={ tasks.length } el={ <EmptyTable/> }>
                { tasks.map((task, index) => 
                    <tr data-cy="table-tasks-row" key={ index }>
                        <td data-cy={`table-tasks-${task}`}>{ task }</td>
                    </tr>
                ) }
            </If>
        </tbody>
    </BootstrapTable>
    
)

Table.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Table
