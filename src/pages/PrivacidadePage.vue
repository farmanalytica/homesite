<script setup lang="ts">
import { SITE } from '../data/site'
</script>

<template>
  <section class="hero">
    <div class="container">
      <h1>Política de Privacidade</h1>
      <p class="hero-lead">
        Como a FARM Analytica coleta, usa e protege seus dados, em conformidade com a LGPD (Lei
        13.709/2018).
      </p>
    </div>
  </section>

  <section class="alt">
    <div class="container prose">
      <p>
        <em>Conteúdo provisório — substituir pelo texto legal oficial migrado de
        farmanalytica.com.br/politica-de-privacidade antes da publicação.</em>
      </p>

      <h2>1. Dados que coletamos</h2>
      <p>
        Coletamos dados de contato fornecidos por você (nome, e-mail, telefone) e o contorno das
        áreas agrícolas enviadas para monitoramento por satélite.
      </p>

      <h2>2. Como usamos seus dados</h2>
      <ul>
        <li>Gerar e entregar mapas e relatórios de sensoriamento remoto;</li>
        <li>Comunicação sobre serviços, suporte e atualizações;</li>
        <li>Melhoria contínua das nossas soluções.</li>
      </ul>

      <h2>3. Compartilhamento</h2>
      <p>
        Não vendemos seus dados. Compartilhamos apenas com prestadores necessários à operação do
        serviço e quando exigido por lei.
      </p>

      <h2>4. Seus direitos</h2>
      <p>
        Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento pelo
        e-mail
        <a :href="`mailto:${SITE.email}`">{{ SITE.email }}</a>.
      </p>

      <h2>5. Contato do controlador</h2>
      <p>
        FARM Analytica — CNPJ {{ SITE.cnpj }}<br />
        E-mail: <a :href="`mailto:${SITE.email}`">{{ SITE.email }}</a><br />
        Telefone: <a :href="SITE.phoneHref">{{ SITE.phone }}</a>
      </p>
    </div>
  </section>
</template>
