import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as filterActions from "../../actions/filterActions";
import positions from '../../constants/positions';
import './style.css';

class Filters extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filters: {},
            errors: {}
        }

        this.onChangeFilter = this.onChangeFilter.bind(this);
    }

    clean(obj) {
        for (var propName in obj) {
            if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
                delete obj[propName];
            }
        }

        return obj
    }

    onChangeFilter(ev) {
        ev.persist();
        if (ev.target.name === 'age' && ev.target.value !== '') {

            if (18 > ev.target.value || 40 < ev.target.value) {
                this.setState({
                    errors: {
                        age: 'Age should be between 18 and 40',
                    }
                })
                return
            }
        }

        const cleanFilters = this.clean(Object.assign({}, this.state.filters, {
            [ev.target.name]:
            ev.target.value
        }));

        this.setState({
            filters: cleanFilters,
            errors: {},

        }, () => {

            this.props.actions.setFilters(this.state.filters);
        });
    }

    render() {

        return (
            <div className="filter-container">

                <div className="filter-item">
                    <input type="text" name="name" onChange={this.onChangeFilter} placeholder={'Name'}/>
                </div>
                <div className="filter-item">
                    <select name={"position"} id="position" onChange={this.onChangeFilter}>
                        <option value="">Position</option>
                        {positions.map((position, index) => {
                            return <option key={position} value={position}>{position}</option>
                        })}
                    </select>
                </div>
                <div className="filter-item">
                    <input type="number" name={"age"} min="18" max="40" placeholder={"Age"}
                           onChange={this.onChangeFilter}/>
                    {this.state.errors && this.state.errors.age ?
                        <div className="error">{this.state.errors.age}</div> : ''}
                </div>
            </div>

        )
    }

}

export const mapDispatchToProps = (dispatch) => {

    return {
        actions: bindActionCreators({...filterActions}, dispatch)

    }
}
export default connect(null, mapDispatchToProps)(Filters);
