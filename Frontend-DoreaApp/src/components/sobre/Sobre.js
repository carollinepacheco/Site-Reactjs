import React from 'react'

export default function Sobre() {
  return (
    <div>
      <main class="container text-center">
        <article class="text-center pt-4 row d-flex justify-content-center align-items-center">
          <h2 class="text-uppercase fw-bold col-12 align-items-end">Sobre Nós</h2>
          <p class="fw-semibold col-md-3 col-sm-6 fs-5">Somos uma empresa que procura ajudar os responsáveis a colocar o seus filhos na escola em segurança de forma gratuita e acessível
            a todos.</p>
          <figure class="col-md-3 col-sm-6">
            <div class="">
              <img src="../img/ilustração-crinança-escola.png" alt="desenho duas crianças indo a escola" class=" img-fluid"/>
            </div>
          </figure>
        </article>

        <article class="tex-center pt-4 row d-flex justify-content-center align-items-center">
          <h2 class="text-uppercase fw-bold 12 align-items-end p-2">Missão</h2>
          <figure class="col-md-3 col-sm-6">
            <img src="../img/mapa-do-tesouro.png" alt="mapa do tesouro" class="img-fluid"/>
          </figure>
          <p class="fw-semibold image.png col-md-3 col-sm-6 fs-5">Reduzir o afastamento escolar causado pela falta de locomoção para estudantes e garantir a segurança do jovem no caminho para a escola.  </p>
        </article>

        <article class="tex-center pt-4 row d-flex justify-content-center align-items-center">
          <h2 class="text-uppercase fw-bold align-items-end p-2">Visão</h2>
          <p class="fw-semibold col-md-3 col-sm-6 fs-5">Atender em todo o Brasil e alcançar o maior numero de jovens possiveis</p>
          <figure class="col-md-3 col-sm-6">
            <img src="../img/desenho-visão.png" alt="oculos-laranja" class="img-fluid"/>
          </figure>
        </article>

        <article class="tex-center pt-4 row d-flex justify-content-center align-items-center">
          <h2 class="text-uppercase fw-bold col-12 align-items-end p-2">Valores</h2>
          <figure class="col-md-3 col-sm-6">
            <img src="../img/valores.png" alt="mão com coração em cima" class="img-fluid"/>
          </figure>
          <section class="col-md-3 col-sm-6 fs-5">
            <ul class="list-style text-center">
              <li class="list-group-item fw-semibold">oportunidades</li>
              <li class="list-group-item fw-semibold">diversidade</li>
              <li class="list-group-item fw-semibold">igualdade</li>
              <li class="list-group-item fw-semibold">equidade</li>
            </ul>
          </section>
        </article>
      </main>
    </div>
  )
}
