<template>
  <div class="module-quiz col-12">
    <div v-if="currentSlideData.header.header != null" class="row">
      <div class="col-12">
        <h1 class="module-text__header text-center">{{ currentSlideData.header.header }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <p v-if="currentSlideData.header.sub_header" class="module-text__sub-header"> {{ currentSlideData.header.sub_header }} </p>
        <photo v-for="(element, id) in currentSlideData.content.images"
          :key="`${id}-${element.id}`"
          :image="element"/>
        <quiz-question  v-for="(element, id) in currentSlideData.content.questions"
          :object="element"
          :options="element.options"
          :answer="element.answer"
          :index="id"
          :key="id"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import QuizQuestion from './quiz/QuizQuestion'
import Photo from './shared/Photo'

export default {
  components: {
    QuizQuestion,
    Photo
  },

  computed: {
    ...mapGetters(
      [
        'currentSlideData'
      ]
    )
  }
}
</script>
