<template>
  <div class="module-quiz">
    <div class="module-quiz__question">
      <p class="module-quiz__text" v-html="object.question"></p>
    </div>
    <div class="row">
      <div class="module-quiz__option-container col-sm-6 col-12" v-for="(element, optionIndex) in options" :key="optionIndex">
        <button
          @click="showResponse(optionIndex)"
          class="module-quiz__option"
          :class="[(element.show && element.isAnswer ? 'module-quiz__option--correct' : '' ),
                  (element.show && !element.isAnswer ? 'module-quiz__option--incorrect' : '')]"
          :aria-expanded="element.show ? 'tree' : 'false'">

          <span class="module-quiz__option-indicator" :class="element.show ? 'module-quiz__option-indicator--show': ''">
            <i class="fa" :class="element.isAnswer ? 'fa-check-circle' : 'fa-times-circle' "></i>
          </span>

          <div class="module-quiz__option-content" :class="[(object.options[optionIndex].show ? 'module-quiz__response-option--active' : '')]">
            <img class="module-quiz__option-content-image" v-if="element.img.src" :src="url+'/'+element.img.src" :alt="element.img.alt">
            <p v-if="element.text" v-html="element.text" class="module-quiz__option-content-text"></p>

            <div class="module-quiz__response" :class="[(element.show ? 'module-quiz__response--active' : '')]">
              <p v-if="element.response.text" class="module-quiz__response-text" v-html="element.response.text"></p>
              <img v-if="element.response.img.src" :src="url+'/'+element.response.img.src" :alt="element.response.img.alt" class="module-quiz__response-image">
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// module-quiz__response-option--active
export default {
  data () {
    return {
      url: window.appURL
    }
  },
  props: [
    'object',
    'options',
    'slideNumber',
    'answer',
    'index'
  ],

  computed: {
    ...mapGetters(
      [
        'currentSlideNumber'
      ]
    )
  },

  methods: {
    ...mapActions(
      [
        'updateQuizResponse',
        'enableContinue'
      ]
    ),

    showResponse (optionIndex) {
      this.updateQuizResponse({ currentSlideIndex: parseInt(this.currentSlideNumber), currentQuestionIndex: parseInt(this.index), currentOptionIndex: parseInt(optionIndex) })
      this.enableContinue()
    }
  }
}
</script>
