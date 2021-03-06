<template>
  <section class="dashboard-module-wrap container">
    <loading v-if="isInitialDataLoad"/>
    <div class="dashboard-module text-center col-12" v-for="(item, index) in getModuleData" :key="index">
      <div v-if="item.show || isDemoModeEnabled" @click="setModuleIndex(index); populateModule(index); resetScreenPosition()">
        <div class="row">
          <div class="dashboard-module__overview-wrapper col-12 col-md-6">
            <div class="dashboard-module__overview row">
              <div class="dashboard-module__thumbnail">
                <img class="dashboard-module__thumbnail-image" v-bind:src="url+'/'+item.thumbnail.src" v-bind:alt="item.thumbnail.alt">
              </div>
            </div>
          </div>

          <div class="dashboard-module__info col-12 col-md-6">
            <div class="dashboard-module__header">
              {{item.name}}
            </div>
            <div class="dashboard-module__description">
              {{item.description}}
            </div>

            <div class="dashboard-module__body row no-gutters align-items-center">
              <div class="col-2">
                <div class="dashboard-module__progress">
                  <p class="dashboard-module__progress-text">
                    {{ Math.round(item.progress.slide_percentage) }}%
                  </p>
                  <loading-progress
                    class="dashboard-module__loader"
                    :progress="(item.progress.slide_percentage / 100)"
                    :size="size"
                    :shape="shape.circle"
                  />
                </div>
              </div>

              <div v-if="item.progress.due_date && !item.progress.is_review" class="col-6 col-md-10">
                <p class="dashboard-module__date">
                  Due: {{ dueDate(item.progress.due_date) }}
                </p>
              </div>
              <div class="dashboard-module__status-wrapper col-4 col-md-12">
                <button v-if="!item.progress.is_review && item.progress.slide_percentage === 0" class="dashboard-module__status">Start</button>
                <button v-else-if="!item.progress.is_review && item.progress.slide_percentage !== 0" class="dashboard-module__status">
                  Continue
                  <i class="dashboard-module__status-indicator fas fa-chevron-right"></i>
                </button>
                <button v-else-if="item.progress.is_review" class="dashboard-module__status">Review</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { changeRouteTitle } from './../../mixins/changeRouteTitle.js'
import moduleData from './../module/data/moduleData'
import Loading from './../global/Loading'

export default {
  name: 'DashboardModule',
  mixins: [
    changeRouteTitle
  ],

  components: {
    Loading
  },

  data () {
    return {
      url: window.appURL,
      size: 50,
      shape: {
        circle: 'circle',
        line: 'line'
      }
    }
  },

  computed: {
    ...mapGetters(
      [
        'user',
        'isDemoModeEnabled',
        'getModuleData',
        'getCurrentModule',
        'isInitialDataLoad'
      ]
    )
  },

  mounted () {
    this.setModuleData(moduleData)
    this.resetScreenPosition()

    if (this.isInitialDataLoad && !this.isDemoModeEnabled) {
      let daysToRelease = document.head.querySelector('meta[name="days-to-release"]').content
      this.requestModuleProgress({ userId: this.user.user_id, userGroup: this.user.user_group, daysToRelease: daysToRelease, currentModule: this.getCurrentModule })
    }

    if (this.isDemoModeEnabled) {
      this.markAllModulesAsReview()
    }
  },

  updated () {
    if (this.isDemoModeEnabled) {
      this.markAllModulesAsReview()
    }
  },

  methods: {
    ...mapActions(
      [
        'setModuleData',
        'setCurrentModule',
        'setModuleIndex',
        'requestModuleProgress',
        'markAllModulesAsReview'
      ]
    ),

    populateModule (index) {
      this.setCurrentModule(this.getModuleData[index].name)
      if (this.getCurrentModule !== null || this.getCurrentModule !== 'undefined') {
        this.$router.push({ name: 'Module' })
      }
    },

    resetScreenPosition () {
      document.getElementById('app').scrollIntoView()
    },
    dueDate (date) {
      return window.moment(date).format('MM/DD/YYYY')
    }
  }
}
</script>
