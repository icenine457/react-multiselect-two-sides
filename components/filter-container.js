import React from 'react';

export default class FilterContainer extends React.Component {
		render() {
				const {
					searchable,
					filterAvailable,
					filterSelected,
					onChangeFilterAvailable,
					onChangeFilterSelected,
					renderFilter
				} = this.props;

				if (!searchable) {
						return null;
				}
				return (
						<div className="msts__subheading">
								<div className="msts__side msts__side_filter">
										{renderFilter(filterAvailable, onChangeFilterAvailable)}
								</div>

								<div className="msts__side msts__side_filter">
										{renderFilter(filterSelected, onChangeFilterSelected)}
								</div>
						</div>
				)

		}
}
