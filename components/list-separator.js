import React from 'react';

export default class ListSeparator extends React.Component {
		render() {
				const {availableSeparator, selectedSeparator, containerClass} = this.props;
				const hasHeader = availableSeparator || selectedSeparator;
				if (!hasHeader) {
						return null
				}

				return (
						<div className={containerClass}>
								<div className="msts__side msts__side_available">
										{availableSeparator}
								</div>

								<div className="msts__side msts__side_selected">
										{selectedSeparator}
								</div>
						</div>
				)
		}
}
