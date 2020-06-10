import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SearchItemSkeleton} from './SearchItemSkeleton';
import {Container, List} from '@material-ui/core';
import SearchBarComponent from '../SearchBar/SearchBarComponent';
import {MainPaperComponent} from '../MainPaperComponent';
import {searchItem as searchItemAction} from '../../actions/SearchItemActions';
import {bindActionCreators} from 'redux';
import {SearchItemEmptyResult} from './SearchItemEmptyResult';
import {SearchItemListRow} from './SearchItemListRow';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => (state.searchItemReducer);

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({searchItemAction}, dispatch);

/**
 * Represents the View allowing the user to browse items, or search for
 * speficic ones
 */
class SearchItemContainer extends Component {
  /**
   * Seeking for the first page of items for starters
   */
  componentDidMount() {
    this.props.searchItemAction({input: '', options: {}});
  }
  /**
   * Renders the content of the list
   * @return {ReactNode} - The React Node to be displayed to show the content
   * of the list
   */
  renderSearchResult() {
    if (this.props.computing) {
      return <SearchItemSkeleton/>;
    } else if (this.props.items.length === 0) {
      return <SearchItemEmptyResult/>;
    } else {
      const listView = this.props.items.map((item, index) =>
        <SearchItemListRow name={item.item_name}
          type={item.item_type_name} key={index}/>);
      return <List>{listView}</List>;
    }
  }
  /**
   * Renders the component
   * @return {ReactNode} - The whole view of the search page
   */
  render() {
    return (
      <MainPaperComponent>
        <Container>
          <SearchBarComponent
            disabled={true}
            placeholder="Search a specific item"
            onSearch={(searchString, tags=[]) => {}}
            preFill={this.state.lastSearch}
          />
          {this.renderSearchResult()}
        </Container>
      </MainPaperComponent>
    );
  }
}

SearchItemContainer.propTypes = {
  searchItemAction: PropTypes.func.isRequired,
  computing: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchItemContainer);
