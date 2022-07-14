import { Table } from 'react-bootstrap';
import Header from '../../Components/header/Header';
import './Activity.css';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import MultiSelect from 'react-multiple-select-dropdown-lite'
import { useState } from 'react';

function Activity() {
    const [value, setvalue] = useState('');

    const handleOnchange = val => {
        setvalue(val)
    }

    const options = [
        { label: 'Option 1', value: 'option_1' },
        { label: 'Option 2', value: 'option_2' },
        { label: 'Option 3', value: 'option_3' },
        { label: 'Option 4', value: 'option_4' },
    ];

    return (
        <div>
            <Header></Header>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Activity Name</th>
                        <th>Created by</th>
                        <th>Created at</th>
                        <th>Assignee</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Create Task</td>
                        <td>
                            <div className='rounded-circle random-background'>
                                M
                            </div>
                        </td>
                        <td>24/04/2022</td>
                        <td>
                            <MultiSelect
                                onChange={handleOnchange}
                                options={options}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Create Task</td>
                        <td>
                            <div className='rounded-circle random-background'>
                                M
                            </div>
                        </td>
                        <td>24/04/2022</td>
                        <td>
                            <MultiSelect
                                onChange={handleOnchange}
                                options={options}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Create Task</td>
                        <td>
                            <div className='rounded-circle random-background'>
                                M
                            </div>
                        </td>
                        <td>24/04/2022</td>
                        <td>
                            <MultiSelect
                                onChange={handleOnchange}
                                options={options}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Create Task</td>
                        <td>
                            <div className='rounded-circle random-background'>
                                M
                            </div>
                        </td>
                        <td>24/04/2022</td>
                        <td>
                            <MultiSelect
                                onChange={handleOnchange}
                                options={options}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Create Task</td>
                        <td>
                            <div className='rounded-circle random-background'>
                                M
                            </div>
                        </td>
                        <td>24/04/2022</td>
                        <td>
                            <MultiSelect
                                onChange={handleOnchange}
                                options={options}
                            />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Activity;