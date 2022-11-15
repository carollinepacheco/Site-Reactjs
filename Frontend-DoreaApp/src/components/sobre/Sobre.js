import React from 'react'

export default function Sobre() {
  return (
    <div>
      <main id='sobre' className='main-tamanho'>
        <div className='h-50 d-flex align-items-center bg-img pt-5'>
          <div className='container'>
            <div className='row'>
              <div className='mx-auto text-center col-md-6'>
                <h1 className='display-1 text-white'>Sobre a Doreá</h1>
                <p className='lead text-primary'>
                  &nbsp;Somos um projeto que nasceu na
                  <a href='https://recode.org.br/'>Recode</a> em 2022, com intuito
                  de contribuir para a agenda de desenvolvimento sustentável da
                  onu.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='py-5'>
          <div className='container'>
            <div className='row'>
              <div className='p-4 col-lg-4 col-md-6'>
                <h4><b>Missão</b></h4>
                <p className='fw-semibold'>
                  Reduzir o acesso desigual aos recursos escolares.
                </p>
              </div>
              <div className='p-4 col-lg-4 col-md-6'>
                <h4><b>Visão</b></h4>
                <p className='fw-semibold'>
                  Suprir a desigualdade e promover o acesso aos estudos.
                </p>
              </div>
              <div className='p-4 col-lg-4'>
                <h4><b>Valores</b></h4>
                <p className='fw-semibold'>
                  Gerar oportunidades á todos, com igualdade e equidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
