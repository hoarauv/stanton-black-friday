import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchItemSkeleton } from './SearchItemSkeleton'
import { Container, List } from '@material-ui/core';
import SearchBarComponent from '../SearchBar/SearchBarComponent';
import MainPaperComponent from '../MainPaperComponent';
import { searchItem as searchItemAction } from '../../actions/SearchItemActions';
import { bindActionCreators } from 'redux';
import {SearchItemEmptyResult} from './SearchItemEmptyResult';
import {SearchItemListRow} from './SearchItemListRow';

const mapStateToProps = state => (state.searchItemReducer)

const mapDispatchToProps = dispatch => bindActionCreators({searchItemAction}, dispatch)

class SearchItemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        this.props.searchItemAction({input:"", options:{}})
    }
    RenderSearchResult() {
        if (this.props.computing) {
            return <SearchItemSkeleton/>
        } else if (this.props.items.length === 0) {
            return <SearchItemEmptyResult/>
        } else {
            const list_view = this.props.items.map((item, index) =>
                <SearchItemListRow name={item.item_name}
                type={item.item_type_name} key={index}/>);
            return <List>{list_view}</List>;
        }
    }
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
                    {this.RenderSearchResult()}
                </Container>
            </MainPaperComponent>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchItemContainer)