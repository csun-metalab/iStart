<template>
  <div class="module-quizInput mb-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 mb-3">
          <h1 class="module-text__header">{{ currentSlideData.header.header }}</h1>
          <h2 class="module-text__sub-header">{{ currentSlideData.header.sub_header }}</h2>
        </div>
        <template v-for="(element, index) in getSlideData(currentSlideNumber-1).content.questions">
          <div :key="index" class="module-quizInput__question col-12 mb-2">
            <p class="module-text__caption">{{ element.question }}</p>
          </div>
          <div :key="index + '-chart1'" class="col-6 py-1 px-lg-5">
            <pie-chart-legend chart-id="one"
              :response="element.userResponse"
              :sources="element.answer"/>
          </div>
          <div :key="index + '-chart2'" class="col-6 py-1 px-lg-5">
            <pie-chart-legend chart-id="two"
              :response="element.userResponse"
              :sources="element.answer"/>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { awaitTimeBeforeContinue } from './../../../mixins/awaitTimeBeforeContinue'
import PieChartLegend from './../templates/pieChart/PieChartLegend'

export default {
  mixins: [awaitTimeBeforeContinue],
  components: {
    PieChartLegend
  },

  computed: {
    ...mapGetters(
      [
        'userResponses',
        'getSlideData',
        'currentSlideNumber',
        'currentSlideData'
      ]
    )
  }
}
</script>
