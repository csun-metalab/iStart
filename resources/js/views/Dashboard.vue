<template>
  <div class="dashboard container">
    <navbar :displayCurrentPage="$route.name"/>
    <div class="dashboard-content container">
      <dashboard-notification v-if="this.user.user_group === 'intervention'"/>
      <control-group v-if="this.user.user_group === 'control'"/>
      <dashboard-module v-if="this.user.user_group === 'comparison' || this.user.user_group === 'intervention'"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { changeRouteTitle } from './../mixins/changeRouteTitle.js'

import Navbar from './../components/global/Navbar'
import ControlGroup from './../components/dashboard/ControlGroup'
import DashboardModule from './../components/dashboard/DashboardModule'
import DashboardNotification from './../components/dashboard/DashboardNotification'

export default {
  name: 'Dashboard',
  mixins: [changeRouteTitle],
  components: {
    Navbar,
    ControlGroup,
    DashboardModule,
    DashboardNotification
  },

  computed: {
    ...mapGetters([
      'user'
    ])
  }
}
</script>
