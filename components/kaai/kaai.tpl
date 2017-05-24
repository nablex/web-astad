<template id="astad-kaai">
	<div class="kaai" v-sticky-header="240">
		<div class="kaai-outer-container">
			<div class="logo-wrapper">
				<a href="https://antwerpen.be" target="_blank">
					<img src="/resources/images/astad.png"/>
				</a>
			</div>
			<div class="kaai-wrapper">
				<div class="kaai-inner-container">
					<div class="quick-menu" v-auto-close="function() { popoutVisible = false }">
						<div class="quick-menu-item" :menu="menu.name" v-for="menu in menus" v-show="!menu.hide">
							<slot menu="menu">
								<a class="button has-icon" href="javascript:void(0)" @click="activate(menu)" :title="menu.title" :alt="menu.alt">
									<span class="fa avatar" :class="menu.icon" v-if="menu.icon"></span>
									<span class="fa avatar" v-if="menu.img">
										<img :src="menu.img" :alt="menu.title">
									</span>
									<span class="button-text">{{ menu.title }}</span>
								</a>
							</slot>
						</div>
						<div ref="popout" v-show="popoutVisible" class="ng-fade"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>