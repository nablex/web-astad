Vue.component("astad-kaai", {
	props: {
		// A menu should have:
		// - title: the display
		// - alt: alt for the link (optional)
		// - hidden: set to "true" if the menu item should not be shown
		// - icon: an icon to show (optional)
		menus: {
			type: Array,
			required: true
		}
	},
	template: "#astad-kaai",
	data: function() {
		return {
			popoutVisible: false
		};
	},
	methods: {
		activate: function(menu) {
			if (menu.activate) {
				menu.activate.call(this);
			}
			if (menu.popout) {
				var self = this;
				this.$render({
					target: this.$refs.popout,
					content: menu.popout,
					ready: function() {
						self.popoutVisible = true;
					}
				});
			}
		}
	}
});