import React from 'react';

export default class Filter extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.handleChange = e => {
			this.props.onChange(e.target.value);
		};
		this.handleClickClear = () => {
			this.props.onChange('');
		};
	}

	render() {
		const {clearFilterText, clearable, disabled, placeholder, value} = this.props;

		return (
			<div className="msts__filter">
				<input
					className="msts__filter-input"
					onChange={this.handleChange}
					type="text"
					{...{disabled, placeholder, value}}
					/> {clearable && value && !disabled ?
          (< span
	className="msts__filter-clear" onClick={
            this.handleClickClear
          }
	title={
            clearFilterText
          }
	/>) :
          null
}
			</div>
		);
	}
}
Filter.propTypes = {
	clearFilterText: React.PropTypes.string,
	clearable: React.PropTypes.bool,
	disabled: React.PropTypes.bool,
	onChange: React.PropTypes.func.isRequired,
	placeholder: React.PropTypes.string,
	value: React.PropTypes.string
};
