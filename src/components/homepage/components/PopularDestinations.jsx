import React from 'react'

const PopularDestinations = () => {
    return (
        <div>
            <section className="popular" id="destination">
                <div className="custom-container ">
                    <p className="section-subtitle">Uncover place</p>
                    <h2 className="h2 section-title">Popular destination</h2>
                    <p className="section-text">
                        Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
                        Sit ornare
                        mollitia tenetur, aptent.
                    </p>
                    <ul className="popular-list">
                        <li>
                            <div className="popular-card">
                                <figure className="card-img">
                                    <img src="./assets/images/popular-1.jpg" alt="San miguel, italy" loading="lazy" />
                                </figure>
                                <div className="card-content">
                                    <div className="card-rating">
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                    </div>
                                    <p className="card-subtitle">
                                        <a href="#">Italy</a>
                                    </p>
                                    <h3 className="h3 card-title">
                                        <a href="#">San miguel</a>
                                    </h3>
                                    <p className="card-text">
                                        Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="popular-card">
                                <figure className="card-img">
                                    <img src="./assets/images/popular-2.jpg" alt="Burj khalifa, dubai" loading="lazy" />
                                </figure>
                                <div className="card-content">
                                    <div className="card-rating">
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                    </div>
                                    <p className="card-subtitle">
                                        <a href="#">Dubai</a>
                                    </p>
                                    <h3 className="h3 card-title">
                                        <a href="#">Burj khalifa</a>
                                    </h3>
                                    <p className="card-text">
                                        Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="popular-card">
                                <figure className="card-img">
                                    <img src="./assets/images/popular-3.jpg" alt="Kyoto temple, japan" loading="lazy" />
                                </figure>
                                <div className="card-content">
                                    <div className="card-rating">
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                    </div>
                                    <p className="card-subtitle">
                                        <a href="#">Japan</a>
                                    </p>
                                    <h3 className="h3 card-title">
                                        <a href="#">Kyoto temple</a>
                                    </h3>
                                    <p className="card-text">
                                        Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <button className="custom-btn custom-btn-primary">More destintion</button>
                </div>
            </section>
        </div>
    )
}

export default PopularDestinations