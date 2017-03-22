import React from 'react';
import classNames from 'classnames';

export default class ListItem extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = () => {
			if (this.props.disabled) {
				return;
			}

			const {onClick, value} = this.props;
			onClick(value);
		};
	}

	render() {
		const {disabled, highlighted, label} = this.props;
		const className = 'msts__list-item';

		return (
			<li
				className={classNames(className, disabled && `${className}_disabled`, highlighted && `${className}_highlighted`)}
				onClick={this.handleClick}
				>
				{label}
			</li>
		);
	}
}

ListItem.propTypes = {
	disabled: React.PropTypes.bool,
	highlighted: React.PropTypes.bool,
	label: React.PropTypes.string,
	onClick: React.PropTypes.func,
	value: React
    .PropTypes
    .oneOfType([React.PropTypes.number, React.PropTypes.string])
};
