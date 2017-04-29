import React from 'react';
import './App.css';

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
  RefinementListFilter
} from 'searchkit';

import 'searchkit/release/theme.css';

const sk = new SearchkitManager('https://search.holderdeord.no/hdo_production_promises/')

const Promise = (props) => (
  <div style={{padding: '1rem'}}>
    {props.result._source.body}
  </div>
)

export default () => (
  <SearchkitProvider searchkit={sk}>
    <Layout>
      <TopBar>
        <SearchBox autofocus searchOnChange />
      </TopBar>

      <LayoutBody>
        <SideBar>
          <RefinementListFilter
            id="period"
            title="Stortingsperiode"
            field="parliament_period_name"
            size={10}
          />

          <RefinementListFilter
            id="parties"
            title="Partier og regjeringer"
            field="promisor_name"
            size={10}
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

          <Hits hitsPerPage={10} itemComponent={Promise} />
        </LayoutResults>
      </LayoutBody>
    </Layout>
  </SearchkitProvider>
);
