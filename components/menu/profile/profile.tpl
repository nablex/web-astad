<template id="astad-menu-profile">
	<div class="popout-panel popout-panel-profile">
		<div class="popout-panel-inner">
			
			<header class="profile-header">
				<div class="avatar" v-if="$services.user.getProfile().avatarUrl">
					<img class="avatar" :src="$services.user.getProfile().avatarUrl">
				</div>
				<p class="profile-name">{{ name }}</p>
			</header>
			
			<section class="content" v-if="actions && actions.length">
				<ul class="lined unstyled">
					<li v-for="action in actions" v-show="!action.hidden">
						<slot action="action">
							<a auto-close href="javascript:void(0)" @click="action.handler">{{ action.title }}</a>
						</slot>
					</li>
				</ul>
			</section>
	
			<footer class="profile-footer">
				<a class="button danger has-icon full"
					alt="%{Klik hier om u af te melden}"
					@click="logout"
					auto-close="true">
					<span class="fa fa-power-off"></span>
					<span class="logout-text">%{Afmelden}</span>
				</a>
			</footer>
		</div>
	</div>
</template>