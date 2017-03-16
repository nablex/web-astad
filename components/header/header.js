Vue.component("astad-header", {
	props: {
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: false
		},
		// an action should have:
		// - title: display title
		// - handler: triggered when the action is performed
		// - hidden: should be set to true if the action should be hidden
		actions: {
			type: Array,
			required: false
		},
		// upon drawing, you can activate one of the actions
		activate: {
			type: Object,
			required: false
		}
	},
	template: "#astad-header",
	data: function() {
		return {
			active: null
		};
	},
	ready: function() {
		if (this.activate) {
			this.handle(this.activate);
		}
	},
	methods: {
		handle: function(action) {
			this.active = action;
			if (action.handler) {
				action.handler();
			}
		},
		clear: function() {
			this.active = null;
		}
	}
});