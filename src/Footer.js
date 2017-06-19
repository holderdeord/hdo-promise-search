import React from 'react';

export default props =>
    <footer>
        <div>
            <div className="hdo-logo" />
            <h4>Holder de ord &copy; 2017</h4>

            <small>
                <p>
                    <a href="https://files.holderdeord.no/data/csv/promises.csv">
                        Last ned hele databasen som CSV.
                    </a>
                </p>
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
