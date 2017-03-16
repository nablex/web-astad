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
		// a menu should have:
		// - title: display title
		//
		// if you use the default slot, you also need:
		// - route: the route to switch to
		// - parameters: the parameters for the route (if any)
		// - target: the target of the route (if any)
		menus: {
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