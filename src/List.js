
import React, {Component} from 'react';
import Location from './Location';

class List extends Component {
    /**
     * Constructor
     */
    constructor(props) {
        super(props);
        this.state = {
            'locations': '',
            'query': '',
            'suggestions': true,
        };

        this.updateQuery = this.updateQuery.bind(this);
        this.toggleSuggestions = this.toggleSuggestions.bind(this);
    }

    /**
     * Filter Locations based on user query
     */
    updateQuery(event) {
        this.props.closeInfoWindow();
        const {value} = event.target;
        let locations = [];
        this.props.ourLocations.forEach(function (location) {
            if (location.longName.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                location.marker.setVisible(true);
                locations.push(location);
            } else {
                location.marker.setVisible(false);
            }
        });

        this.setState({
            'locations': locations,
            'query': value
        });
    }

    componentWillMount() {
        this.setState({
            'locations': this.props.ourLocations
        });
    }

    /**
     * Show and hide suggestions
     */
    toggleSuggestions() {
        this.setState({
            'suggestions': !this.state.suggestions
        });
    }

    /**
     * Render function of locationList
     */
    render() {
        let locationList = this.state.locations.map(function (listItem, index) {
            return (
                <Location key={index} openInfoWindow={this.props.openInfoWindow.bind(this)} data={listItem}/>
            );
        }, this);

        return (
          <div className='list-maps'>
          <div className="mapsshelf">
           <div className='list-maps-top'>
                <input role="search" aria-label="filter" id="search-field" className='search-maps' type="text" placeholder="Filter"
                       value={this.state.query} onChange={this.updateQuery}/>
			</div>

                 <ol className='maps-list'>
                    {this.state.suggestions && locationList}
                </ol>
                <button aria-label="show hide suggestions" className='map-list-button' onClick={this.toggleSuggestions}>Show/Hide Suggestions</button>
		</div>
		</div>
        );
    }
}

export default List;