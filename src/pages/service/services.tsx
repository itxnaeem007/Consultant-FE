import React, { useState } from 'react';
import FloatingStyle from '../../shared/floatingStyle';
import { getService } from './../../services/services'

function ServicesScreen() {

    const [serviceData, setServiceData] = useState<any>([])

    React.useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await getService();
                console.log(response.data.results)
                setServiceData(response.data.results)
            } catch (error) {

            }
        }
        fetchServices()
    }, [])

    return (
        <div >
            <section className="page-title-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Services</h2>
                        </div>
                    </div>
                </div>
                <FloatingStyle />
            </section>
            <section className="services-area ptb-100">
                <div className="container">
                    <div className="row">
                        {serviceData && serviceData.map((service: any, index: number) => {
                            return (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="single-services">
                                        <div className="icon"><img src={service.image} alt="" /></div>
                                        <h3>{service.name}</h3>
                                        <p>{service.short_description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ServicesScreen;