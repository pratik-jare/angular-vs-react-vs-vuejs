<template>
  <div class="home">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ heading }}</h1>
          <div class="is-two-thirds column is-paddingless">
            <h2 class="subtitle is-4">{{ subheading }}</h2>
          </div>
          <a class="button is-large is-primary" id="learn">Learn more</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns pd is-desktop">
          <div class="column is-1 has-text-centered">
            <i class="fa fa-cog is-primary"></i>
          </div>
          <div class="column is-one-third-desktop">
            <p class="title"><strong>The core of beauty is simplicity.</strong></p>
          </div>
          <div class="column">
            <p>“Simplicity is the final achievement. After one has played a vast quantity of notes and more notes, it is simplicity that emerges as the crowning reward of art.”</strong></p>
          </div>
        </div>
      </div>

      <div class="columns pd">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">“Nature is pleased with simplicity. And nature is no dummy.”</p>
              <p class="subtitle">- Isaac Newton</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">“That’s been one of my mantras – focus and simplicity. Simple can be harder than complex…”</p>
              <p class="subtitle">-  Steve Jobs</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">“We have one hardware organization. We have one software organization. It’s not like we’re this big company with all these divisions that are cranking out products. We’re simpletons.”</p>
              <p class="subtitle">-  Tim Cook</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      heading: 'Simple is Great.',
      subheading: '"Simplicity is a choice, a discrimination, a crystallization. Its object is purity.”'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.hero
  background: url('../assets/clouds.jpg')
  background-size: cover

  .title
    +mobile
      font-weight: bold
    +tablet
      font-size: 2.5rem
    +desktop
      font-size: 4rem
      margin-top: 2rem

h2
  margin: 1.5rem 0 2rem 0 !important

.fa-cog
  font-size: 40px

#learn
  +desktop
    margin-bottom: 2rem

.pd
  +tablet
    padding: 2em 0



</style>
