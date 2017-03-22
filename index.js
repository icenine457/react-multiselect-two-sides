import React from 'react';
import classNames from 'classnames';
import List from './components/list';
import ListSeparator from './components/list-separator';
import FilterContainer from './components/filter-container';
import Filter from './components/filter';

class MultiselectTwoSides extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterAvailable: '',
			filterSelected: ''
		};

    // Instance methods
		this.handleClickAvailable = value => {
			this
        .props
        .onChange(this.props.value.concat(value));
		};

		this.handleClickSelected = value => {
			const {onChange, value: currentValue} = this.props;
			const newValue = currentValue.slice();

			newValue.splice(currentValue.indexOf(value), 1);
			onChange(newValue);
		};

		this.handleClickSelectAll = () => {
			const {limit, onChange, options, value, valueKey} = this.props;
			const previousValue = value.slice();

			const newValue = options.reduce((a, b) => {
				if (!b.disabled && previousValue.indexOf(b[valueKey]) === -1) {
					a.push(b[valueKey]);
				}
				return a;
			}, previousValue);

			let limitedValue = newValue;
			if (limit >= 0) {
				limitedValue = limitedValue.slice(0, limit);
			}

			limitedValue.sort();

			onChange(limitedValue);
		};

		this.handleClickDeselectAll = () => {
			this
        .props
        .onChange([]);
		};

		this.filterAvailable = () => {
			const {
        highlight,
        labelKey,
        limit,
        options,
        value,
        valueKey
      } = this.props;
			const filtered = options.reduce((a, b) => {
				if (value.indexOf(b[valueKey]) === -1) {
					a.push(b);
				}
				return a;
			}, []);

			let limited = filtered;
			if (value.length >= limit) {
				limited = filtered.map(item => {
					return Object.assign({}, item, {disabled: true});
				});
			}

			if (highlight && highlight.length > 0) {
				limited = limited.map(item => {
					if (highlight.indexOf(item[valueKey]) > -1) {
						return Object.assign({}, item, {highlighted: true});
					}
					return item;
				});
			}

			if (!this.props.searchable) {
				return limited;
			}

			const {filterAvailable: filter} = this.state;
			if (filter) {
				return limited.filter(a => (filterByName(a, filter, labelKey)));
			}

			return limited;
		};

		this.filterActive = () => {
			const {labelKey, options, value, valueKey} = this.props;
			const filtered = options.reduce((a, b) => {
				if (value.indexOf(b[valueKey]) > -1) {
					a.push(b);
				}
				return a;
			}, []);

			if (!this.props.searchable) {
				return filtered;
			}

			const {filterSelected: filter} = this.state;
			if (filter) {
				return filtered.filter(a => (filterByName(a, filter, labelKey)));
			}

			return filtered;
		};

		this.handleChangeFilterAvailable = filterAvailable => {
			this.setState({filterAvailable});
		};

		this.handleChangeFilterSelected = filterSelected => {
			this.setState({filterSelected});
		};

		this.renderFilter = (value, onChange) => {
			const {clearFilterText, clearable, disabled, filterComponent, placeholder} = this.props;

			if (!filterComponent) {
				return (
					<Filter
						value={value}
						onChange={onChange}
						{...{clearFilterText, clearable, disabled, placeholder}}
						/>);
			}

			return React.createElement(filterComponent, {
				clearFilterText,
				clearable,
				disabled,
				onChange,
				placeholder,
				value
			});
		};
	}

	render() {
		const {
      availableFooter,
      availableHeader,
      className,
      deselectAllText,
      disabled,
      labelKey,
      limit,
      options,
      searchable,
      selectAllText,
      selectedFooter,
      selectedHeader,
      showControls,
      value,
      valueKey
    } = this.props;

		const {filterAvailable, filterSelected} = this.state;

		const componentClassName = 'msts';

		let sideControls = null;
		if (showControls) {
			sideControls = (
				<div className="msts__side msts__side_controls">
					<button
						className="msts__control msts__control_select-all"
						onClick={this.handleClickSelectAll}
						title={selectAllText}
						type="button"
						disabled={value.length === options.length || value.length >= limit || disabled}
						/>

					<button
						className="msts__control msts__control_deselect-all"
						onClick={this.handleClickDeselectAll}
						title={deselectAllText}
						type="button"
						disabled={!value.length || disabled}
						/>
				</div>
				);
		}

		return (
			<div className={classNames(componentClassName, disabled && `${componentClassName}_disabled`, className)}>
				<ListSeparator
					availableSeparator={availableHeader}
					selectedSeparator={selectedHeader}
					containerClass="msts__heading"
					/>

				<FilterContainer
					searchable={searchable}
					filterAvailable={filterAvailable}
					filterSelected={filterSelected}
					onChangeFilterAvailable={this.handleChangeFilterAvailable}
					onChangeFilterSelected={this.handleChangeFilterSelected}
					renderFilter={this.renderFilter}
					/>

				<div className="msts__body">
					<div className="msts__side msts__side_available">
						<List
							options={this.filterAvailable()}
							onClick={this.handleClickAvailable}
							{...{disabled, labelKey, valueKey}}
							/>
					</div>

					{sideControls}

					<div className="msts__side msts__side_selected">
						<List
							options={this.filterActive()}
							onClick={this.handleClickSelected}
							{...{disabled, labelKey, valueKey}}
							/>
					</div>
				</div>

				<ListSeparator
					availableSeparator={availableFooter}
					selectedSeparator={selectedFooter}
					containerClass="msts__footer"
					/>
			</div>
		);
	}
}

export default MultiselectTwoSides;

function filterByName(a, name, labelKey) {
	return a[labelKey]
    .toLowerCase()
    .indexOf(name.toLowerCase()) > -1;
}

MultiselectTwoSides.propTypes = {
	availableFooter: React.PropTypes.node,
	availableHeader: React.PropTypes.node,
	className: React.PropTypes.string,
	clearFilterText: React.PropTypes.string,
	clearable: React.PropTypes.bool,
	deselectAllText: React.PropTypes.string,
	disabled: React.PropTypes.bool,
	filterComponent: React.PropTypes.func,
	highlight: React.PropTypes.array,
	labelKey: React.PropTypes.string,
	limit: React.PropTypes.number,
	onChange: React.PropTypes.func,
	options: React.PropTypes.array,
	placeholder: React.PropTypes.string,
	searchable: React.PropTypes.bool,
	selectAllText: React.PropTypes.string,
	selectedFooter: React.PropTypes.node,
	selectedHeader: React.PropTypes.node,
	showControls: React.PropTypes.bool,
	value: React.PropTypes.array,
	valueKey: React.PropTypes.string
};

MultiselectTwoSides.defaultProps = {
	clearFilterText: 'Clear',
	clearable: true,
	deselectAllText: 'Deselect all',
	disabled: false,
	highlight: [],
	labelKey: 'label',
	options: [],
	searchable: false,
	selectAllText: 'Select all',
	showControls: false,
	value: [],
	valueKey: 'value'
};
