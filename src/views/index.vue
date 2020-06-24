<template>
  <div class="main">
		<span v-for="item in questionDataGetter" :key="item.title">{{ item.title }}</span>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters(['questionDataGetter'])
	},
	asyncData({store}) {
		return store.dispatch('QUERY_QUESTIONS_DATA')
	}
}
</script>