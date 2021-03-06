import React, { Component } from 'react';
import cn from 'classnames';

import {
    SearchkitManager,
    SearchkitProvider,
    Layout,
    LayoutBody,
    TopBar,
    SideBar,
    LayoutResults,
    ActionBar,
    ActionBarRow,
    HitsStats,
    SelectedFilters,
    SearchBox,
    Hits,
    NoHits,
    RefinementListFilter,
    Pagination,
    PaginationSelect
} from 'searchkit';

import PromiseItem from './PromiseItem';

import { translations, customHighlight, urlQuery } from './utils';

const searchkit = new SearchkitManager(
    'https://search.holderdeord.no/hdo_production_promises/'
);
searchkit.translateFunction = key => translations[key];

searchkit.setQueryProcessor(query => {
    if (!query.query) {
        // empty query! sort by period name descending
        query.sort = { parliament_period_name: { order: 'desc' } };
    }

    return query;
});

export default class Search extends Component {
    state = {
        filtersShown: false
    };

    componentDidMount() {
        // this.performExampleQuery();
    }

    performExampleQuery() {
        const accessor = searchkit.accessors.queryAccessor;
        const queryString = urlQuery.q;

        if (!queryString || !queryString.length) {
            const exampleQueries = [
                'bompenger',
                'rushtidsavgift',
                'sexkjøpsloven',
                'atomvåpen',
                'formueskatt',
                'kontantstøtte',
                'oljeutvinning',
                'narkotika',
                'jernbane',
                'asylsøkere',
                'eiendomsskatt',
                'NATO',
                'EØS',
                'ulv',
                'ungdomsskolen',
                'lærere',
                'surrogati',
                'eggdonasjon',
                'arbeidsmiljøloven'
            ];
            const example =
                exampleQueries[
                    Math.floor(Math.random() * exampleQueries.length)
                ];

            accessor.setQueryString(example);
            searchkit.performSearch();
        }
    }

    render() {
        return (
            <div className="search">
                <SearchkitProvider searchkit={searchkit}>
                    <Layout>
                        <TopBar>
                            <div
                                className="filter-button"
                                onClick={() =>
                                    this.setState({
                                        filtersShown: !this.state.filtersShown
                                    })}
                            />

                            <SearchBox
                                autofocus
                                searchOnChange
                                prefixQueryFields={['body']}
                            />
                        </TopBar>

                        <LayoutBody>
                            <SideBar
                                className={cn('filters', {
                                    'filters-hidden-md': !this.state
                                        .filtersShown
                                })}
                            >
                                <RefinementListFilter
                                    id="period"
                                    title="Stortingsperiode"
                                    field="parliament_period_name"
                                    size={10}
                                    operator="OR"
                                    orderKey="_term"
                                />

                                <RefinementListFilter
                                    id="parties"
                                    title="Partier og regjeringer"
                                    field="promisor_name"
                                    size={20}
                                    operator="OR"
                                    orderKey="_term"
                                />

                                <RefinementListFilter
                                    id="categories"
                                    title="Kategorier"
                                    field="category_names"
                                    size={10}
                                />
                            </SideBar>

                            <LayoutResults>
                                <ActionBar>
                                    <ActionBarRow>
                                        <HitsStats />
                                        <SelectedFilters />
                                    </ActionBarRow>
                                </ActionBar>

                                <Hits
                                    hitsPerPage={30}
                                    highlightFields={['body']}
                                    customHighlight={customHighlight}
                                    itemComponent={PromiseItem}
                                />

                                <NoHits suggestionsField="body" />

                                <Pagination
                                    showNumbers={true}
                                    pageScope={1}
                                    showFirst={false}
                                    showText={true}
                                />

                                <PaginationSelect />

                            </LayoutResults>
                        </LayoutBody>
                    </Layout>
                </SearchkitProvider>
            </div>
        );
    }
}
