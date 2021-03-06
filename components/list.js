import React from 'react';
import ListItem from './list-item';

export default class List extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.handleClick = value => {
			if (this.props.disabled) {
				return;
			}

			this.props.onClick(value);
		};
	}
	render() {
		const {labelKey, options, valueKey} = this.props;
		const items = options.map(item => {
			return (
				<ListItem
					key={item[valueKey]}
					onClick={this.handleClick}
					disabled={item.disabled}
					highlighted={item.highlighted}
					label={item[labelKey]}
					value={item[valueKey]}
					/>
			);
		});

		return (
			<ul className="msts__list">
				{items}
			</ul>
		);
	}

}

List.propTypes = {
	disabled: React.PropTypes.bool,
	labelKey: React.PropTypes.string,
	onClick: React.PropTypes.func,
	options: React.PropTypes.array,
	valueKey: React.PropTypes.string
};

List.defaultProps = {
	options: []
};
