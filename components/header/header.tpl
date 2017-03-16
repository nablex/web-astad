<template id="astad-header">
	<header class="aos-header hide-print aos-header-fancy">
	    <div class="inner inner-header">
	        <div class="aos-header__wrapper">
	            <h3 v-if="title" v-html="title"></h3>
	            <h5 class="plain" v-if="description" v-html="description"></h5>
	            
	            <div class="tabs" v-if="actions && actions.length">
	                <ul class="tabs-list">
	                    <li v-for="action in actions" v-show="!action.hidden">
	                        <a href="javascript:void(0)" @click="action.handle">{{ action.title }}</a>
	                    </li>
	                </ul>
	            </div>
	        </div>
	    </div>
	</header>
</template>