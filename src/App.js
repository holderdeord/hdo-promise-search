import React from 'react';
import './App.scss';

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

import {
    translations,
    customHighlight
} from './utils';

const sk = new SearchkitManager('https://search.holderdeord.no/hdo_production_promises/');

sk.translateFunction = (key) => translations[key]

export default () => (
    <div>
        <header>
            <div className="hdo-logo">
                Holder de ord 
                <a href="https://www.holderdeord.no/portal" title="tilbake til hovedsiden" className="hdo-logo-link"></a>
            </div>
            <h1>Løftedatabasen</h1>
            <div className="header-links">
                <a href="https://www.holderdeord.no/portal/om-oss">Om oss</a>
                <a href="https://www.holderdeord.no/portal/stott-oss">Støtt oss</a>
            </div>
        </header>
        <SearchkitProvider searchkit={sk}>
            <Layout>
                <TopBar>
                    <SearchBox
                      autofocus
                      searchOnChange
                      prefixQueryFields={["body"]}
                    />
                </TopBar>
                <LayoutBody>
                    <SideBar>
                        <RefinementListFilter
                            id="period"
                            title="Stortingsperiode"
                            field="parliament_period_name"
                            size={10}
                            orderKey="_term"
                        />

                        <RefinementListFilter
                            id="parties"
                            title="Partier og regjeringer"
                            field="promisor_name"
                            size={10}
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
                          highlightFields={["body"]}
                          customHighlight={customHighlight}
                          itemComponent={PromiseItem}
                        />

                        <NoHits suggestionsField="body" />

                        <Pagination showNumbers={true} pageScope={1} showFirst={false} showText={true} />
                        <PaginationSelect />

                  </LayoutResults>
                </LayoutBody>
              </Layout>
        </SearchkitProvider>
        <footer>
            <div>
                <div className="hdo-logo"></div> 
                <h4>Holder de ord © 2017</h4>
                <small>
                    Spørsmål? Ta <a href="#">kontakt</a>
                </small>
                <div className="links">
                <a href="https://www.holderdeord.no/portal">holderdeord.no</a>
                <span>·</span>       
                <a href="https://twitter.com/holderdeord">@holderdeord</a>
                </div>
            </div>
        </footer>
    </div>
);
