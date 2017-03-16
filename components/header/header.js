if (!astad) { var astad = {} }
if (!astad.components) { astad.components = {} }

astad.components.AstadHeader = Vue.component("astad-header", {
	props: {
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: false
		},
		actions: {
			type: Array,
			required: false
		}
	},
	template: "#astad-header",
	data: function() {
		return {};
	}
});