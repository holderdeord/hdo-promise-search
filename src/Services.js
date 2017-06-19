import React, { Component } from 'react';

export default class Services extends Component {
    state = { services: [] };

    componentDidMount() {
        let service = window.location.host.includes('localhost')
            ? 'local'
            : 'promises';

        fetch(
            `https://files.holderdeord.no/data/hdo/services.json?service=${service}`
        )
            .then(res => (res.ok ? res.json() : []))
            .then(services => this.setState({ services }));
    }

    render() {
        const services = this.state.services.filter(
            s => s.enabled && s.url.indexOf('løfter.holderdeord.no') === -1
        );

        if (!services.length) {
            return null;
        }

        return (
            <div className="other-services hdo-card">
                <div className="hdo-card-header">
                    <h3>Andre tjenester fra Holder de ord</h3>
                </div>

                <div className="other-services-row">
                    {services.map(service =>
                        <div className="service" key={service.title}>
                            <a href={service.url}>
                                <div
                                    className="img"
                                    style={
                                        service.style || {
                                            backgroundImage: `url(${service.img})`
                                        }
                                    }
                                />

                                <div style={{ padding: '1rem' }}>
                                    <h4>{service.title}</h4>

                                    <p className="lead">
                                        {service.description}
                                    </p>
                                </div>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
