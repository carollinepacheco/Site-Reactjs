import React from 'react'

function Main() {
    return (
        <div>
            <main id='main'>
                <div className='jumbotron card card-image jumbotron-img'>
                    <div className='text-white text-center py-5 px-4'>
                        <div>
                            <h2 className='card-title h1-responsive pt-3 mb-5 font-bold'><strong>Create your beautiful website with Bootstrap</strong></h2>
                            <p className='mx-5 mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                                optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
                            </p>
                            <a className='btn btn-outline-light btn-md' href='#' role='button'><i className='bi bi-collection-fill'></i>Leia mais</a>
                        </div>
                    </div>
                </div>
                <div className='jumbotron card' id='jumbotron-card'>
                    <div className='text-white text-center py-5 px-4'>
                        <h3>NOSSOS PROJETOS</h3>
                    </div>
                </div>
                <div className='container-fluid mb-3' id='cards-doacao'>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        <div className="col">
                            <div className='card h-100' style={{ width: '18rem' }}>
                                <img src="https://live.staticflickr.com/65535/52500414261_6a273493c8_b.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div className='card-footer'>
                                    <a href="#" className="btn btn-primary">Doar</a>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className='card h-100' style={{ width: '18rem' }}>
                                <img src="https://live.staticflickr.com/65535/52500414261_6a273493c8_b.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div className='card-footer'>
                                    <a href="#" className="btn btn-primary">Doar</a>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className='card h-100' style={{ width: '18rem' }}>
                                <img src="https://live.staticflickr.com/65535/52500414261_6a273493c8_b.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div className='card-footer'>
                                    <a href="#" className="btn btn-primary">Doar</a>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '45%' }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className='card h-100' style={{ width: '18rem' }}>
                                <img src="https://live.staticflickr.com/65535/52500414261_6a273493c8_b.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div className='card-footer'>
                                    <a href="#" className="btn btn-primary">Doar</a>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Main
