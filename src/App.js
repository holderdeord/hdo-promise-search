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
  Pagination
} from 'searchkit';

import translations from './translations';
const sk = new SearchkitManager('https://search.holderdeord.no/hdo_production_promises/')

sk.translateFunction = (key) => translations[key]

const PromiseItem = (props) => (
  <div style={{padding: '.5rem 1rem'}}>
    {props.result._source.body}
  </div>
)

export default () => (
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

          <Hits hitsPerPage={30} itemComponent={PromiseItem} />
          <NoHits suggestionsField="body" />
          <Pagination showNumbers={true}/>
        </LayoutResults>
      </LayoutBody>
    </Layout>
  </SearchkitProvider>
);
