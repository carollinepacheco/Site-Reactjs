import React from 'react'

function Main() {
    return (
        <div>
            <main id='main'>
                <div className='jumbotron card card-image jumbotron-img'>
                    <div className='text-white text-center py-5 px-4'>
                        <div>
                            <h2 className='card-title h1-responsive pt-3 mb-5 font-bold'><strong>Doreá</strong></h2>
                            <p className='mx-5 mb-5'>Projeto voltado para arrecadação e doação de fundos para ONGS de Educação!
                            </p>
                            <a className='btn btn-dark btn-rounded btn-md' id='btnLeiaMais' href='/Sobre' role='button'><i className='bi bi-collection-fill'></i>Leia mais</a>
                        </div>
                    </div>
                </div>

                <div className='jumbotron card' id='jumbotron-card'>
                    <svg id='svgOndas'
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        style={{
                            opacity: '0.83',
                            width: '100%',
                            height: '130px',
                            fill: '#62c6df',
                            transform: 'rotateY(180deg)'
                        }}>
                        <path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'></path>
                    </svg>
                    <div className='text-white text-center py-5 px-4 pt-0'>
                        <h3>NOSSOS PROJETOS</h3>
                        <h2>Venha conhecer</h2>
                    </div>
                </div>
                <div class='container-fluid mb-3' id='cards-doacao'>
                    <div class='row gx-3 justify-content-center'>
                        <div class='col-lg-3 col-md-6 pt-3'>
                            <div class='card'>
                                <img src='https://live.staticflickr.com/6147/5951651981_4b0aea3b2d_o.jpg' height='200px' class='card-img-top' alt='computadores' />
                                <div class='card-body'>
                                    <h5 class='card-title'>Doação de Computadores</h5>
                                    <p class='card-text'>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </p>
                                    <div className='card-footer d-grid'>
                                        <a href='#' className='btn btn-primary'>Doar</a>
                                    </div>
                                    <div className='progress'>
                                        <div className='progress-bar progress-bar-striped bg-success' role='progressbar' style={{ width: '25%' }} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>25%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='col-lg-3 col-md-6 pt-3'>
                            <div class='card'>
                                <img src='https://live.staticflickr.com/7376/16395045085_d3391ab068_o.jpg' height='200px' class='card-img-top' alt='livros' />
                                <div class='card-body'>
                                    <h5 class='card-title'>Doação de Livros</h5>
                                    <p class='card-text'>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </p>
                                    <div className='card-footer d-grid'>
                                        <a href='#' className='btn btn-primary'>Doar</a>
                                    </div>
                                    <div className='progress'>
                                        <div className='progress-bar progress-bar-striped bg-success' role='progressbar' style={{ width: '45%' }} aria-valuenow='45' aria-valuemin='0' aria-valuemax='100'>45%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='col-lg-3 col-md-6 pt-3'>
                            <div class='card'>
                                <img src='https://live.staticflickr.com/7005/6540872225_553bbd183e_o.jpg' height='200px' class='card-img-top' alt='cesta basica' />
                                <div class='card-body'>
                                    <h5 class='card-title'>Doação de Alimentos</h5>
                                    <p class='card-text'>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </p>
                                    <div className='card-footer d-grid'>
                                        <a href='#' className='btn btn-primary'>Doar</a>
                                    </div>
                                    <div className='progress'>
                                        <div className='progress-bar progress-bar-striped bg-success' role='progressbar' style={{ width: '50%' }} aria-valuenow='50' aria-valuemin='0' aria-valuemax='100'>50%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='col-lg-3 col-md-6 pt-3'>
                            <div class='card'>
                                <img src='https://live.staticflickr.com/65535/51631991833_ab0243f021_o.jpg' height='200px' class='card-img-top' alt='Fissure in Sandstone' />
                                <div class='card-body'>
                                    <h5 class='card-title'>Doação de Absorventes</h5>
                                    <p class='card-text'>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </p>
                                    <div className='card-footer d-grid'>
                                        <a href='#' className='btn btn-primary'>Doar</a>
                                    </div>
                                    <div className='progress'>
                                        <div className='progress-bar progress-bar-striped bg-success' role='progressbar' style={{ width: '70%' }} aria-valuenow='70' aria-valuemin='0' aria-valuemax='100'>70%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </div >
    )
}

export default Main
