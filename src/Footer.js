import React from 'react';

export default props =>
    <footer>
        <div>
            <div className="hdo-logo" />
            <h4>Holder de ord &copy; 2017</h4>

            <small>
                <div>
                    Kildekode på <a href="https://github.com/holderdeord/hdo-promise-search">GitHub</a> lisensiert under <a href="http://opensource.org/licenses/BSD-3-Clause">BSD</a>.

                    <div>
                        Du kan også <a href="https://files.holderdeord.no/data/csv/promises.csv">
                            laste ned hele løftebasen som CSV
                        </a>.
                    </div>
                </div>


                <p>
                    Spørsmål? Ta{' '}
                    <a href="mailto:kontakt@holderdeord.no">kontakt</a>.
                </p>
            </small>

            <div className="links">
                <a href="https://www.holderdeord.no/portal">holderdeord.no</a>
                <span>·</span>
                <a href="https://twitter.com/holderdeord">@holderdeord</a>
            </div>
        </div>
    </footer>;
