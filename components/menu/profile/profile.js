if (!astad) { var astad = {} }
if (!astad.components) { astad.components = {} }
if (!astad.components.menu) { astad.components.menu = {} }

astad.components.menu.profile = Vue.component("astad-menu-profile", {
	props: {
		name: {
			type: String,
			required: true
		},
		logout: {
			type: Function,
			required: true
		},
		// an action should have:
		// - title: display title
		// - handler: triggered when the action is performed
		// - hidden: should be set to true if the action should be hidden
		actions: {
			type: Array,
			required: false
		},
		avatar: {
			type: Array,
			required: false
		}
	},
	template: "#astad-menu-profile",
	data: function() {
		return {};
	}
});